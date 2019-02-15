import { ObservableList } from 'cellx';
import { ObservableTreeList } from 'opal-components';
import { BaseComponent } from 'rionite';
export declare class OpalComponentsExamples extends BaseComponent {
    dataList1: ObservableList<{
        id: string;
        name: string;
    }>;
    dataTreeList1: ObservableTreeList<{
        id: string;
        name: string;
        children?: undefined;
    } | {
        id: string;
        name: string;
        children: ({
            id: string;
            name: string;
            children: ({
                id: string;
                name: string;
                children?: undefined;
            } | {
                id: string;
                name: string;
                children: {
                    id: string;
                    name: string;
                }[];
            })[];
        } | {
            id: string;
            name: string;
            children?: undefined;
        })[];
    }>;
    dataProvider1: {
        getItems: (count: number, after: string | null, query: string | null) => Promise<{
            items: {
                id: string;
                name: string;
                parent: string;
            }[];
            total: number;
        }>;
    };
    dataProvider2: {
        getItems(query: string | null): Promise<{
            items: {
                id: string;
                name: string;
            }[];
        }>;
    };
    viewModel1: ObservableList<{
        id: string;
        name: string;
        disabled: boolean;
    } | {
        id: string;
        name: string;
        disabled?: undefined;
    }>;
    addNewItem1(name: string): Promise<{
        id: string;
        name: string;
    }>;
}
