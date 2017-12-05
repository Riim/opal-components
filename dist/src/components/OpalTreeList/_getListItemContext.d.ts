import { RtContent } from 'rionite';
import { OpalTreeList } from './';
import { OpalTreeListItem } from './OpalTreeListItem';
export default function _getListItemContext(this: OpalTreeList | OpalTreeListItem, context: {
    [name: string]: any;
}, content: RtContent): {
    [name: string]: any;
};
