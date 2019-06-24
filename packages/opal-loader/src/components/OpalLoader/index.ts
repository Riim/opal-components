import { BaseComponent, Component, Param } from 'rionite';
import './index.css';

@Component({
	elementIs: 'OpalLoader'
})
export class OpalLoader extends BaseComponent {
	@Param
	size = 'm';
	@Param
	shown = false;
}
