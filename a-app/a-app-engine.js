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

import "../../paper-toast/paper-toast.js"

import { publicLibrary } from '../a-public-library/a-public-library.js'
import { languagesList } from '../a-public-library/languages-list.js'
import { appDistinctions } from './a-app-distinctions.js'
import { SabzCitySDK } from "../../SabzCityWebComponents/sabzcity-sdk/sabzcity-sdk.js"

(function appEngine() {
	//just for test
	if (publicLibrary.cookieManager.get("AU") == false) {
		publicLibrary.cookieManager.set("AU", "Guest", 10)
	}

	//Set Active UserID globally in activeUser object
	appDistinctions.activeUserID = publicLibrary.cookieManager.get("AU")

	//Check if active user is not Guest get fresh distinction
	if (appDistinctions.activeUserID != "Guest") {
		//get active user uuid and set distinction
		updateUserDistinction()
		//Guess language for Guest User and notice it!
	} else {
		suggestLanguage()
	}

	//Set App Element
	appendApp()

	if (!appDistinctions.Language) {
		setTimeout(function () {
			setLanguage(appDistinctions.Language)
		}, 500)
	}
})()

//Update active user distinctions
function updateUserDistinction() {
	//Get User Distinction with sabzcitySDK
	var apiResponse = sabzcitySDK("v1", "usersinfo", "GetFrontEndDistinctions", appDistinctions.activeUserID)
	//Check SabzCity APIs response deliver
	if (apiResponse) {
		publicLibrary.userLocalDistinctions.updateAll(appDistinctions.activeUserID, apiResponse)
		appDistinctions.distinctions = apiResponse
	} else {
		setTimeout(function () {
			//Wait 500ms to recive response
			if (apiResponse) {
				publicLibrary.userLocalDistinctions.updateAll(appDistinctions.activeUserID, apiResponse)
				appDistinctions.distinctions = apiResponse
				//if download failed load previous distinction
			} else if (publicLibrary.userLocalDistinctions.getAll(appDistinctions.activeUserID)) {
				appDistinctions.distinctions = publicLibrary.userLocalDistinctions.getAll(appDistinctions.activeUserID)
				//if theres no previous distinction in localstorage, do as guest user
			} else {
				this.suggestLanguage()
			}
		}, 500)
	}
}

//Append app elements by suggestion architecture.
function appendApp() {
	var appLink = publicLibrary.makeElement("link", {
		"rel": "import",
		"href": publicLibrary.app.location + publicLibrary.app.name + ".html"
	})
	document.head.appendChild(appLink)
	var appElement = publicLibrary.makeElement(publicLibrary.app.name)
	document.body.appendChild(appElement)
}

//Set Language in URL, html tag, ...
function setLanguage(languageName) {
	var langs = Object.keys(languagesList) //supported languages
	var fullpath = window.location.href.replace(window.location.origin, "")
	var parts = fullpath.split('/')

	// Set in <html lang="">
	document.documentElement.lang = languageName

	//set language in url if valid language not find.
	if (parts[1].length == 0 || langs.indexOf(parts[1]) == -1) {
		var urlWithLang = languageName + "/"
		if (parts[1].length != 0) {
			urlWithLang = languageName + fullpath
		}
		var newUrl = new URL(urlWithLang, window.location.origin)
		history.pushState(window.history.state, "language", newUrl)
	}
}

//Guess language for Guest User and notice it!
function suggestLanguage() {
	//Send request to server and get suggested language by user IP
	var apiResponse = sabzcitySDK("v1", "!!!", "!!!")
	//Check SabzCity APIs response deliver
	if (apiResponse) {
		//Set suggested language for Guest user distinction
		appDistinctions.Language = apiResponse
	} else {
		setTimeout(function () {
			//Wait 500ms and if anwser received in 300ms, set it
			if (apiResponse) {
				//Set suggested language for Guest user distinction
				appDistinctions.Language = apiResponse
				//Otherwise set browser default language!
			} else {
				//Set suggested language for Guest user distinction
				appDistinctions.Language = navigator.language.substr(0, 2)
			}
		}, 500)
	}

	//Willy nilly Toast the suggestion and the way user can change language in English
	var notificationElement = publicLibrary.makeElement("paper-toast", {
		"text": "We detect this language for you. You can change it anytime from hamberger menu!" + activeUser.distinctions.Language,
		"opened": true
	})
	Polymer.dom(this.root).appendChild(notificationElement)
}
