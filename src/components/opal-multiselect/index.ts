import { getText } from '@riim/gettext';
import { IEvent } from 'cellx';
import { computed } from 'cellx-decorators';
import { ComponentConfig, Template } from 'rionite';
import { IDataProvider, OpalLoadedList } from '../opal-loaded-list';
import { OpalSelect } from '../opal-select';
import { OpalTextInput } from '../opal-text-input';
import './index.css';
import template from './template.nelm';

@ComponentConfig<OpalMultiselect>({
	elementIs: 'opal-multiselect',

	i18n: {
		queryInputPlaceholder: getText.t('Поиск'),
		nothingSelected: getText.t('Ничего не выбрано')
	},

	input: {
		multiple: true,
		dataProvider: { type: Object, readonly: true }
	},

	template: (OpalSelect.template as Template).extend(template),

	events: {
		'query-input': {
			input(evt: IEvent<OpalTextInput>) {
				this.$<OpalLoadedList>('loaded-list')!.input.query = evt.target.value;
			},

			clear() {
				this.$<OpalLoadedList>('loaded-list')!.input.query = '';
			}
		},

		'btn-close': {
			click() {
				this.close();
				this.focus();
			}
		}
	},

	domEvents: {
		'btn-deselect-item': {
			click(evt, btn: HTMLElement) {
				let vmItemValueFieldName = this._viewModelItemValueFieldName;
				let itemValue = btn.dataset.itemValue;
				this.viewModel.removeAt(this.viewModel.findIndex((item) => item[vmItemValueFieldName] == itemValue));
			}
		}
	}
})
export class OpalMultiselect extends OpalSelect {
	dataProvider: IDataProvider | null;

	@computed get isNothingSelectedShown(): boolean {
		return !this.viewModel.length;
	}

	initialize() {
		super.initialize();

		let input = this.input;

		if (!input.$specified.has('dataProvider')) {
			throw new TypeError('Input property "dataProvider" is required');
		}

		let dataProvider = input.dataProvider;

		if (!dataProvider) {
			throw new TypeError('"dataProvider" is not defined');
		}

		this.dataProvider = dataProvider;
	}
}
