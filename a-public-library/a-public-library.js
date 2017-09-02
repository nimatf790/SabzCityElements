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

//Use this object for active user data. this object is sync with localStorage and cookie.
var activeUser = {
	ID: "",
	//defaults distinctions
	distinctions: {
		HTML5Version: "",
		Template: "default",
		UnitOfMeasurement: "",
		Language: "",
		PrivacyTerms: "",
		DataUsage: 0,
		Time: 0
	}
};

//Use this object for active app data like language data
var activeApp = {
	appText: {
		aboutme_title: "اطلاعات من"
	}
};

//Some typical function
var publicLibrary = {
	// SabzCityElements use Domain name as App Name with some changes
	app: {
		name: "app-" + window.location.hostname.replace(/\./g, '-'),
		location: "/components/app-" + window.location.hostname.replace(/\./g, '-') + "/"
		// name: "app-my-sabz-city",
		// location: "/components/app-my-sabz-city/"
	},
	//manage UserLocalDistinctions in localstorage
	userLocalDistinctions: {
		updateAll: function (userID, value) {
			localStorage.setItem(userID + "-Distinctions", JSON.stringify(value))
		},
		getAll: function (userID) {
			var obj = JSON.parse(localStorage.getItem(userID + "-Distinctions"))
			if (!obj) {
				return false
			} else {
				return obj
			}
		},
		getByKey: function (userID, key) {
			var obj = JSON.parse(localStorage.getItem(userID + "-Distinctions"))
			if (!obj || !obj[key]) {
				return false
			} else {
				return obj[key];
			}
		}
	},
	//Append an element to html
	makeElement: function (elem, attr) {
		var elem_maked = document.createElement(elem);
		for (var prop in attr) {
			elem_maked.setAttribute(prop, attr[prop]);
		}
		return elem_maked;
	},
	class: {
		has: function (el, className) {
			if (el.classList)
				return el.classList.contains(className)
			else
				return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'))
		},
		add: function (el, className) {
			if (el.classList)
				el.classList.add(className)
			else if (!hasClass(el, className)) el.className += " " + className
		},
		remove: function (el, className) {
			if (el.classList)
				el.classList.remove(className)
			else if (hasClass(el, className)) {
				var reg = new RegExp('(\\s|^)' + className + '(\\s|$)')
				el.className = el.className.replace(reg, ' ')
			}
		}
	},
	//manage cookie
	cookieManager: {
		set: function (cname, cvalue, exdays) {
			var d = new Date();
			d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
			var expires = "expires=" + d.toGMTString();
			document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
		},
		get: function (cname) {
			var name = cname + "=";
			var decodedCookie = decodeURIComponent(document.cookie);
			var ca = decodedCookie.split(';');
			for (var i = 0; i < ca.length; i++) {
				var c = ca[i];
				while (c.charAt(0) == ' ') {
					c = c.substring(1);
				}
				if (c.indexOf(name) == 0) {
					return c.substring(name.length, c.length);
				}
			}
			return false;
		}
	}
}