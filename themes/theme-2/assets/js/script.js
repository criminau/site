/* script.js (tous le javascript du site en bas du site pour ne rien omettre)*/

/****   Bouton copier/coller dans le code des articles
   Thanks! to :
https://www.fiznool.com/blog/2018/09/14/adding-click-to-copy-buttons-to-a-hugo-powered-blog/
   Fonctionnement : cf voir markdownsyntax.md
----------------------------------------------------------------------------------------------- ****/
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
        copyBtn.type = "button";

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


/**** bouton copier/coller le lien de la page 
-------------------------------------------------- ****/
function Copy() 
    {
        var inputc = document.body.appendChild(document.createElement("input"));
        inputc.value = window.location.href;
        inputc.focus();
        inputc.select();
        document.execCommand('copy');
        inputc.parentNode.removeChild(inputc);
    }


/*** bouton (ancien lien dans le pied de page)
--------------------------------------------------  ***/
var mybutton = document.getElementById("tl2");
mybutton.onclick = function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

/**** Boutons Retour Haut de la page
-------------------------------------------------- ****/
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
}