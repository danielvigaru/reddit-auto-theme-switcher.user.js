// ==UserScript==
// @downloadURL     https://github.com/danielvigaru/reddit-auto-theme-switcher.user.js/raw/master/reddit-auto-theme-switcher.user.js
// @grant           none
// @icon            https://www.reddit.com/favicon.ico
// @license         MIT
// @match           https://www.reddit.com/*
// @name            Reddit auto theme switcher
// @updateURL       https://github.com/danielvigaru/reddit-auto-theme-switcher.user.js/raw/master/reddit-auto-theme-switcher.user.js
// @version         1.0.1
// ==/UserScript==

function isLightTheme() {
    const somePartOfTheSiteIdk = document.querySelector("._1VP69d9lk-Wk9zokOaylL");
    const currentBgColor = getComputedStyle(somePartOfTheSiteIdk).backgroundColor;
    if (currentBgColor === "rgb(255, 255, 255)") return true;
    return false;
}

window.onload = () => {
    if (isLightTheme() && window.matchMedia("(prefers-color-scheme: dark)").matches) {
        const dropdown = document.getElementById("USER_DROPDOWN_ID");
        dropdown.click();
        const darkModeToggle = document.querySelectorAll("._3kUvbpMbR21zJBboDdBH7D")[1];
        darkModeToggle.click();
    }

    if (!isLightTheme() && window.matchMedia("(prefers-color-scheme: light)").matches) {
        const dropdown = document.getElementById("USER_DROPDOWN_ID");
        dropdown.click();
        const darkModeToggle = document.querySelectorAll("._3kUvbpMbR21zJBboDdBH7D")[1];
        darkModeToggle.click();
    }
};
