// ==UserScript==
// @name        NeoCommunes
// @namespace   https://rotbrain.neocties.org
// @match       https://neocities.org/
// @match       https://neocities.org/*activity* 
// @match       https://neocities.org/site/*
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


function hideNewsItemLikeCounter(likeButton) {
    let lastCharacter = likeButton.innerHTML[likeButton.innerHTML.length - 1];
    if (lastCharacter != ")") {
        return;
    };
    while (lastCharacter != " ") {
        likeButton.innerHTML = likeButton.innerHTML.slice(0, -1);
        lastCharacter = likeButton.innerHTML[likeButton.innerHTML.length - 1];
    };
}

function hideAllNewsItemLikeCounters(newsItemClassName) {
    const newsItems = document.getElementsByClassName(newsItemClassName);
    for (const newsItem of newsItems ) {
        const action = newsItem.getElementsByClassName("actions")[0];
        const likeButton = action.getElementsByTagName("a")[0];
        hideNewsItemLikeCounter(likeButton);
    };
}

function hideReplyLikeCounter(likeButton) {
    let lastCharacter = likeButton.innerHTML[likeButton.innerHTML.length - 1];
    if (lastCharacter != ")") {
        return;
    };
    while (lastCharacter != " ") {
        likeButton.innerHTML = likeButton.innerHTML.slice(0, -1);
        lastCharacter = likeButton.innerHTML[likeButton.innerHTML.length - 1];
    };
}

function hideAllReplyLikeCounters() {
    const replyLikes = document.getElementsByClassName("comment_like");
    for (const likeButton of replyLikes) {
        hideReplyLikeCounter(likeButton);
    };
}


function hideNewsItemLikeHover(newsItem) {
    const action = newsItem.getElementsByClassName("actions")[0];
    const likeButton = action.getElementsByTagName("a")[0];
    delete likeButton.dataset.originalTitle;
}

function hideAllNewsItemLikeHover(newsItemClassName) {
    const newsItems = document.getElementsByClassName(newsItemClassName);
    for (const newsItem of newsItems ) {
        hideNewsItemLikeHover(newsItem);
    };
}

function hideReplyLikeHover(likeButton) {
    delete likeButton.dataset.originalTitle;
}

function hideAllReplyLikeHover() {
    const replyLikes = document.getElementsByClassName("comment_like");
    for (const likeButton of replyLikes) {
        hideReplyLikeHover(likeButton);
    };
}


// The main function
(function() {
    if (isUserHome() && !isUserConnected()) {
        return;
    }

    hideAllNewsItemLikeCounters("news-item update");
    hideAllNewsItemLikeCounters("news-item comment");
    hideAllReplyLikeCounters();
    hideAllNewsItemLikeHover("news-item update");
    hideAllNewsItemLikeHover("news-item comment");
    hideAllReplyLikeHover();
})();
