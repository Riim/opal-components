import { ObservableList } from 'cellx';
import { Component } from 'rionite';
import '../../src/focusHighlightController';
import '../../src/index';
import ObservableTreeList from '../../src/ObservableTreeList';
export declare class OpalComponentsDocs extends Component {
    dataList1: ObservableList<{
        id: string;
        name: string;
    }>;
    dataTreeList1: ObservableTreeList<{
        id: string;
        name: string;
    } | {
        id: string;
        name: string;
        children: ({
            id: string;
            name: string;
            children: ({
                id: string;
                name: string;
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
        })[];
    }>;
    dataProvider1: {
        getItems: (count: number, after: string | null, query: string | null) => Promise<{
            items: {
                id: string;
                name: string;
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
    }>;
    addNewItem1(name: string): Promise<{
        id: string;
        name: string;
    }>;
}
