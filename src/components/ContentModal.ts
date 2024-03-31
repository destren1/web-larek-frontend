import { IActions, IContentModal } from '../types';
import { cloneTemplate, ensureElement } from '../utils/utils';
import { Component } from './base/components';
import { Modal } from './common/Modal';

// с наследованием component вопрос решить
export class ContentModal extends Modal implements IContentModal {
	content: HTMLElement;
	modalContent: HTMLElement;

	constructor(modalContainer: HTMLElement, actions?: IActions) {
		super(modalContainer, actions);
		this.modalContent = ensureElement('.modal__content', modalContainer);
	}

	show(): void {
		this.modalContent.append(this.content);
		super.show();
	}

	setContent(content: HTMLElement): void {
		this.content = content;
	}

	clearModalContent(): void {
		if (this.modalContent) {
			this.modalContent.removeChild(this.modalContent.lastChild);
		}
	}
}
