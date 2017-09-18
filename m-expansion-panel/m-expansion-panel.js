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

import "../../paper-button/paper-button.html"
import "../../iron-icon/iron-icon.html"
import "../../iron-icons/iron-icons.html"
import "../../paper-icon-button/paper-icon-button.html"
import "../../paper-button/paper-button.html"

import "../a-iconset/a-iconset.html"

import materialDesignTemplate from './material-design.html'

export class MExpansionPanel extends PolymerElement {
    static get is() { return 'm-expansion-panel' }
    static get template() { return materialDesignTemplate }
    static get properties() {
        return {
            title: String,
            includeSaveButtons: {
                type: Boolean,
                value: false
            },
            isSaveActive: {
                type: Boolean,
                value: false
            }
        }
    }
    toggleButton() {
        const content = this.$.content;
        const icon = this.$.exi;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
            content.style.padding = '0';
            icon.style.transform = "rotate(0deg)";
        } else {
            content.style.maxHeight = `${content.scrollHeight}px`;
            content.style.paddingTop = '15px';
            content.style.paddingBottom = '15px';
            icon.style.transform = "rotate(180deg)";
        }
    }
}

customElements.define(MExpansionPanel.is, MExpansionPanel)