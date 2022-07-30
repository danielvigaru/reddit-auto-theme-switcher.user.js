// ==UserScript==
// @downloadURL     https://github.com/danielvigaru/reddit-auto-theme-switcher.user.js/raw/master/reddit-auto-theme-switcher.user.js
// @grant           none
// @icon            https://www.reddit.com/favicon.ico
// @license         MIT
// @match           https://www.reddit.com/*
// @name            Reddit auto theme switcher
// @updateURL       https://github.com/danielvigaru/reddit-auto-theme-switcher.user.js/raw/master/reddit-auto-theme-switcher.user.js
// @version         1.1.0
// ==/UserScript==

(function () {
    function isLightTheme() {
        const somePartOfTheSiteIdk = document.querySelector("._1VP69d9lk-Wk9zokOaylL");
        const currentBgColor = getComputedStyle(somePartOfTheSiteIdk).backgroundColor;
        return currentBgColor === "rgb(255, 255, 255)";
    }

    function toggleMenu() {
        const dropdown = document.getElementById("USER_DROPDOWN_ID");
        dropdown.click();
    }

    function toggleTheme() {
        toggleMenu();
        const darkModeToggle = document.querySelectorAll("._3kUvbpMbR21zJBboDdBH7D")[1];
        darkModeToggle.click();
        setTimeout(toggleMenu, 500);
    }

    setInterval(() => {
        if (isLightTheme() && window.matchMedia("(prefers-color-scheme: dark)").matches) {
            toggleTheme();
        }

        if (!isLightTheme() && window.matchMedia("(prefers-color-scheme: light)").matches) {
            toggleTheme();
        }
    }, 2000);
})();
