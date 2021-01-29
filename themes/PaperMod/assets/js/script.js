
/* copybutton Js
Fonctionnement, cf voir markdownsyntax.md
Add code-copy buttons using progressive enhancement
https://www.fiznool.com/blog/2018/09/14/adding-click-to-copy-buttons-to-a-hugo-powered-blog/
--------------------------------------------------------------------------------------------------*/
(function() {
    'use strict';

    if (!document.queryCommandSupported('copy')) {
        return;
    }

    function flashCopyMessage(el, msg) {
        el.textContent = msg;
        setTimeout(function() {
            el.textContent = "Copy";
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

                flashCopyMessage(copyBtn, 'Copied!')
            } catch (e) {
                console && console.log(e);
                flashCopyMessage(copyBtn, 'Failed :\'(')
            }
        });

        containerEl.appendChild(copyBtn);
    }

    // Add copy button to code blocks
    var highlightBlocks = document.getElementsByClassName('highlight');
    Array.prototype.forEach.call(highlightBlocks, addCopyButton);
})();

    /* END copybutton JS */

    /* Back to TOP button
------------------------------------------------------------------------------------------------*/
window.onload = function () {
    if (localStorage.getItem("menu-scroll-position")) {
        document.getElementById('menu').scrollLeft = localStorage.getItem("menu-scroll-position");
    }
}
var mybutton = document.getElementById("top-link");
window.onscroll = function () {
    if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
        mybutton.style.visibility = "visible";
        mybutton.style.opacity = "1";
    } else {
        mybutton.style.visibility = "hidden";
        mybutton.style.opacity = "0";
    }
};
mybutton.onclick = function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    window.location.hash = ''
}

function menu_on_scroll() {
    localStorage.setItem("menu-scroll-position", document.getElementById('menu').scrollLeft);
}
    /* end */

    /* staticman-js-common
-----------------------------------------------------------------------------------------------*/
var onloadCallbackCaptcha = function(sitekey) {
    grecaptcha.render('div-recaptcha');
  };

function showComments() {
    // Remove button
    var staticmanButton = document.getElementById('staticman-button');
    staticmanButton.parentNode.removeChild(staticmanButton); 
    // Un-hide comments
    var staticmanComments = document.getElementById('staticman-comments');
    staticmanComments.style.display = 'block'; 
    // load recaptcha script (delete if not using recaptcha)
    var script = document.createElement('script');
    script.setAttribute('src', 'https://www.google.com/recaptcha/api.js?onload=onloadCallbackCaptcha&render=explicit');
    document.head.appendChild(script);
}

function checkForm(form){

    if(typeof(grecaptcha) === "undefined"){
        form.warningComment.style.display = 'block'; 
        form.warningComment.innerText = "There was a problem loading the reCaptcha so it is not possible to submit a comment at the moment";
        return false;
    }
    else if(grecaptcha.getResponse() == ""){
        form.warningComment.style.display = 'block'; 
        form.warningComment.innerText = "Please confirm you are not a robot :)";
        return false;
    }
    else if(form.yourname.value == ""){
        form.warningComment.style.display = 'block'; 
        form.warningComment.innerText = "Please type your name";
        return false;
    }
    else if(form.yourcomment.value == ""){
        form.warningComment.style.display = 'block'; 
        form.warningComment.innerText = "Please type a comment";
        return false;
    }
    else{
        form.submitButton.disabled = true;
        form.warningComment.style.display = 'none'; 
        form.warningComment.innerText = "";
        form.submitButton.innerText = "Sending...";
        return true;
    }
    
}
    /* end staticman js */

    