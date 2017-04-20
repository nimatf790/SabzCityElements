/*
Copyright 2016 SabzCity

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
        <div id="veryOldBrowser" style="text-align: center">
            Please download or update your browser to one of the last version of these browsers, to be able to use this platform<br>
            <a href="https://www.google.com/chrome/browser/"><img src='https://www.google.com/chrome/assets/common/images/chrome_logo_2x.png' /></a>
            <a href="https://www.mozilla.org/en-US/firefox/new/"><img src='https://www.mozilla.org/media/img/firefox/template/header-logo-inverse.510f97e92635.png' /></a>
            <a href="http://www.apple.com/safari/"><img src='http://images.apple.com/v/safari/g/images/overview/safari_icon_large.png' /></a>
        </div>
*/

// Set Base Tag by currect Domain
document.write("<base href='//" + document.location.host + "' />");

// Get manifest data and set it
appName = "app-" + window.location.hostname.replace(/\./g,'-')
manifest = document.createElement('link')
manifest.href = "/components/" + appName + "/manifest.json"
manifest.rel = 'manifest'
document.head.appendChild(manifest)