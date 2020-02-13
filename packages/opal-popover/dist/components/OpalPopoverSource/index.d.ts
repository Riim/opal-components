import { BaseComponent, IDisposableTimeout } from 'rionite';
import { OpalPopover } from '../OpalPopover';
import './index.css';
export declare class OpalPopoverSource extends BaseComponent {
    active: boolean;
    popoverTarget: BaseComponent | Element;
    popover: OpalPopover;
    mouseLeaveTimeout: IDisposableTimeout | null;
    ready(): void;
    elementAttached(): void;
    _onPopoverTargetCheck(): void;
    _onPopoverTargetUncheck(): void;
    _onPopoverTargetClick(): void;
    _onPopoverTargetMouseEnter(): void;
    _onPopoverTargetMouseLeave(): void;
    _onPopoverTargetMouseLeaveTimeout(): void;
    _onPopoverElementMouseEnter(): void;
    _onPopoverElementMouseLeave(): void;
    _onPopoverElementMouseLeaveTimeout(): void;
    _onPopoverClose(): void;
}
