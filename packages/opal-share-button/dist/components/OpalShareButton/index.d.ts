import { OpalButton } from '@riim/opal-button';
import './index.css';
import { IService } from './lib/services';
export declare class OpalShareButton extends OpalButton {
    service: 'facebook' | 'linkedin' | 'odnoklassniki' | 'pinterest' | 'telegram' | 'twitter' | 'viber' | 'vkontakte' | 'whatsapp' | (string & {
        _?: never;
    });
    url: string | null;
    _service: IService;
    get _url(): string;
    counter: number | undefined;
    initialize(): void;
    ready(): Promise<void>;
    click(): this;
    _getContentContext(context: Object): {
        __proto__: Object;
    };
}
