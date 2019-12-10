import { Component } from 'rionite';
import { OpalButton } from '../OpalButton';

@Component({
	elementIs: 'opal-form-button',
	elementExtends: 'button'
})
export class OpalFormButton extends OpalButton {}
