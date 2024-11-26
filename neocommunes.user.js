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


function hideNewsItemLikeCounter(newsItemClassName) {
    const newsItems = document.getElementsByClassName(newsItemClassName);
    for (const newsItem of newsItems ) {
        const action = newsItem.getElementsByClassName("actions")[0];
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

function hideReplyLikeCounter() {
    const replyLikes = document.getElementsByClassName("comment_like");
    for (const likeButton of replyLikes) {
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

    hideNewsItemLikeCounter("news-item update");
    hideNewsItemLikeCounter("news-item comment");
    hideReplyLikeCounter();
})();
