import { ObservableList } from 'cellx';
import { BaseComponent } from 'rionite';
import './index.css';
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
export declare type TDataList = ObservableList<IFileData>;
export declare class OpalFileUpload extends BaseComponent {
    dataList: TDataList;
    allowType: string;
    sizeLimit: number;
    totalSizeLimit: number;
    _reFileType: RegExp;
    readonly files: Array<File>;
    errorMessage: string | null;
    initialize(): void;
    _onFilesInputChange(evt: Event): void;
    _onDropZoneDragEnter(evt: DragEvent): void;
    _onDropZoneDragOver(evt: DragEvent): void;
    _onDropZoneDragLeave(evt: DragEvent): void;
    _onDropZoneDrop(evt: DragEvent): void;
    _onDropZoneClick(): void;
    _addFiles(files: FileList): boolean;
    _isImage(fileData: IFileData): boolean;
}
