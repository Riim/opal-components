import { escapeRegExp } from '@riim/escape-regexp';
import { pt, t } from '@riim/gettext';
import { nextTick } from '@riim/next-tick';
import { getUID } from '@riim/next-uid';
import { OpalButton } from '@riim/opal-button';
import { nodeContains } from '@riim/opal-components-common';
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

@Component<OpalFileInput>({
	elementIs: 'OpalFileInput',
	template,

	events: {
		btnSelectFile: {
			[OpalButton.EVENT_CLICK]() {
				this.$<HTMLElement>('filesInput')!.click();
			}
		}
	},

	domEvents: {
		btnRemoveFile: {
			click(evt, context) {
				evt.preventDefault();

				this.dataList.remove(context.fileData);
				this.emit(OpalFileInput.EVENT_CHANGE);
			}
		},

		btnClear: {
			click(evt) {
				evt.preventDefault();

				this.dataList.clear();
				this.btnSelectFile!.focus();

				this.emit(OpalFileInput.EVENT_CLEAR);
				this.emit(OpalFileInput.EVENT_CHANGE);
			}
		}
	}
})
export class OpalFileInput extends BaseComponent {
	static EVENT_CHANGE = Symbol('change');
	static EVENT_CLEAR = Symbol('clear');

	@Param({ type: Boolean, readonly: true })
	multiple: boolean;
	@Param({ default: new ObservableList() })
	dataList: TDataList;
	@Param({ type: String, readonly: true })
	allowType: string | null;
	@Param(Number)
	sizeLimit: number | null;
	@Param(Number)
	totalSizeLimit: number | null;
	@Param({ default: pt('OpalFileInput#buttonText', 'Выбрать файл') })
	buttonText: string;
	@Param({ default: pt('OpalFileInput#placeholder', 'Не выбрано') })
	placeholder: string;
	@Param(Boolean)
	disabled: boolean;

	_reFileType: RegExp;

	@Computed
	get files() {
		return this.dataList.map((fileData) => fileData.file!).filter((file) => file);
	}

	@Observable
	errorMessage: string | null;

	fileListEl: HTMLElement | null;
	dropZoneEl: HTMLElement;
	btnSelectFile: OpalButton | null;

	_fileListListening: IDisposableListening;

	validator: { validate(): boolean } | null = null;

	initialize() {
		if (this.allowType) {
			this._reFileType = RegExp(
				`^(?:${this.allowType
					.split(',')
					.map((type) => escapeRegExp(type.trim()))
					.join('|')
					.split('\\*')
					.join('.*')})$`
			);
		}
	}

	ready() {
		this.fileListEl = this.$<HTMLElement>('fileList');
		this.dropZoneEl = this.$<HTMLElement>('dropZone')!;
		this.btnSelectFile = this.$<OpalButton>('btnSelectFile');
	}

	elementAttached() {
		if (this.fileListEl) {
			this.listenTo(this.fileListEl, 'dragstart', this._onFileListDragStart);
		}
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
	_onDropZoneDragOver(evt: Event) {
		evt.preventDefault();
		(evt as DragEvent).dataTransfer!.dropEffect = 'copy';
	}

	@Listen('dragleave', 'dropZone')
	_onDropZoneDragLeave() {
		this.dropZoneEl.removeAttribute('hovering');
	}

	@Listen('drop', 'dropZone')
	_onDropZoneDrop(evt: Event) {
		evt.preventDefault();
		this.dropZoneEl.removeAttribute('hovering');
		this._addFiles((evt as DragEvent).dataTransfer!.files);
	}

	@Listen('click', 'dropZone')
	_onDropZoneClick(evt: Event) {
		if (this.errorMessage) {
			this.errorMessage = null;
		} else if (
			this.multiple ||
			((evt.target as Element).tagName != 'A' &&
				(evt.target as Element) != this.btnSelectFile!.element &&
				!nodeContains(this.btnSelectFile!.element, evt.target as Element, this.element))
		) {
			this.$<HTMLElement>('filesInput')!.click();
		}
	}

	_onFileListDragStart(evt: Event) {
		dragEl = evt.target as HTMLElement;

		(evt as DragEvent).dataTransfer!.effectAllowed = 'move';
		(evt as DragEvent).dataTransfer!.setData('Text', dragEl.textContent!);

		this._fileListListening = this.listenTo(this.fileListEl!, {
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

	_onFileListDragEnter(evt: Event) {
		let target = this._getFileElement(evt.target as HTMLElement);

		if (!target || target === dragEl) {
			return;
		}

		let targetFileDataUID = target.dataset.fileDataUid!;
		let dragElFileDataUID = dragEl!.dataset.fileDataUid!;
		let targetFileDataIndex = this.dataList.findIndex(
			(fileData) => getUID(fileData) == targetFileDataUID
		);
		let dragElFileDataIndex = this.dataList.findIndex(
			(fileData) => getUID(fileData) == dragElFileDataUID
		);
		let targetFileData = this.dataList.get(targetFileDataIndex)!;

		EventEmitter.transact(() => {
			this.dataList.set(targetFileDataIndex, this.dataList.get(dragElFileDataIndex)!);
			this.dataList.set(dragElFileDataIndex, targetFileData);
		});

		this.emit(OpalFileInput.EVENT_CHANGE);
	}

	_onFileListDragOver(evt: Event) {
		evt.preventDefault();
		(evt as DragEvent).dataTransfer!.dropEffect = 'move';
	}

	_onFileListDrop(evt: Event) {
		evt.preventDefault();
	}

	_onFileListDragEnd() {
		this._fileListListening.stop();
		dragEl!.removeAttribute('ghost');

		dragEl = null;
	}

	_addFiles(files: FileList) {
		let sizeLimit = this.sizeLimit;
		let totalSizeLimit = this.totalSizeLimit;
		let reFileType = this._reFileType;
		let size = this.multiple
			? this.dataList.reduce((size, file) => size + (file.size || 0), 0)
			: 0;
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

			if (!this.multiple) {
				this.dataList.clear();
			}

			this.dataList.add(fileData);

			let reader = new FileReader();

			reader.addEventListener('load', (evt) => {
				this.dataList.replace(fileData, {
					...fileData,
					dataURI: `data:${file.type};base64,${btoa(evt.target!.result as string)}`
				});
			});

			reader.readAsBinaryString(file);

			this.emit(OpalFileInput.EVENT_CHANGE);
		}

		return true;
	}

	_getFileElement(node: Node, stopEl = this.fileListEl) {
		let el = node.nodeType == Node.ELEMENT_NODE ? (node as HTMLElement) : node.parentElement!;

		for (; el != stopEl; el = el.parentElement!) {
			if (el.dataset.fileDataUid) {
				return el;
			}
		}

		return null;
	}

	_isImage(fileData: IFileData) {
		if (fileData.file && fileData.file.type.startsWith('image/')) {
			return true;
		}
		if (fileData.url && /\.(gif|jpeg|jpg|png|svg)$/.test(fileData.url)) {
			return true;
		}

		return false;
	}

	clear() {
		this.dataList.clear();
		return this;
	}

	focus() {
		(this.btnSelectFile || this.$<HTMLElement>('btnSelectFiles'))!.focus();
		return this;
	}

	blur() {
		(this.btnSelectFile || this.$<HTMLElement>('btnSelectFiles'))!.blur();
		return this;
	}

	enable() {
		this.disabled = false;
		return this;
	}

	disable() {
		this.disabled = true;
		return this;
	}

	validate() {
		return !this.validator || this.validator.validate();
	}
}
