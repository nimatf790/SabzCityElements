function specifyLanguage() {
    var userLanguage
    // First check localStorage and if language was set before || localStorage language same as in url ignore all other proccess
    if (localStorage.language != null & localStorage.language == langugeInURL) {
        return
    } else {
        // Check language in url by router element in this way {domain}/{lang}/... e.g. sabz.city/per/... mean exactly after DNS
        if (langugeInURL != null) {
            userLanguage = langugeInURL
        // Check user distinction from SabzCity APIs
        } else if (activeUserUUID != null) {
            userLanguage = sabzcitysdk.get.usersinfos.distinction(activeUserUUID, "FrontEnd.Language")
        // Check User Location to guess user language. Send IP, Browser default language ... to related APIs and get answer.

        // Get browser default language by navigator.language

        // finally if can't suggest any language for user set default one
        } else {
            userLanguage = "per"
        }
    }
}
        // Send a notify to m-notification element and tell user to specify a language. e.g. redirect user to my.sabz.city/language
        localStorage.language == null