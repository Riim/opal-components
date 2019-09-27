import { escapeRegExp } from '@riim/escape-regexp';
import { t } from '@riim/gettext';
import { define, ObservableList } from 'cellx';
import {
	BaseComponent,
	Component,
	Listen,
	Param
	} from 'rionite';
import './index.css';
import { ReadableFile } from './ReadableFile';
import template from './template.rnt';
import './icons/iconFile.svg?id=OpalFileUpload__iconFile';
import './icons/iconSpinner.svg?id=OpalFileUpload__iconSpinner';
import './icons/iconTrash.svg?id=OpalFileUpload__iconTrash';

export { ReadableFile };

@Component<OpalFileUpload>({
	elementIs: 'OpalFileUpload',
	template,

	domEvents: {
		btnRemoveFile: {
			click(_evt, context) {
				let file: ReadableFile = context.file;
				this._size -= file.size;
				this.files.remove(file);
			}
		}
	}
})
export class OpalFileUpload extends BaseComponent {
	@Param({ readonly: true })
	allowType: string;
	@Param
	sizeLimit: number;
	@Param
	totalSizeLimit: number;

	_reFileType: RegExp;

	_size = 0;

	files: ObservableList<ReadableFile>;

	errorMessage: string | null;
	error: boolean;

	initialize() {
		this.files = new ObservableList<ReadableFile>();

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

		define(this, {
			errorMessage: null,
			error: false
		});
	}

	@Listen('change', 'filesInput')
	_onFilesInputChange(evt: Event) {
		this._addFiles((evt.target as HTMLInputElement).files!);
		(evt.target as HTMLInputElement).value = '';
	}

	@Listen('dragenter', 'dropZone')
	_onDropZoneDragEnter(evt: DragEvent) {
		this.error = false;
		(evt.target as HTMLElement).setAttribute('over', '');
	}

	@Listen('dragover', 'dropZone')
	_onDropZoneDragOver(evt: DragEvent) {
		evt.preventDefault();
		evt.dataTransfer!.dropEffect = 'copy';
	}

	@Listen('dragleave', 'dropZone')
	_onDropZoneDragLeave(evt: DragEvent) {
		(evt.target as HTMLElement).removeAttribute('over');
	}

	@Listen('drop', 'dropZone')
	_onDropZoneDrop(evt: DragEvent) {
		evt.preventDefault();
		(evt.target as HTMLElement).removeAttribute('over');
		this._addFiles(evt.dataTransfer!.files);
	}

	@Listen('click', 'dropZone')
	_onDropZoneClick() {
		if (this.error) {
			this.error = false;
		} else {
			this.$<HTMLElement>('filesInput')!.click();
		}
	}

	_addFiles(files: FileList): boolean {
		let sizeLimit = this.sizeLimit;
		let totalSizeLimit = this.totalSizeLimit;
		let reFileType = this._reFileType;
		let size = this._size;
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
				this.error = true;
				return false;
			}
		}

		this._size = size;

		for (let i = 0, l = files.length; i < l; i++) {
			let readableFile = new ReadableFile(files[i]);
			readableFile.read();
			this.files.add(readableFile);
		}

		return true;
	}
}
