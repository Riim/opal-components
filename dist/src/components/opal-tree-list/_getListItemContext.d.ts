import { RtContent } from 'rionite';
import { OpalTreeList } from './index';
import { OpalTreeListItem } from './opal-tree-list-item/index';
export default function _getListItemContext(this: OpalTreeList | OpalTreeListItem, context: {
    [name: string]: any;
}, content: RtContent): {
    [name: string]: any;
};
