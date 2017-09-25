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
import materialDesignTemplate from './material-design.html'

export class ACard extends PolymerElement {
	
	static get template() {
		return materialDesignTemplate
	}
	
	constructor() {
		super();
	}
	
	static get properties() {
		return {
			dir: {
				type: String
			}
		}
	}
}
	
customElements.define('a-card', ACard);


/*

//////   Element demo    //////

<a-card dir="horizontal">
	<img slot="image" src="">
	<span slot="title"></span>
	<p slot="text"></p>
	<a slot="action-link" href=""></a>
</a-card>

*/