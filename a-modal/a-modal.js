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

import {Element as PolymerElement} from '../../../@polymer/polymer/polymer-element.js'

import "../../iron-icons/iron-icons.html"
import "../../iron-scroll-spy/iron-scroll-spy.html"
import "../../paper-icon-button/paper-icon-button.html"

import "../a-public-library/a-public-library.html"

import materialDesignTemplate from './material-design.html'

export class AModal extends PolymerElement {
	static get is() { return 'a-modal' }
	static get template() { return materialDesignTemplate }
	ready() {
		this.listen(this.$.back, 'tap', 'close');
	}
	open() {
		var modalElem = this.$.modal_inner;
		modalElem.parentElement.style.cssText = "transform: scale(1);opacity: 1;";
		publicLibrary.class.add(modalElem, "active")
	}
	close() {
		var modalElem = this.$.modal_inner;
		publicLibrary.class.remove(modalElem, "active");
		setTimeout(function () {
			modalElem.parentElement.style.cssText = "transform: scale(0);opacity: 0;";
		}, 300)
	}
}

customElements.define(AModal.is, AModal)
