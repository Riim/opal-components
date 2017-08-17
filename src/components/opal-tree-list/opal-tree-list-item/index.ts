import { define } from 'cellx';
import { Component, d } from 'rionite';
import { IItem } from '../../../ObservableTreeList';
import './index.css';
import template = require('./template.nelm');

@d.Component({
	elementIs: 'opal-tree-list-item',

	input: {
		datatreelist: { type: Object, required: true },
		indexpath: { type: eval, required: true }
	},

	template
})
export class OpalTreeListItem extends Component {
	children: IItem;

	initialize() {
		let input = this.input;
		define(this, 'children', () => input.datatreelist.get(input.indexpath)!.children);
	}
}
