import './index.css';
import { Component } from 'rionite';
import OpalTab from './opal-tab';
export { default as OpalTab } from './opal-tab';
export default class OpalTabList extends Component {
    static OpalTab: typeof OpalTab;
}
