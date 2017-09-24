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

import { Element as PolymerElement } from '../../../@polymer/polymer/polymer-element.js'
import appDistinctions from '../a-app/a-app-distinctions.js'

import defaultTemplate from './default-theme.html'
import materialDesignColor from './material-design/color.html'
import materialDesignShadow from './material-design/shadow.html'
import materialDesignTypography from './material-design/typography.html'

if (appDistinctions.template = "Material") {
    document.head.appendChild(materialDesignColor)
    document.head.appendChild(materialDesignShadow)
    document.head.appendChild(materialDesignTypography)
} else if (appDistinctions.template = "Flat") {
    document.head.appendChild()
}

document.head.appendChild(defaultTemplate)
