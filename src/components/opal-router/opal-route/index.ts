import { Component, Param } from 'rionite';

@Component.Config({
	elementIs: 'OpalRoute'
})
export class OpalRoute extends Component {
	@Param({ required: true, readonly: true })
	paramPath: string;

	@Param({ required: true, readonly: true })
	paramComponent: string;
}
