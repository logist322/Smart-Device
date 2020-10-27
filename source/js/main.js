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

    setButtonListener(siteMapButtonElement, siteMapListElement, contactsButtonElement, contactsListElement);
  }

  var contactsElement = document.querySelector('.footer__contacts');

  if (contactsElement) {
    var contactsButtonElement = contactsElement.querySelector('.footer-links__button');
    var contactsListElement = contactsElement.querySelector('.footer-links__list');

    removeNoJSButtonClass(contactsButtonElement);
    removeNoJSListClass(contactsListElement);

    setButtonListener(contactsButtonElement, contactsListElement, siteMapButtonElement, siteMapListElement);
  }
})();

$(document).ready(function(){
  $('.feedback__form input[type="tel"]').mask('+7(000)000-00-00');

  var formElement = document.querySelector('.feedback__form');
  var inputElement = document.querySelector('.feedback__form input[type="tel"]');

  formElement.addEventListener('submit', function (evt) {
    if (inputElement.value.length !== 16) {
      inputElement.setCustomValidity('Введите телефон полностью');

      evt.preventDefault();

      return;
    }
  });

  formElement.addEventListener('change', function () {
    inputElement.setCustomValidity('');
  });
});


$(document).ready(function(){
  $('.modal-call__form input[type="tel"]').mask('+7(000)000-00-00');

  var formElement = document.querySelector('.modal-call__form');
  var inputElement = document.querySelector('.modal-call__form input[type="tel"]');

  formElement.addEventListener('submit', function (evt) {
    if (inputElement.value.length !== 16) {
      inputElement.setCustomValidity('Введите телефон полностью');

      evt.preventDefault();

      return;
    }
  });

  formElement.addEventListener('change', function () {
    inputElement.setCustomValidity('');
  });
});

(function () {
  function show(elements) {
    elements.forEach(function (element) {
      element.classList.remove('visually-hidden');
    });
  }

  function hide(elements) {
    elements.forEach(function (element) {
      element.classList.add('visually-hidden');
    });
  }

  function keyDownHandler(evt) {
    if (evt.key !== 'Escape') {
      return;
    }

    closeHandler();
  }

  function closeHandler() {
    hide([modalElement, bgElement]);
    removeHandlers();
  }

  function addHandlers() {
    window.addEventListener('keydown', keyDownHandler);

    bgElement.addEventListener('click', closeHandler);

    closeButtonElement.addEventListener('click', closeHandler);
  }

  function removeHandlers() {
    window.removeEventListener('keydown', keyDownHandler);

    bgElement.removeEventListener('click', closeHandler);

    closeButtonElement.removeEventListener('click', closeHandler);
  }

  var callButtonElement = document.querySelector('.header__call');
  var modalElement = document.querySelector('.modal-call');
  var nameInputElement = modalElement.querySelector('input[type="text"]');
  var telInputElement = modalElement.querySelector('input[type="tel"]');
  var submitButtonElement = modalElement.querySelector('button[type="submit"]');
  var closeButtonElement = modalElement.querySelector('.modal-call__close');
  var bgElement = document.querySelector('.modal-bg');

  var isStorageSupport = true;
  var storageName = '';
  var storageTel = '';

  try {
    storageName = localStorage.getItem('name');
  } catch (err) {
    isStorageSupport = false;
  }

  try {
    storageTel = localStorage.getItem('tel');
  } catch (err) {
    isStorageSupport = false;
  }

  if (storageName) {
    nameInputElement.value = storageName;
  }

  if (storageTel) {
    telInputElement.value = storageTel;
  }

  if (isStorageSupport) {
    submitButtonElement.addEventListener('click', function () {
      if (!(nameInputElement.value && telInputElement.value)) {
        return;
      }

      localStorage.setItem('name', nameInputElement.value);
      localStorage.setItem('tel', telInputElement.value);
    });
  }

  callButtonElement.addEventListener('click', function (evt) {
    evt.preventDefault();

    show([modalElement, bgElement]);
    nameInputElement.focus();
    addHandlers();
  });
})();

(function () {
  document.querySelector('.greeting__consultation').addEventListener('click', function (evt) {
    evt.preventDefault();

    document.querySelector('.feedback').scrollIntoView({behavior: 'smooth'});
  });
})();

(function () {
  document.querySelector('.greeting__scroll').addEventListener('click', function (evt) {
    evt.preventDefault();

    document.querySelector('.advantages').scrollIntoView({behavior: 'smooth'});
  });
})();
