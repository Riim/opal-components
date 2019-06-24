import { ObservableList } from 'cellx';
import { BaseComponent } from 'rionite';
import './index.css';
import { ReadableFile } from './ReadableFile';
import './icons/iconFile.svg?id=OpalFileUpload__iconFile';
import './icons/iconSpinner.svg?id=OpalFileUpload__iconSpinner';
import './icons/iconTrash.svg?id=OpalFileUpload__iconTrash';
export { ReadableFile };
export declare class OpalFileUpload extends BaseComponent {
    allowType: string;
    sizeLimit: number;
    totalSizeLimit: number;
    _reFileType: RegExp;
    _size: number;
    files: ObservableList<ReadableFile>;
    errorMessage: string | null;
    error: boolean;
    initialize(): void;
    elementAttached(): void;
    _onFilesInputChange(evt: Event): void;
    _onDropZoneDragEnter(evt: DragEvent): void;
    _onDropZoneDragOver(evt: DragEvent): void;
    _onDropZoneDragLeave(evt: DragEvent): void;
    _onDropZoneDrop(evt: DragEvent): void;
    _onDropZoneClick(): void;
    _addFiles(files: FileList): boolean;
}
