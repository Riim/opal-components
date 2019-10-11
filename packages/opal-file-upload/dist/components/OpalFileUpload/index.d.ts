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
    readonly files: Array<File>;
    errorMessage: string | null;
    fileListEl: HTMLElement;
    dropZoneEl: HTMLElement;
    _fileListListening: IDisposableListening;
    initialize(): void;
    ready(): void;
    _onFilesInputChange(evt: Event): void;
    _onDropZoneDragEnter(): void;
    _onDropZoneDragOver(evt: DragEvent): void;
    _onDropZoneDragLeave(): void;
    _onDropZoneDrop(evt: DragEvent): void;
    _onDropZoneClick(): void;
    _onFileListDragStart(evt: DragEvent): void;
    _onFileListDragEnter(evt: DragEvent): void;
    _onFileListDragOver(evt: DragEvent): void;
    _onFileListDrop(evt: DragEvent): void;
    _onFileListDragEnd(): void;
    _addFiles(files: FileList): boolean;
    _getFileElement(node: Node, stopEl?: HTMLElement): HTMLElement | null;
    _isImage(fileData: IFileData): boolean;
}
