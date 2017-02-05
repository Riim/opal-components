import './index.css';
import './light.css';
import { Component } from 'rionite';
export default class OpalCodeListing extends Component {
    highlightedHTMLCode: string;
    highlightedJSCode: string | undefined;
    initialize(): void;
    ready(): void;
}
