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

import '/components/SabzCityElements/m-powered-by/m-powered-by.js'
import '/node_modules/@polymer/polymer/polymer.js'
import "/components/polymer/polymer.js"
import "/components/platinum-sw/platinum-sw-register.js"
import "/components/platinum-sw/platinum-sw-cache.js"
import '/components/SabzCityElements/m-outdated-browser/m-outdated-browser.js'
import '/components/SabzCityElements/a-app/a-app-engine.js'

// Set Base Tag by currect Domain
document.write("<base href='//" + document.location.host + "' />")

// Set manifest Tag by export const appManifest
document.write("<link rel=manifest href='data:application/manifest+json,{" + appManifest + "}>")