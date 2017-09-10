/*
Copyright 2017 SabzCity

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import {Element as PolymerElement} from '../node_modules/@polymer/polymer/polymer-element.js'

import "../../app-layout/app-header/app-header.html"
import "../../app-layout/app-toolbar/app-toolbar.html"
import "../../app-layout/app-drawer/app-drawer.html"
import "../../iron-grid/iron-grid.html"
import "../../paper-icon-button/paper-icon-button.html"

import "../a-public-library/a-public-library.html"
import "../m-menu/m-menu-hamburger.html"
import "../m-menu/m-menu-services.html"
import "../a-modal/a-modal.html"

import materialDesignTemplate from './material-design.html'

export class MHeader extends PolymerElement {
	static get is() { return 'm-header' }
	static get template() { return materialDesignTemplate }
	static get properties() {
		return {
			data: {
				type: Object,
				notify: true
			}
		}
	}
	ready() {
		super.ready();
		this.$.head_menu_toggle.addEventListener('click', e => {
			this._handleNavigationToggle(e)
		});
	}
	_handleNavigationToggle() {
		var drawer = this.$.drawer;
		drawer.opened = true;
	}
	_handleModalOpen(e) {
		if (e.target.getAttribute("data-modal"))
			var data = e.target.getAttribute("data-modal")
		else if (e.target.parentNode.getAttribute("data-modal"))
			var data = e.target.parentNode.getAttribute("data-modal")
		else
			var data = e.target.parentNode.parentNode.getAttribute("data-modal")

		var elem = publicLibrary.makeElement(data);
		var modal = document.querySelector("#modal");
		var modalElemContent = modal.querySelector("#modal_contents");
		modalElemContent.innerHTML = '';
		modalElemContent.appendChild(elem);
		modal.open();
	}
	connectedCallback() {
		super.connectedCallback();
	}
}

customElements.define(MHeader.is, MHeader);
