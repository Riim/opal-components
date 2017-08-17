import { define } from 'cellx';
import { Component, d } from 'rionite';
import ObservableTreeList from '../../ObservableTreeList';
import './index.css';
import './opal-tree-list-item';
import template = require('./template.nelm');

@d.Component({
	elementIs: 'opal-tree-list',

	input: {
		datatreelistKeypath: { type: String, required: true, readonly: true }
	},

	template
})
export class OpalTreeList extends Component {
	dataTreeList: ObservableTreeList | null;

	initialize() {
		let context = this.ownerComponent || window;
		let getDataTreeList = Function(`return this.${ this.input.datatreelistKeypath };`);
		define(this, 'dataTreeList', () => getDataTreeList.call(context));

		// let x = this.dataTreeList!.get([])!.children![0].children![0].;
	}
}
