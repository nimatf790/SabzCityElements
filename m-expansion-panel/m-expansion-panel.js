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

import { Element as PolymerElement } from '../../../@polymer/polymer/polymer-element.js';

export class MExpansionPanel extends PolymerElement {
  static get is() {
    return 'm-expansion-panel';
  }
  static get template() {
    return `
    <style>

      details {
        background: #fff;
        font-size: 15px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.12);
        box-shadow: 0 0 2px rgba(0, 0, 0, 0.12), 0 2px 4px rgba(0, 0, 0, 0.24);
        display: flex;
        font-family: 'Roboto', 'Nono', sans-serif;
      }

      details div.content {
        padding: 0px 24px 24px 24px;
      }

      details[open] summary:after {
        content: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0iMDAwMDAwIiBmaWxsLW9wYWNpdHk9IjAuMzgiIGQ9Ik03LjQxLDE1LjQxTDEyLDEwLjgzTDE2LjU5LDE1LjQxTDE4LDE0TDEyLDhMNiwxNEw3LjQxLDE1LjQxWiIgLz48L3N2Zz4=');     
      }

      details[open] {
        margin-top: 16px;
        margin-bottom: 16px;
        border: none;
        border-radius: 2px;
      }

      summary {
        outline: none;
        cursor: pointer;
        padding: 16px 24px;
        color: rgba(0, 0, 0, 0.87);
        position: relative;
      }

      summary:hover {
        background: #eeeeee;
      }

      details[open] summary:hover {
        background: none;
      }

      summary ul {
        padding-left: 0;
        list-style: none;
        display: -webkit-flex;
        display: flex;
        align-items: center;
      }

      summary ul li {
        flex: 1 100%;
        flex-flow: row wrap;
      }

      summary::-webkit-details-marker {
        display: none;
      }

      summary::after {
        content: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0iMDAwMDAwIiBmaWxsLW9wYWNpdHk9IjAuMzgiIGQ9Ik03LjQxLDguNThMMTIsMTMuMTdMMTYuNTksOC41OEwxOCwxMEwxMiwxNkw2LDEwTDcuNDEsOC41OFoiIC8+PC9zdmc+');
        padding: 0;
        text-align: center;
        margin-top: 0;
        position: absolute;
        top: calc(50% - 12px);
        bottom: 0;
        right: 0;
        width: 6%;
      }

      details[open] summary ul .collapsed {
        display: none;
      }

      details summary ul .expanded {
        display: none;
      }

      details[open] summary ul .expanded {
        display: flex;
        display: -webkit-flex;
      }

      .secondary {
        color: rgba(0, 0, 0, 0.54);
      }

    </style>

  <details>

    <summary>
      <ul>

        <li class="name">[[name]]</li>

        <li class="collapsed secondary">
          <slot name="collapsed1"></slot>
        </li>
        <li class="collapsed secondary">
          <slot name="collapsed2"></slot>
        </li>

        <li class="expanded secondary">
          <slot name="expanded1"></slot>
        </li>
        <li class="expanded secondary">
          <slot name="expanded2"></slot>
        </li>

      </ul>
    </summary>

    <div class="content">
      <slot name="info"></slot>
    </div>

  </details>`;
  }
  static get properties() {
    return {
      name: String
    };
  }
}

customElements.define(MExpansionPanel.is, MExpansionPanel);
