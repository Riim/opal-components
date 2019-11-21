import { BaseComponent, Component, Param } from 'rionite';
import './index.css';

@Component({
	elementIs: 'OpalLoader'
})
export class OpalLoader extends BaseComponent {
	@Param
	size: 's' | 'm' | (string & { _?: never }) = 'm';
	@Param
	shown = false;
}
