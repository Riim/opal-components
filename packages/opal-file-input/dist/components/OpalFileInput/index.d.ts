import { OpalButton } from '@riim/opal-button';
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
export declare class OpalFileInput extends BaseComponent {
    static EVENT_CHANGE: symbol;
    static EVENT_CLEAR: symbol;
    multiple: boolean;
    dataList: TDataList;
    allowType: string | null;
    sizeLimit: number | null;
    totalSizeLimit: number | null;
    buttonText: string;
    placeholder: string;
    disabled: boolean;
    _reFileType: RegExp;
    get files(): File[];
    errorMessage: string | null;
    fileListEl: HTMLElement | null;
    dropZoneEl: HTMLElement;
    btnSelectFile: OpalButton | null;
    _fileListListening: IDisposableListening;
    validator: {
        validate(): boolean;
    } | null;
    initialize(): void;
    ready(): void;
    elementAttached(): void;
    _onFilesInputChange(evt: Event): void;
    _onDropZoneDragEnter(): void;
    _onDropZoneDragOver(evt: Event): void;
    _onDropZoneDragLeave(): void;
    _onDropZoneDrop(evt: Event): void;
    _onDropZoneClick(evt: Event): void;
    _onFileListDragStart(evt: Event): void;
    _onFileListDragEnter(evt: Event): void;
    _onFileListDragOver(evt: Event): void;
    _onFileListDrop(evt: Event): void;
    _onFileListDragEnd(): void;
    _addFiles(files: FileList): boolean;
    _getFileElement(node: Node, stopEl?: HTMLElement | null): HTMLElement | null;
    _isImage(fileData: IFileData): boolean;
    clear(): this;
    focus(): this;
    blur(): this;
    enable(): this;
    disable(): this;
    validate(): boolean;
}
