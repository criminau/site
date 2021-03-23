/* Saticman + Anti-Spam
-----------------------------------------------------------------------------------*/

// Permet d'afficher l'espace commentaire.
function showComments() {
// Remove button
var staticmanButton = document.getElementById('staticman-button');
staticmanButton.parentNode.removeChild(staticmanButton);
// Un-hide comments
var staticmanComments = document.getElementById('staticman-comments');
staticmanComments.style.display = 'block';
};

// Permet de calculer le captcha.
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
//
// @param {Object}
// @param {Object}
// @param {Boolean}


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
// @param {Object}



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
  canvasStyle: {}
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

// Permet d'afficher/déployer un Captcha.
// Option, choisissez un nombre d'essai maximum pour valider le captcha.
    const maxNumberOfTries = 5;

    // Captcha SETUP Initial
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
              // nombre maximum de tentatives atteintes!
                // e.g. disable the form:
                form.removeEventListener('submit', formSubmit);
                $captchaInputElement.classList.add('disabled');
                $captchaInputElement.placeholder = 'Maximum attempts reached!';
                $captchaInputElement.setAttribute('disabled', 'true');
                // On désactive correctement le bouton submit.
                document.getElementById("submitButton").setAttribute('disabled', 'true');
                return;
            }

            if (response == 'success') {
              // réponse valide !
                $captchaInputElement.classList.remove('error');
                $captchaInputElement.classList.add('success');
                $captchaInputElement.placeholder = "Succès !";

                // Donc maintenant on continue l'envoi du formulaire!

                // Voici le script si aucun captcha personnalisé.

              // pseudonyme vide
              if(form.yourname.value == ""){
                  form.warningComment.style.display = 'block';
                  form.warningComment.innerText = "Veuillez saisir votre pseudonyme";
                  return false;
              }
              // commentaire vide
              else if(form.yourcomment.value == ""){
                  form.warningComment.style.display = 'block';
                  form.warningComment.innerText = "S'il vous plait tapez un commentaire";
                  return false;
              }
              // input caché n'est pas vide -> pas humain
              else if(form.youarenotarobot1.value != ""){
                return false;
              }
              // tout est bon !
              else{
                  form.submitButton.disabled = true;
                  form.warningComment.style.display = 'none';
                  form.warningComment.innerText = "";
                  form.submitButton.innerText = "Envoi...";
                  // Tout est toujours sur la bonne voix
                  // On envoi donc le formulaire vers Action avec la Methode POST
                  document.getElementById("commentsform").submit();
                  return true;
                }
            }

            if (response == 'error') {
              // le résultat n'est pas le bon
                $captchaInputElement.classList.remove('success');
                $captchaInputElement.classList.add('error');
                $captchaInputElement.placeholder = "S'il vous plaît essayez à nouveau !";
                return false;
            }

        }

    });

// Valider le JsCaptcha depuis un envoi du formulaire.
function formSubmit(e) {
    e.preventDefault();
    // myCaptcha validate
    myCaptcha.validate();
};

// J'appelle la fonction formSubmit si je clique sur submit depuis le formulaire Id="commentsform".
var form = document.getElementById("commentsform");
form.addEventListener('submit', formSubmit);

// Le commentaire bien parti, script pour afficher le message merci!
if (/comment-thankyou/.test(window.location.href)) {
document.getElementById('comment-thankyou').style.display = 'block';
}else{
document.getElementById('comment-thankyou').style.display = 'none';
}

/* FIN Staticman + Anti-Spam section */
