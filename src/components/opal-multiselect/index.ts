import { IEvent } from 'cellx';
import { computed } from 'cellx-decorators';
import { d, getText, Template } from 'rionite';
import '../../assets/icons/opal-components__icon-cross.svg';
import { IDataProvider, OpalLoadedList } from '../opal-loaded-list';
import { OpalSelect } from '../opal-select';
import { OpalTextInput } from '../opal-text-input';
import './index.css';
import template = require('./template.nelm');

@d.Component<OpalMultiselect>({
	elementIs: 'opal-multiselect',

	i18n: {
		queryInputPlaceholder: getText.t('Поиск'),
		nothingSelected: getText.t('Ничего не выбрано')
	},

	input: {
		multiple: true,
		dataprovider: { type: Object, readonly: true }
	},

	template: (OpalSelect.template as Template).extend(template),

	events: {
		'btn-close': {
			click() {
				this.close();
				this.focus();
			}
		}
	},

	domEvents: {
		'btn-deselect-item': {
			click(_: any, btn: HTMLElement) {
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

		if (!input.$specified.has('dataprovider')) {
			throw new TypeError('Input property "dataprovider" is required');
		}

		let dataProvider = input.dataprovider;

		if (!dataProvider) {
			throw new TypeError('"dataProvider" is not defined');
		}

		this.dataProvider = dataProvider;
	}

	elementAttached() {
		super.elementAttached();

		this.listenTo('query-input', {
			input: this._onQueryInputInput,
			clear: this._onQueryInputClear
		});
	}

	_onQueryInputInput(evt: IEvent<OpalTextInput>) {
		this.$<OpalLoadedList>('loaded-list')!.input.query = evt.target.value;
	}

	_onQueryInputClear() {
		this.$<OpalLoadedList>('loaded-list')!.input.query = '';
	}
}
