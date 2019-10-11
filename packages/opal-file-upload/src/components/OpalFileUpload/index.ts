import { escapeRegExp } from '@riim/escape-regexp';
import { t } from '@riim/gettext';
import { nextTick } from '@riim/next-tick';
import { getUID } from '@riim/uid';
import { EventEmitter, ObservableList } from 'cellx';
import { Computed, Observable } from 'cellx-decorators';
import {
	BaseComponent,
	Component,
	IDisposableListening,
	Listen,
	Param
	} from 'rionite';
import './index.css';
import template from './template.rnt';

export interface IFileData {
	id?: string;
	name: string;
	file?: File;
	dataURI?: string;
	url?: string;
	size?: number;
	[name: string]: any;
}

export type TDataList = ObservableList<IFileData>;

let dragEl: HTMLElement | null = null;

@Component<OpalFileUpload>({
	elementIs: 'OpalFileUpload',
	template,

	domEvents: {
		btnRemoveFile: {
			click(_evt, context) {
				this.dataList.remove(context.fileData);
			}
		}
	}
})
export class OpalFileUpload extends BaseComponent {
	@Param('dataList', { default: new ObservableList() })
	dataList: TDataList;
	@Param({ readonly: true })
	allowType: string;
	@Param
	sizeLimit: number;
	@Param
	totalSizeLimit: number;

	_reFileType: RegExp;

	@Computed
	get files(): Array<File> {
		return this.dataList.map(fileData => fileData.file!).filter(file => file);
	}

	@Observable
	errorMessage: string | null;

	fileListEl: HTMLElement;
	dropZoneEl: HTMLElement;

	_fileListListening: IDisposableListening;

	initialize() {
		if (this.allowType) {
			this._reFileType = RegExp(
				`^(?:${this.allowType
					.split(',')
					.map(type => escapeRegExp(type.trim()))
					.join('|')
					.split('\\*')
					.join('.*')})$`
			);
		}
	}

	ready() {
		this.fileListEl = this.$<HTMLElement>('fileList')!;
		this.dropZoneEl = this.$<HTMLElement>('dropZone')!;
	}

	@Listen('change', 'filesInput')
	_onFilesInputChange(evt: Event) {
		this._addFiles((evt.target as HTMLInputElement).files!);
		(evt.target as HTMLInputElement).value = '';
	}

	@Listen('dragenter', 'dropZone')
	_onDropZoneDragEnter() {
		this.errorMessage = null;

		if (!dragEl) {
			this.dropZoneEl.setAttribute('hovering', '');
		}
	}

	@Listen('dragover', 'dropZone')
	_onDropZoneDragOver(evt: DragEvent) {
		evt.preventDefault();
		evt.dataTransfer!.dropEffect = 'copy';
	}

	@Listen('dragleave', 'dropZone')
	_onDropZoneDragLeave() {
		this.dropZoneEl.removeAttribute('hovering');
	}

	@Listen('drop', 'dropZone')
	_onDropZoneDrop(evt: DragEvent) {
		evt.preventDefault();
		this.dropZoneEl.removeAttribute('hovering');
		this._addFiles(evt.dataTransfer!.files);
	}

	@Listen('click', 'dropZone')
	_onDropZoneClick() {
		if (this.errorMessage) {
			this.errorMessage = null;
		} else {
			this.$<HTMLElement>('filesInput')!.click();
		}
	}

	@Listen('dragstart', '@fileListEl')
	_onFileListDragStart(evt: DragEvent) {
		dragEl = evt.target as HTMLElement;

		evt.dataTransfer!.effectAllowed = 'move';
		evt.dataTransfer!.setData('Text', dragEl.textContent!);

		this._fileListListening = this.listenTo(this.fileListEl, {
			dragenter: this._onFileListDragEnter,
			dragover: this._onFileListDragOver,
			drop: this._onFileListDrop,
			dragend: this._onFileListDragEnd
		});

		nextTick(() => {
			// Без nextTick перетаскиваемый объект тоже будет иметь этот атрибут.
			dragEl!.setAttribute('ghost', '');
		});
	}

	_onFileListDragEnter(evt: DragEvent) {
		let target = this._getFileElement(evt.target as HTMLElement);

		if (!target || target === dragEl) {
			return;
		}

		let targetFileDataUID = target.dataset.fileDataUid!;
		let dragElFileDataUID = dragEl!.dataset.fileDataUid!;
		let targetFileDataIndex = this.dataList.findIndex(
			fileData => getUID(fileData) == targetFileDataUID
		);
		let dragElFileDataIndex = this.dataList.findIndex(
			fileData => getUID(fileData) == dragElFileDataUID
		);
		let targetFileData = this.dataList.get(targetFileDataIndex)!;

		EventEmitter.transact(() => {
			this.dataList.set(targetFileDataIndex, this.dataList.get(dragElFileDataIndex)!);
			this.dataList.set(dragElFileDataIndex, targetFileData);
		});
	}

	_onFileListDragOver(evt: DragEvent) {
		evt.preventDefault();
		evt.dataTransfer!.dropEffect = 'move';
	}

	_onFileListDrop(evt: DragEvent) {
		evt.preventDefault();
	}

	_onFileListDragEnd() {
		this._fileListListening.stop();
		dragEl!.removeAttribute('ghost');

		dragEl = null;
	}

	_addFiles(files: FileList): boolean {
		let sizeLimit = this.sizeLimit;
		let totalSizeLimit = this.totalSizeLimit;
		let reFileType = this._reFileType;
		let size = this.dataList.reduce((size, file) => size + (file.size || 0), 0);
		let errorMessage: string | undefined;

		for (let i = 0, l = files.length; i < l; i++) {
			let file = files[i];

			size += file.size;

			if (reFileType && !reFileType.test(file.type)) {
				errorMessage = t('Файл не подходит по типу');
			} else if (sizeLimit && file.size > sizeLimit) {
				errorMessage = t('Файл слишком большой');
			} else if (totalSizeLimit && size > totalSizeLimit) {
				errorMessage = t('Превышен лимит суммарного размера файлов');
			}

			if (errorMessage) {
				this.errorMessage = errorMessage;
				return false;
			}
		}

		for (let i = 0, l = files.length; i < l; i++) {
			let file = files[i];
			let fileData = {
				name: file.name,
				file,
				size: file.size
			};

			this.dataList.add(fileData);

			let reader = new FileReader();

			reader.addEventListener('load', evt => {
				this.dataList.replace(fileData, {
					...fileData,
					dataURI: `data:${file.type};base64,${btoa(evt.target!.result as string)}`
				});
			});

			reader.readAsBinaryString(file);
		}

		return true;
	}

	_getFileElement(node: Node, stopEl = this.fileListEl): HTMLElement | null {
		let el = node.nodeType == Node.ELEMENT_NODE ? (node as HTMLElement) : node.parentElement!;

		for (; el != stopEl; el = el.parentElement!) {
			if (el.dataset.fileDataUid) {
				return el;
			}
		}

		return null;
	}

	_isImage(fileData: IFileData): boolean {
		if (fileData.file && fileData.file.type.startsWith('image/')) {
			return true;
		}
		if (fileData.url && /\.(gif|jpeg|jpg|png|svg)$/.test(fileData.url)) {
			return true;
		}

		return false;
	}
}
