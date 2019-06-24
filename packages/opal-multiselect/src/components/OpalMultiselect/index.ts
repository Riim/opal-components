import { IDataProvider, OpalLoadedList } from '@riim/opal-loaded-list';
import { OpalSelect } from '@riim/opal-select';
import { OpalTextInput } from '@riim/opal-text-input';
import { isMobile } from '@riim/platform';
import { IEvent } from 'cellx';
import { Computed } from 'cellx-decorators';
import { Component, Param, Template } from 'rionite';
import './index.css';
import template from './template.rnt';

@Component<OpalMultiselect>({
	elementIs: 'OpalMultiselect',

	template: (OpalSelect.template as Template).extend(template),

	events: {
		queryInput: {
			input(evt: IEvent<OpalTextInput>) {
				this.$<OpalLoadedList>('loadedList')!.query = evt.target.value as any;
			},

			clear() {
				this.$<OpalLoadedList>('loadedList')!.query = '';
			}
		},

		btnClose: {
			click() {
				this.close();
				this.focus();
			}
		}
	},

	domEvents: {
		btnDeselectItem: {
			click(evt, context) {
				this.viewModel.remove(context.item);
			}
		}
	}
})
export class OpalMultiselect extends OpalSelect {
	@Param
	multiple = true;
	@Param({ readonly: true })
	paramDataProvider: IDataProvider;

	dataProvider: IDataProvider | null;

	@Computed
	get nothingSelectedShown(): boolean {
		return !this.viewModel.length;
	}

	_queryInputClass: string | undefined;

	initialize() {
		super.initialize();

		if (!this.$specifiedParams || !this.$specifiedParams.has('dataProvider')) {
			throw new TypeError('Parameter "dataProvider" is required');
		}

		this.dataProvider = this.paramDataProvider;

		if (!this.dataProvider) {
			throw new TypeError('"dataProvider" is not defined');
		}

		if (!isMobile) {
			this._queryInputClass = 'OpalSelect__focus';
		}
	}
}
