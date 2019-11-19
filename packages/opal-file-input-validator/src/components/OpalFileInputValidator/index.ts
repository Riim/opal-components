import { OpalFileInput } from '@riim/opal-file-input';
import { OpalInputValidator } from '@riim/opal-input-validator';
import { Component } from 'rionite';
import { OpalFileInputValidatorRule } from '../OpalFileInputValidatorRule';
import './index.css';

export { OpalFileInputValidatorRule };

@Component({
	elementIs: 'OpalFileInputValidator'
})
export class OpalFileInputValidator extends OpalInputValidator {
	static targetChangeEvents = [OpalFileInput.EVENT_CHANGE];

	fileInput: OpalFileInput;

	ready() {
		super.ready();
		this.target = this.fileInput = this.$<OpalFileInput>('fileInput')!;
		this.fileInput.validator = this;
	}

	_checkValue(rule: OpalFileInputValidatorRule): boolean {
		let dataList = this.fileInput.dataList;

		return !(dataList.length
			? (rule.minCount && dataList.length < rule.minCount) ||
			  (rule.test && !rule.test.call(this.ownerComponent, dataList))
			: rule.required);
	}
}
