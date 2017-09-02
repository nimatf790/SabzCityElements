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

/*
https://developer.mozilla.org/en-US/docs/Web/API/HTMLAnchorElement

Extend the <a> tag with history.pushState()
<a-sabzcity-link>
  <a href="/path" [title="New Page Title"] [state="{'message':'New State!'}"]>title</a>
</a-sabzcity-link>
*/

import "../a-public-library/a-public-library.js"

class ASabzCityLink extends HTMLAnchorElement {
  static get is() { return 'a-sabzcity-link' }

  attachedCallback() {
    this.addEventListener('click', this.pushStateAnchorEventListener, false);
    this.addEventListener('mouseover', this.sabzcityLinkHoverListener, false);
  }

  detachedCallback() {
    this.removeEventListener('click', this.pushStateAnchorEventListener, false);
    this.removeEventListener('mouseover', this.sabzcityLinkHoverListener, false);
  }

  sabzcityLinkHoverListener(event) {
    if (!this.getAttribute('href').includes(window.location.origin)) {
      var href = activeUser.distinctions.Language + this.getAttribute('href')
      var goUrl = new URL(href, window.location.origin);
      this.setAttribute('href', goUrl)
    }
  }

  pushStateAnchorEventListener(event) {
    // open in new tab
    if (event.ctrlKey || event.metaKey || event.which === 2) {
      return;
    }
    //get lang from localstorage to set for url
    var href = this.getAttribute('href');

    if (!href) {
      return;
    }

    // don't pushState if the URL is for a different host
    if (href.indexOf('http') === 0 && window.location.host !== new URL(href).host) {
      return;
    }

    // push state into the history stack
    var goUrl = new URL(href);
    window.history.pushState(JSON.parse(this.getAttribute('state')) ||
      window.history.state, this.getAttribute('title'), goUrl);

    // dispatch a popstate event
    try {
      var popstateEvent = new PopStateEvent('popstate', {
        bubbles: false,
        cancelable: false,
        state: window.history.state
      });

      if ('dispatchEvent_' in window) {
        // FireFox with polyfill
        window.dispatchEvent_(popstateEvent);
        window.dispatchEvent_(new CustomEvent('location-changed'));
      } else {
        // normal
        window.dispatchEvent(popstateEvent);
        window.dispatchEvent(new CustomEvent('location-changed'));
      }
    } catch (error) {
      // Internet Explorer
      var evt = document.createEvent('CustomEvent');
      evt.initCustomEvent('popstate', false, false, {
        state: window.history.state
      });
      window.dispatchEvent(evt);
    }

    // prevent the default link click
    event.preventDefault();
  }
}

customElements.define(ASabzCityLink.is, ASabzCityLink)
export { ASabzCityLink }