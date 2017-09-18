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

import {Element as PolymerElement} from '../../../../@polymer/polymer/polymer-element.js'
import '../iron-flex-layout/iron-flex-layout.js';
import { PaperButtonBehavior, PaperButtonBehaviorImpl } from '../paper-behaviors/paper-button-behavior.js';
import '../paper-styles/element-styles/paper-material-styles.js';

import materialDesignTemplate from './material-design.html'

export class AButton extends PolymerElement {
  static get is() { return 'a-button' }
  static get template() { return materialDesignTemplate }
  static get behaviors() { return PaperButtonBehavior }
  static get properties() {
    return {
      /* If true, the button should be styled with a shadow. */
      raised: {
        type: Boolean,
        reflectToAttribute: true,
        value: false,
        observer: '_calculateElevation'
      }
    }
  }
  _calculateElevation() {
    if (!this.raised) {
      this._setElevation(0);
    } else {
      PaperButtonBehaviorImpl._calculateElevation.apply(this);
    }
  }
  /**
  Fired when the animation finishes.
  This is useful if you want to wait until
  the ripple animation finishes to perform some action.
  @event transitionend
  Event param: {{node: Object}} detail Contains the animated node.
  */
}

customElements.define(AButton.is, AButton)