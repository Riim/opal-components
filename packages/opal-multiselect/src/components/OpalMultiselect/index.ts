import { OpalButton } from '@riim/opal-button';
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
			[OpalTextInput.EVENT_INPUT](evt: IEvent<OpalTextInput>) {
				this.$<OpalLoadedList>('loadedList')!.query = evt.target.value as any;
			},

			[OpalTextInput.EVENT_CLEAR]() {
				this.$<OpalLoadedList>('loadedList')!.query = '';
			}
		},

		btnClose: {
			[OpalButton.EVENT_CLICK]() {
				this.close();
				this.focus();
			}
		}
	},

	domEvents: {
		btnDeselectItem: {
			click(_evt, context) {
				this.viewModel.remove(context.item);
			}
		}
	}
})
export class OpalMultiselect extends OpalSelect {
	@Param({ default: true })
	multiple: boolean;
	@Param({ required: true, readonly: true })
	dataProvider: IDataProvider;

	@Computed
	get nothingSelectedShown(): boolean {
		return !this.viewModel.length;
	}

	_queryInputClass: string | undefined;

	initialize() {
		super.initialize();

		if (!isMobile) {
			this._queryInputClass = 'OpalSelect__focus';
		}
	}
}
