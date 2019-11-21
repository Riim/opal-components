import { IDataProvider } from '@riim/opal-loaded-list';
import { OpalPopover } from '@riim/opal-popover';
import { IDataListItem, OpalSelect, TDataList, TViewModel } from '@riim/opal-select';
import { IEvent } from 'cellx';
import { BaseComponent } from 'rionite';
import './index.css';
export declare class OpalTagSelect extends BaseComponent {
    static EVENT_CHANGE: symbol;
    static EVENT_INPUT: symbol;
    static EVENT_TAG_CLICK: symbol;
    static defaultDataListItemSchema: Readonly<{
        value: string;
        text: string;
        subtext: string;
        disabled: string;
    }>;
    static defaultViewModelItemSchema: Readonly<{
        value: string;
        text: string;
        disabled: string;
    }>;
    viewType: 'default' | 'primary' | 'success' | 'warning' | 'danger' | (string & {
        _?: never;
    });
    paramDataList: TDataList;
    dataListKeypath: string;
    dataListItemSchema: {
        value?: string;
        text?: string;
        subtext?: string;
        disabled?: string;
    };
    dataProvider: IDataProvider;
    paramValue: Array<string>;
    viewModel: TViewModel;
    viewModelItemSchema: {
        value?: string;
        text?: string;
        disabled?: string;
    };
    addNewItem: (text: string) => Promise<Record<string, string>>;
    placeholder: string;
    popoverPosition: typeof OpalPopover.prototype.position;
    tabIndex: number;
    focused: boolean;
    disabled: boolean;
    dataList: TDataList | null;
    _dataListItemValueFieldName: string;
    _dataListItemTextFieldName: string;
    _dataListItemSubtextFieldName: string;
    _dataListItemDisabledFieldName: string;
    _viewModelItemValueFieldName: string;
    _viewModelItemTextFieldName: string;
    _viewModelItemDisabledFieldName: string;
    get value(): Array<string>;
    get placeholderShown(): boolean;
    _selectDataListKeypath: string | null;
    select: OpalSelect;
    validator: {
        validate(): boolean;
    } | null;
    _isItemDisabled(item: IDataListItem): any;
    initialize(): void;
    ready(): void;
    _onDisabledChange(evt: IEvent): void;
    _onSelectInput(): false;
    _onSelectChange(): false;
    _onSelectSelect(): false;
    _onSelectDeselect(): false;
    open(): boolean;
    close(): boolean;
    toggle(): boolean;
    focus(): this;
    blur(): this;
    enable(): this;
    disable(): this;
    validate(): boolean;
}
