import { getScript } from './getScript';
import { makeUrl } from './makeUrl';

export interface IService {
	fixUrlData?: (data: Record<string, any>) => void;
	shareUrl: string;
	popupWidth?: number;
	popupHeight?: number;
	counterUrl?: string;
	extractCounter?: (data: Record<string, any>) => number;
	getCounter?: (url: string) => Promise<number>;
}

const vkontakteCallbacks: Array<(count: number) => void> = [];

(window as any).VK = {
	Share: {
		count: (index: number, counter: number) => {
			vkontakteCallbacks[index](counter);
		}
	}
};

const odnoklassnikiCallbacks: Array<(count: number) => void> = [];

(window as any).ODKL = {
	updateCount: (index: string, counter: number) => {
		odnoklassnikiCallbacks[index](counter);
	}
};

export const services: Record<string, IService> = {
	facebook: {
		shareUrl: 'https://www.facebook.com/sharer/sharer.php?u=[url]',
		popupWidth: 600,
		popupHeight: 500,
		counterUrl:
			'https://graph.facebook.com/?id=[url]&fields=og_object%7Bengagement%7Bcount%7D%7D&callback=?',
		extractCounter: (data: { og_object?: { engagement?: { count?: number } } }) =>
			(data.og_object && data.og_object.engagement && data.og_object.engagement.count) || 0
	},

	linkedin: {
		shareUrl: 'https://www.linkedin.com/shareArticle?mini=true&url=[url]&title=[title]',
		popupWidth: 600,
		popupHeight: 500
	},

	odnoklassniki: {
		shareUrl:
			'https://connect.ok.ru/dk?st.cmd=WidgetSharePreview&service=odnoklassniki&st.shareUrl=[url]',
		popupWidth: 588,
		popupHeight: 332,
		counterUrl: 'https://connect.ok.ru/dk?st.cmd=extLike&ref=[url]&uid=[index]',
		getCounter: url =>
			new Promise(resolve => {
				odnoklassnikiCallbacks.push(counter => {
					resolve(isNaN(counter) ? counter : +counter);
				});

				getScript(makeUrl(url, { index: odnoklassnikiCallbacks.length - 1 }));
			})
	},

	pinterest: {
		shareUrl: 'https://pinterest.com/pin/create/button/?url=[url]&description=[title]',
		popupWidth: 750,
		popupHeight: 680,
		counterUrl: 'https://api.pinterest.com/v1/urls/count.json?url=[url]&callback=?',
		extractCounter: (counter: { count: number }) => counter.count
	},

	telegram: {
		// shareUrl: "tg://msg?text=[title]%0A[url]",
		// shareUrl: 'https://tglink.me/share/url?url=[url]',
		shareUrl: 'https://telegram.me/share/url?url=[url]',
		popupWidth: 600,
		popupHeight: 500
	},

	twitter: {
		shareUrl: 'https://twitter.com/intent/tweet?url=[url]&text=[title]',
		popupWidth: 600,
		popupHeight: 450,
		fixUrlData: (data: { title: string }) => {
			if (!/[\.\?:\-–—]\s*$/.test(data.title)) {
				data.title += ':';
			}
		}
	},

	viber: {
		shareUrl: 'viber://forward?text=[title]%0D%0A%0D%0A[url]'
	},

	vkontakte: {
		shareUrl: 'https://vk.com/share.php?url=[url]&title=[title]',
		popupWidth: 650,
		popupHeight: 570,
		counterUrl: 'https://vk.com/share.php?act=count&url=[url]&index=[index]',
		getCounter: url =>
			new Promise(resolve => {
				vkontakteCallbacks.push(counter => {
					resolve(counter);
				});

				getScript(makeUrl(url, { index: vkontakteCallbacks.length - 1 }));
			})
	},

	whatsapp: {
		shareUrl: 'whatsapp://send?text=[title]%0D%0A%0D%0A[url]'
	}
};
