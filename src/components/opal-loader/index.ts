import { Component, Param } from 'rionite';
import './index.css';

@Component.Config({
	elementIs: 'OpalLoader'
})
export class OpalLoader extends Component {
	@Param({ default: 'm' })
	paramSize: string;

	@Param({ default: false })
	paramShown: boolean;
}
