export interface IService {
    fixUrlData?: (data: Record<string, any>) => void;
    shareUrl: string;
    popupWidth?: number;
    popupHeight?: number;
    counterUrl?: string;
    extractCounter?: (data: Record<string, any>) => number;
    getCounter?: (url: string) => Promise<number>;
}
export declare const services: Record<string, IService>;
