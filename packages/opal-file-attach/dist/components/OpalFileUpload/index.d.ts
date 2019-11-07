import { ObservableList } from 'cellx';
import { BaseComponent, IDisposableListening } from 'rionite';
import './index.css';
export interface IFileData {
    id?: string;
    name: string;
    file?: File;
    dataURI?: string;
    url?: string;
    size?: number;
    [name: string]: any;
}
export declare type TDataList = ObservableList<IFileData>;
export declare class OpalFileUpload extends BaseComponent {
    dataList: TDataList;
    allowType: string;
    sizeLimit: number;
    totalSizeLimit: number;
    _reFileType: RegExp;
    get files(): Array<File>;
    errorMessage: string | null;
    fileListEl: HTMLElement;
    dropZoneEl: HTMLElement;
    _fileListListening: IDisposableListening;
    initialize(): void;
    ready(): void;
    _onFilesInputChange(evt: Event): void;
    _onDropZoneDragEnter(): void;
    _onDropZoneDragOver(evt: Event): void;
    _onDropZoneDragLeave(): void;
    _onDropZoneDrop(evt: Event): void;
    _onDropZoneClick(): void;
    _onFileListDragStart(evt: Event): void;
    _onFileListDragEnter(evt: Event): void;
    _onFileListDragOver(evt: Event): void;
    _onFileListDrop(evt: Event): void;
    _onFileListDragEnd(): void;
    _addFiles(files: FileList): boolean;
    _getFileElement(node: Node, stopEl?: HTMLElement): HTMLElement | null;
    _isImage(fileData: IFileData): boolean;
}
