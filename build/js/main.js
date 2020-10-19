'use strict';

(function () {
  var setButtonListener = function (buttonElement, listElement, oppositeButtonElement, oppositeListElement) {
    buttonElement.addEventListener('click', function () {
      buttonElement.classList.toggle('footer-links__button--closed');
      listElement.classList.toggle('footer-links__list--closed');

      if (oppositeButtonElement && oppositeListElement) {
        oppositeButtonElement.classList.add('footer-links__button--closed');
        oppositeListElement.classList.add('footer-links__list--closed');
      }
    });
  };

  var removeNoJSClass = function (element, className) {
    element.classList.remove(className + '--no-js');
  };

  var removeNoJSButtonClass = function (element) {
    removeNoJSClass(element, 'footer-links__button');
  };

  var removeNoJSListClass = function (element) {
    removeNoJSClass(element, 'footer-links__list');
  };

  var siteMapElement = document.querySelector('.footer__site-map');

  if (siteMapElement) {
    var siteMapButtonElement = siteMapElement.querySelector('.footer-links__button');
    var siteMapListElement = siteMapElement.querySelector('.footer-links__list');

    removeNoJSButtonClass(siteMapButtonElement);
    removeNoJSListClass(siteMapListElement);

  }

  var contactsElement = document.querySelector('.footer__contacts');

  if (contactsElement) {
    var contactsButtonElement = contactsElement.querySelector('.footer-links__button');
    var contactsListElement = contactsElement.querySelector('.footer-links__list');

    removeNoJSButtonClass(contactsButtonElement);
    removeNoJSListClass(contactsListElement);
  }

  setButtonListener(siteMapButtonElement, siteMapListElement, contactsButtonElement, contactsListElement);

  setButtonListener(contactsButtonElement, contactsListElement, siteMapButtonElement, siteMapListElement);
})();

