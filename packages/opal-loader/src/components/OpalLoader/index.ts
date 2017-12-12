import { BaseComponent, Component, Param } from 'rionite';
import './index.css';

@Component()
export class OpalLoader extends BaseComponent {
	@Param paramSize = 'm';
	@Param paramShown = false;
}
