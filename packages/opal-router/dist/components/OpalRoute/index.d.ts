import { BaseComponent } from 'rionite';
export declare class OpalRoute extends BaseComponent {
    path: string;
    component: string;
    lazyLoadComponent: () => Promise<typeof BaseComponent>;
}
