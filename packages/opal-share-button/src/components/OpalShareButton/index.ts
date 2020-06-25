import { OpalButton } from '@riim/opal-button';
import { clickLink } from '@riim/opal-components-common';
import { Cell, define } from 'cellx';
import { Observable } from 'cellx-decorators';
import { Component, Param } from 'rionite';
import './index.css';
import { jsonp } from './lib/jsonp';
import { makeUrl } from './lib/makeUrl';
import { openPopup } from './lib/openPopup';
import { IService, services } from './lib/services';
import template from './template.rnt';

@Component({
	elementIs: 'OpalShareButton',
	template
})
export class OpalShareButton extends OpalButton {
	@Param({ type: String, required: true, readonly: true })
	service:
		| 'facebook'
		| 'linkedin'
		| 'odnoklassniki'
		| 'pinterest'
		| 'telegram'
		| 'twitter'
		| 'viber'
		| 'vkontakte'
		| 'whatsapp'
		| (string & { _?: never });
	@Param(String)
	url: string | null;

	_service: IService;

	get _url() {
		return (
			this.url ||
			window.location.href.substr(
				0,
				window.location.href.length - window.location.hash.length
			)
		);
	}

	@Observable
	counter: number | undefined;

	initialize() {
		this._service = services[this.service];
	}

	async ready() {
		let service = this._service;

		if (service.getCounter) {
			this.counter = await service.getCounter(
				makeUrl(service.counterUrl!, { url: this._url })
			);
		} else if (service.counterUrl) {
			jsonp(makeUrl(service.counterUrl, { url: this._url }), (data) => {
				this.counter = service.extractCounter!(data);
			});
		}
	}

	click() {
		let service = this._service;
		let urlData = {
			title: document.title,
			url: this._url
		};

		if (service.fixUrlData) {
			service.fixUrlData(urlData);
		}

		let url = makeUrl(service.shareUrl, {
			title: urlData.title,
			url: urlData.url
		});

		if (service.popupWidth) {
			openPopup(url, this.service, service.popupWidth, service.popupHeight);
		} else {
			clickLink(url);
		}

		return this;
	}

	_getContentContext(context: Object) {
		return define({ __proto__: context }, {
			$counter: new Cell(
				function (this: OpalShareButton) {
					return this.counter;
				},
				{ context: this }
			)
		});
	}
}
