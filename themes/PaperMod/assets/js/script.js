
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

    /* JS antispan
----------------------------------------------------------------------------------------------- */
          /* partie 2 fichier index.js */
        (function (root, factory) {
  if (root === undefined && window !== undefined) root = window;
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module unless amdModuleId is set
    define([], function () {
      return (root['jCaptcha'] = factory());
    });
  } else if (typeof module === 'object' && module.exports) {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory();
  } else {
    root['jCaptcha'] = factory();
  }
}(this, function () {

"use strict";

{
  var generateRandomNum = function generateRandomNum() {
    num1 = Math.round(Math.random() * 8) + 1;
    num2 = Math.round(Math.random() * 8) + 1;
    sumNum = num1 + num2;
  };
  /**
   * @param {Object}
   * @param {Object}
   * @param {Boolean}
  */


  var setCaptcha = function setCaptcha($el, options, shouldReset) {
    if (!shouldReset) {
      $el.insertAdjacentHTML('beforebegin', "<canvas class=\"".concat(options.canvasClass, "\"\n                    width=\"").concat(options.canvasStyle.width, "\" height=\"").concat(options.canvasStyle.height, "\">\n                </canvas>\n            "));
      this.$captchaEl = document.querySelector(".".concat(options.canvasClass));
      this.$captchaTextContext = this.$captchaEl.getContext('2d');
      this.$captchaTextContext = Object.assign(this.$captchaTextContext, options.canvasStyle);
    }

    this.$captchaTextContext.clearRect(0, 0, options.canvasStyle.width, options.canvasStyle.height);
    this.$captchaTextContext.fillText("".concat(num1, " + ").concat(num2, " ").concat(options.requiredValue), 0, 0);
  };
  /**
   * @param {Object}
  */


  var jCaptcha = function jCaptcha() {

    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    this.options = Object.assign({}, {
      el: '.jCaptcha',
      canvasClass: 'jCaptchaCanvas',
      requiredValue: '=',
      resetOnError: true,
      focusOnError: true,
      clearOnSubmit: true,
      callback: null,
      canvasStyle: {
      }
    }, options);

    this._init();
  };

  var sumNum, num1, num2;
  var numberOfTries = 0;
  ;
  jCaptcha.prototype = {
    _init: function _init() {
      this.$el = document.querySelector(this.options.el);
      generateRandomNum();
      setCaptcha.call(this, this.$el, this.options);
    },
    validate: function validate() {
      numberOfTries++;
      this.callbackReceived = this.callbackReceived || typeof this.options.callback == 'function';

      if (this.$el.value != sumNum) {
        this.callbackReceived && this.options.callback('error', this.$el, numberOfTries);
        this.options.resetOnError === true && this.reset();
        this.options.focusOnError === true && this.$el.focus();
        this.options.clearOnSubmit === true && (this.$el.value = '');
      } else {
        this.callbackReceived && this.options.callback('success', this.$el, numberOfTries);
        this.options.clearOnSubmit === true && (this.$el.value = '');
      }
    },
    reset: function reset() {
      generateRandomNum();
      setCaptcha.call(this, this.$el, this.options, true);
    }
  };
}

return jCaptcha;

}));

  // optionally, set maximum number of captcha validation on event:
        const maxNumberOfTries = 5;

        // captcha initial setup
        var myCaptcha = new jCaptcha({
            el: '.jCaptcha',
            canvasClass: 'jCaptchaCanvas',
            canvasStyle: {
                // properties for captcha stylings
                width: 100,
                height: 15,
                textBaseline: 'top',
                font: '15px Segoe UI bolder',
                textAlign: 'left',
                fillStyle: 'red',
            },

            // set callback function
            callback: function (response, $captchaInputElement, numberOfTries) {

                if (maxNumberOfTries === numberOfTries) {
                    // maximum attempts reached, so do something
                    // e.g. disable the form:
                    document.querySelector('form').removeEventListener('submit', formSubmit);
                    $captchaInputElement.classList.add('disabled');
                    $captchaInputElement.placeholder = 'Maximum de tentatives atteintes!';
                    $captchaInputElement.setAttribute('disabled', 'true');
                    document.querySelector('button').setAttribute('disabled', 'true');

                    return;
                }

                if (response == 'success') {

                    $captchaInputElement.classList.remove('error');
                    $captchaInputElement.classList.add('success');
                    $captchaInputElement.placeholder = 'Succès!';

                    // now continue with form submit

                }

                if (response == 'error') {

                    $captchaInputElement.classList.remove('success');
                    $captchaInputElement.classList.add('error');
                    $captchaInputElement.placeholder = 'S’il vous plaît essayer à nouveau!';

                }

            }

        });

        function formSubmit(e) {

            e.preventDefault();

            // myCaptcha validate
            myCaptcha.validate();

        };

        // validate captcha on form submit event
        document.querySelector('form').addEventListener('submit', formSubmit);

        /* fin*/

    /* staticman-js-common
-----------------------------------------------------------------------------------------------*/
function showComments() {
    // Remove button
    var staticmanButton = document.getElementById('staticman-button');
    staticmanButton.parentNode.removeChild(staticmanButton); 
    // Un-hide comments
    var staticmanComments = document.getElementById('staticman-comments');
    staticmanComments.style.display = 'block'; 
}

    function checkForm(form){


    if(form.yourname.value == ""){
        form.warningComment.style.display = 'block'; 
        form.warningComment.innerText = "Veuillez saisir votre pseudonyme";
        return false;
    }
    else if(form.yourcomment.value == ""){
        form.warningComment.style.display = 'block'; 
        form.warningComment.innerText = "S'il vous plait tapez un commentaire";
        return false;
    }
    else if(form.youarenotarobot.value == ""){
        form.warningComment.style.display = 'block'; 
        form.warningComment.innerText = "S'il vous plait tapez le résultat!";
        return false;
    }
    else{
        form.submitButton.disabled = true;
        form.warningComment.style.display = 'none'; 
        form.warningComment.innerText = "";
        form.submitButton.innerText = "Envoi...";
        return true;
    }
    
}

    /* end staticman js */