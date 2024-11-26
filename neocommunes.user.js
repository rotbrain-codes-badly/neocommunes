// ==UserScript==
// @name        NeoCommunes
// @namespace   https://rotbrain.neocties.org
// @match       https://neocities.org/
// @match       https://neocities.org/site/*
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


function hideUpdateLikeCounter() {
    const updates = document.getElementsByClassName("news-item update");
    for (const update of updates ) {
        const action = update.getElementsByClassName("actions")[0];
        const likeButton = action.getElementsByTagName("a")[0];
        let lastCharacter = likeButton.innerHTML[likeButton.innerHTML.length - 1];
        if (lastCharacter != ")") {
            continue;
        };
        while (lastCharacter != " ") {
            likeButton.innerHTML = likeButton.innerHTML.slice(0, -1);
            lastCharacter = likeButton.innerHTML[likeButton.innerHTML.length - 1];
        };
    };
}


// The main function
(function() {
    if (isUserHome() && !isUserConnected()) {
        return;
    };

    hideUpdateLikeCounter();
})();
