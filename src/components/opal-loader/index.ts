import { Component, Param } from 'rionite';
import './index.css';

@Component.Config({
	elementIs: 'OpalLoader'
})
export class OpalLoader extends Component {
	@Param paramSize = 'm';
	@Param paramShown = false;
}
