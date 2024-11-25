// ==UserScript==
// @name        NeoCommunes
// @namespace   https://rotbrain.neocties.org
// @match       https://neocities.org/
// @grant       none
// @version     0.1
// @author      rotbrain
// @description A userscript that hides Neocities' social-media features
// @license     GPL v3
// ==/UserScript==


function isUserHome() {
    const homeURL = "https://neocities.org/";
    const currentURL = window.location.href;

    return homeURL == currentURL;
}

function isUserConnected() {
    const statusNav = document.getElementsByClassName("status-Nav")[0];
    const dropdown = statusNav.getElementsByClassName("dropdown")[0];

    return dropdown != undefined;
}


// The main function
(function() {
    if (isUserHome() && !isUserConnected()) {
        return;
    };
})();
