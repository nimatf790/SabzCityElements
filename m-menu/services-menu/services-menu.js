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

import "../../polymer/polymer.html"
import "../../iron-icon/iron-icon.html"
import "../../paper-listbox/paper-listbox.html"
import "../../paper-item/paper-item.html"
import "../../paper-button/paper-button.html"

import "../a-iconset/a-iconset.html"

import materialDesignTemplate from './material-design.html'

export class MServicesMenu extends Polymer.Element {
	static get is() { return 'm-menu-services' }
	static get template() { return materialDesignTemplate }
	static get properties() {
		return {
			data: {
				type: Object,
				notify: true
			}
		}
	}
}

customElements.define(MServiceMenu.is, MServiceMenu)
