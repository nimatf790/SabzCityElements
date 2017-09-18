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

//Use this object for active app data. this object is sync with localStorage and cookie.
export const appDistinctions = {
    // active user details
    activeUserID: "",

    //global sync distinctions
    HTML5Version: "",
    Template: "default",
    UnitOfMeasurement: "",
    Language: "",
    PrivacyTerms: "",
    DataUsage: 0,
    Time: 0,

    // Local app distinction
    fontName: "",           // supported font
    fontSize: 0,            // 0 to 10
    backgroundColor: "",    //
    backgroundImage: "",    //
};

//Use this object for active app data like language data
var activeApp = {
    appText: {
        aboutme_title: "اطلاعات من"
    }
};