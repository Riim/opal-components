import { BaseComponent, Component, Param } from 'rionite';
import './index.css';

@Component({
	elementIs: 'OpalTag'
})
export class OpalTag extends BaseComponent {
	@Param({ default: 'default' })
	viewType:
		| 'default'
		| 'primary'
		| 'success'
		| 'warning'
		| 'danger'
		| (string & { _?: never });
}
