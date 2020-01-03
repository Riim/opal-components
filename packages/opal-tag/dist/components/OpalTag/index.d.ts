import { BaseComponent } from 'rionite';
import './index.css';
export declare class OpalTag extends BaseComponent {
    viewType: 'default' | 'primary' | 'success' | 'warning' | 'danger' | (string & {
        _?: never;
    });
}
