import { BaseComponent, Component, Param } from 'rionite';
import './index.css';

@Component({
	elementIs: 'OpalLoader'
})
export class OpalLoader extends BaseComponent {
	@Param({ default: 'm' })
	declare size: 's' | 'm' | (string & { _?: never });
	@Param({ default: false })
	declare shown: boolean;
}
