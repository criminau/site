/* script.js (tous le javascript du site en bas du site pour ne rien omettre)*/

/*   Bouton copier/coller dans le code des articles
   Thanks! to :
https://www.fiznool.com/blog/2018/09/14/adding-click-to-copy-buttons-to-a-hugo-powered-blog/
   Fonctionnement : cf voir markdownsyntax.md
--------------------------------------------------------------------------------------------------*/

(function() {
    'use strict';

    if (!document.queryCommandSupported('copy')) {
        return;
    }

    function flashCopyMessage(el, msg) {
        el.textContent = msg;
        setTimeout(function() {
            el.textContent = "Copier";
        }, 1000);
    }

    function selectText(node) {
        var selection = window.getSelection();
        var range = document.createRange();
        range.selectNodeContents(node);
        selection.removeAllRanges();
        selection.addRange(range);
        return selection;
    }

    function addCopyButton(containerEl) {
        var copyBtn = document.createElement("button");
        copyBtn.className = "highlight-copy-btn";
        copyBtn.textContent = "Copier";

        var codeEl = containerEl.firstElementChild;
        copyBtn.addEventListener('click', function() {
            try {
                var selection = selectText(codeEl);
                document.execCommand('copy');
                selection.removeAllRanges();

                flashCopyMessage(copyBtn, 'Copié!')
            } catch (e) {
                console && console.log(e);
                flashCopyMessage(copyBtn, 'Erreur :\'(')
            }
        });

        containerEl.appendChild(copyBtn);
    }

    // Add copy button to code blocks
    var highlightBlocks = document.getElementsByClassName('highlight');
    Array.prototype.forEach.call(highlightBlocks, addCopyButton);
})();
/***** FIN Bouton copier/coller */


/***** Bouton Retour Haut de la page */

window.onload = function() {
    if (localStorage.getItem("menu-scroll-position")) {
        document.getElementById('menu').scrollLeft = localStorage.getItem("menu-scroll-position");
    }
}
var mybutton = document.getElementById("top-link");
window.onscroll = function() {
    if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
        mybutton.style.visibility = "visible";
        mybutton.style.opacity = "1";
    } else {
        mybutton.style.visibility = "hidden";
        mybutton.style.opacity = "0";
    }
};
mybutton.onclick = function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    window.location.hash = ''
}

function menu_on_scroll() {
    localStorage.setItem("menu-scroll-position", document.getElementById('menu').scrollLeft);
}

/***** FIN bouton haut de page */
