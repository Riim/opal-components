import { Computed } from 'cellx-decorators';
import { BaseComponent, Component, Param } from 'rionite';
import './index.css';
import template from './template.rnt';
import './icons/alert.svg?id=OpalIcon__iconAlert';
import './icons/archive.svg?id=OpalIcon__iconArchive';
import './icons/arrowDown.svg?id=OpalIcon__iconArrowDown';
import './icons/arrowLeft.svg?id=OpalIcon__iconArrowLeft';
import './icons/arrowRight.svg?id=OpalIcon__iconArrowRight';
import './icons/arrowUp.svg?id=OpalIcon__iconArrowUp';
import './icons/ban.svg?id=OpalIcon__iconBan';
import './icons/bell.svg?id=OpalIcon__iconBell';
import './icons/bookmark.svg?id=OpalIcon__iconBookmark';
import './icons/calendar.svg?id=OpalIcon__iconCalendar';
import './icons/cart.svg?id=OpalIcon__iconCart';
import './icons/checkmark.svg?id=OpalIcon__iconCheckmark';
import './icons/chevronDown.svg?id=OpalIcon__iconChevronDown';
import './icons/chevronLeft.svg?id=OpalIcon__iconChevronLeft';
import './icons/chevronRight.svg?id=OpalIcon__iconChevronRight';
import './icons/chevronUp.svg?id=OpalIcon__iconChevronUp';
import './icons/clipboard.svg?id=OpalIcon__iconClipboard';
import './icons/clock.svg?id=OpalIcon__iconClock';
import './icons/code.svg?id=OpalIcon__iconCode';
import './icons/compose.svg?id=OpalIcon__iconCompose';
import './icons/creditcard.svg?id=OpalIcon__iconCreditcard';
import './icons/cross.svg?id=OpalIcon__iconCross';
import './icons/desktop.svg?id=OpalIcon__iconDesktop';
import './icons/download.svg?id=OpalIcon__iconDownload';
import './icons/edit.svg?id=OpalIcon__iconEdit';
import './icons/ellipsisHorizontal.svg?id=OpalIcon__iconEllipsisHorizontal';
import './icons/ellipsisVertical.svg?id=OpalIcon__iconEllipsisVertical';
import './icons/export.svg?id=OpalIcon__iconExport';
import './icons/external.svg?id=OpalIcon__iconExternal';
import './icons/eye.svg?id=OpalIcon__iconEye';
import './icons/fileCross.svg?id=OpalIcon__iconFileCross';
import './icons/fileMinus.svg?id=OpalIcon__iconFileMinus';
import './icons/filePlus.svg?id=OpalIcon__iconFilePlus';
import './icons/file.svg?id=OpalIcon__iconFile';
import './icons/flag.svg?id=OpalIcon__iconFlag';
import './icons/folder.svg?id=OpalIcon__iconFolder';
import './icons/heart.svg?id=OpalIcon__iconHeart';
import './icons/home.svg?id=OpalIcon__iconHome';
import './icons/import.svg?id=OpalIcon__iconImport';
import './icons/info.svg?id=OpalIcon__iconInfo';
import './icons/link.svg?id=OpalIcon__iconLink';
import './icons/location.svg?id=OpalIcon__iconLocation';
import './icons/lock.svg?id=OpalIcon__iconLock';
import './icons/logIn.svg?id=OpalIcon__iconLogIn';
import './icons/logOut.svg?id=OpalIcon__iconLogOut';
import './icons/mail.svg?id=OpalIcon__iconMail';
import './icons/menu.svg?id=OpalIcon__iconMenu';
import './icons/message.svg?id=OpalIcon__iconMessage';
import './icons/minus.svg?id=OpalIcon__iconMinus';
import './icons/mobile.svg?id=OpalIcon__iconMobile';
import './icons/move.svg?id=OpalIcon__iconMove';
import './icons/options.svg?id=OpalIcon__iconOptions';
import './icons/paperclip.svg?id=OpalIcon__iconPaperclip';
import './icons/photo.svg?id=OpalIcon__iconPhoto';
import './icons/plus.svg?id=OpalIcon__iconPlus';
import './icons/print.svg?id=OpalIcon__iconPrint';
import './icons/reload.svg?id=OpalIcon__iconReload';
import './icons/reply.svg?id=OpalIcon__iconReply';
import './icons/search.svg?id=OpalIcon__iconSearch';
import './icons/send.svg?id=OpalIcon__iconSend';
import './icons/settings.svg?id=OpalIcon__iconSettings';
import './icons/star.svg?id=OpalIcon__iconStar';
import './icons/tag.svg?id=OpalIcon__iconTag';
import './icons/trash.svg?id=OpalIcon__iconTrash';
import './icons/unlock.svg?id=OpalIcon__iconUnlock';
import './icons/upload.svg?id=OpalIcon__iconUpload';
import './icons/user.svg?id=OpalIcon__iconUser';

@Component({
	elementIs: 'OpalIcon',
	template
})
export class OpalIcon extends BaseComponent {
	@Param({
		required: true,
		readonly: true
	})
	name: string;
	@Param
	size: 's' | 'xs' | 'xxs' | 'm' | 's' | 'xs' | 'xxs' | string & { _?: never } = 'm';
	@Param({ readonly: true })
	strokeWidth = 3;
	@Param
	filled = false;

	@Computed
	get xlinkHref() {
		let name = this.name;
		return '#OpalIcon__icon' + name.charAt(0).toUpperCase() + name.slice(1);
	}
}
