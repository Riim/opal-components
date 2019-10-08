import { escapeRegExp } from '@riim/escape-regexp';
import { t } from '@riim/gettext';
import { ObservableList } from 'cellx';
import { Computed, Observable } from 'cellx-decorators';
import {
	BaseComponent,
	Component,
	Listen,
	Param
	} from 'rionite';
import './index.css';
import template from './template.rnt';
import './icons/iconFile.svg?id=OpalFileUpload__iconFile';
import './icons/iconSpinner.svg?id=OpalFileUpload__iconSpinner';
import './icons/iconTrash.svg?id=OpalFileUpload__iconTrash';

export interface IFileData {
	id?: string;
	name: string;
	file?: File;
	dataURI?: string;
	url?: string;
	size?: number;
}

export type TDataList = ObservableList<IFileData>;

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

	@Listen('change', 'filesInput')
	_onFilesInputChange(evt: Event) {
		this._addFiles((evt.target as HTMLInputElement).files!);
		(evt.target as HTMLInputElement).value = '';
	}

	@Listen('dragenter', 'dropZone')
	_onDropZoneDragEnter(evt: DragEvent) {
		this.errorMessage = null;
		(evt.target as HTMLElement).setAttribute('hovering', '');
	}

	@Listen('dragover', 'dropZone')
	_onDropZoneDragOver(evt: DragEvent) {
		evt.preventDefault();
		evt.dataTransfer!.dropEffect = 'copy';
	}

	@Listen('dragleave', 'dropZone')
	_onDropZoneDragLeave(evt: DragEvent) {
		(evt.target as HTMLElement).removeAttribute('hovering');
	}

	@Listen('drop', 'dropZone')
	_onDropZoneDrop(evt: DragEvent) {
		evt.preventDefault();
		(evt.target as HTMLElement).removeAttribute('hovering');
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
