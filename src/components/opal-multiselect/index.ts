import { getText } from '@riim/gettext';
import { IEvent } from 'cellx';
import { Computed } from 'cellx-decorators';
import { Param, Template } from 'rionite';
import { IDataProvider, OpalLoadedList } from '../opal-loaded-list';
import { OpalSelect } from '../opal-select';
import { OpalTextInput } from '../opal-text-input';
import './index.css';
import template from './template.nelm';

@OpalSelect.Config<OpalMultiselect>({
	elementIs: 'OpalMultiselect',

	i18n: {
		queryInputPlaceholder: getText.t('Поиск'),
		nothingSelected: getText.t('Ничего не выбрано')
	},

	template: (OpalSelect.template as Template).extend(template),

	events: {
		'query-input': {
			input(evt: IEvent<OpalTextInput>) {
				this.$<OpalLoadedList>('loaded-list')!.paramQuery = evt.target.value as any;
			},

			clear() {
				this.$<OpalLoadedList>('loaded-list')!.paramQuery = '';
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

				this.viewModel.removeAt(
					this.viewModel.findIndex(item => item[vmItemValueFieldName] == itemValue)
				);
			}
		}
	}
})
export class OpalMultiselect extends OpalSelect {
	@Param paramMultiple = true;
	@Param({ readonly: true })
	paramDataProvider: IDataProvider;

	dataProvider: IDataProvider | null;

	@Computed
	get isNothingSelectedShown(): boolean {
		return !this.viewModel.length;
	}

	initialize() {
		super.initialize();

		if (!this.$specifiedParams.has('dataProvider')) {
			throw new TypeError('Parameter "dataProvider" is required');
		}

		this.dataProvider = this.paramDataProvider;

		if (!this.dataProvider) {
			throw new TypeError('"dataProvider" is not defined');
		}
	}
}
