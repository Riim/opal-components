import { define, IEvent } from 'cellx';
import { d, getText, Template } from 'rionite';
import '../../assets/icons/opal-components__icon-cross.svg';
import { IDataProvider, OpalLoadedList } from '../opal-loaded-list';
import { OpalSelect } from '../opal-select';
import { OpalTextInput } from '../opal-text-input';
import './index.css';
import template = require('./index.nelm');

@d.Component({
	elementIs: 'opal-multiselect',

	i18n: {
		queryInputPlaceholder: getText.t('Поиск'),
		nothingSelected: getText.t('Ничего не выбрано')
	},

	input: {
		multiple: true,
		dataprovider: { type: Object, readonly: true },
		dataproviderKeypath: { type: String, readonly: true }
	},

	template: (OpalSelect.template as Template).extend(template),

	oevents: {
		'query-input': {
			input(evt: IEvent) {
				(this.$('loaded-list') as OpalLoadedList).input.query = (evt.target as OpalTextInput).value;
			},

			clear() {
				(this.$('loaded-list') as OpalLoadedList).input.query = '';
			}
		}
	}
})
export class OpalMultiselect extends OpalSelect {
	dataProvider: IDataProvider | null;

	isNothingSelectedShown: boolean;

	initialize() {
		super.initialize();

		let input = this.input;
		let dataProvider = input.dataprovider;

		if (!dataProvider && input.dataproviderKeypath) {
			dataProvider = Function(`return this.${ input.dataproviderKeypath };`)
				.call(this.ownerComponent || window);

			if (!dataProvider) {
				throw new TypeError('"dataProvider" is not defined');
			}
		}

		this.dataProvider = dataProvider;

		define(this, {
			isNothingSelectedShown(this: OpalMultiselect) {
				return !this.viewModel.length;
			}
		});
	}

	_onBtnDeselectItemClick(evt: Event, btn: HTMLElement) {
		this.viewModel.remove(this.viewModel.get(btn.dataset.itemValue, this._viewModelItemValueFieldName));
	}
}
