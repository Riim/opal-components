import { BaseComponent } from 'rionite';
export declare class OpalRoute extends BaseComponent {
    path: string;
    component: string | null;
    lazyLoadComponent: (() => Promise<typeof BaseComponent>) | null;
}
