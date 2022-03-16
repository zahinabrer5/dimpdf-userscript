// ==UserScript==
// @name         DimPDF
// @namespace    https://github.com/zahinabrer5/dimpdf-userscript
// @version      0.0.1
// @description  Make your PDFs easier on the eyes
// @author       Zahin Abrer
// @match        http://*/*.pdf
// @match        https://*/*.pdf
// @match        file://*/*.pdf
// @icon         none
// @grant        none
// ==/UserScript==

(function() {
    const overlay = document.createElement("div");
    const css = `
        position: fixed;
        pointer-events: none;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: white;
        opacity: 0.8;
        mix-blend-mode: difference;
        z-index: 1;
    `;
    overlay.setAttribute("style", css);
    document.body.appendChild(overlay);
})();
