import { RtContent } from 'rionite';
import { OpalTreeListItem } from '../OpalTreeListItem';
import { OpalTreeList } from './';
export default function _getListItemContext(this: OpalTreeList | OpalTreeListItem, context: {
    [name: string]: any;
}, content: RtContent): {
    [name: string]: any;
};
