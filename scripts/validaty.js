const configValidation = {
   formSelector: '.popup__container',
   inputSelector: '.popup__input',
   submitButtonSelector: '.popup__button',
   inactiveButtonClass: 'popup__button_inactive',
   inputErrorClass: 'popup__input_type_error',
   errorClass: 'popup__input-error_active'
};

const isValid = (formElement, inputElement, config) => {
inputElement.setCustomValidity('');
   if (!inputElement.validity.valid) {
      createErrorMsg(inputElement);
      showInputError(formElement, inputElement, inputElement.validationMessage, config);
   } else {
      hideInputError(formElement, inputElement, config);
   }
}
const showInputError = (formElement, inputElement, errorMsg, config) => {
   const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
   inputElement.classList.add(config.inputErrorClass);
   errorElement.classList.add(config.errorClass);
   errorElement.textContent = errorMsg;
}

const hideInputError = (formElement, inputElement, config) => {
   const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
   inputElement.classList.remove(config.inputErrorClass);
   errorElement.classList.remove(config.errorClass);
   errorElement.textContent = "";
}

const hasInvalidInput = (inputList) => {
   return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
   })
};


const toggleButtonState = (inputList, buttonElement, config) => {
   if (hasInvalidInput(inputList)) {
      buttonElement.classList.add(config.inactiveButtonClass);
      buttonElement.setAttribute('disabled', 'disabled');
   } else {
      buttonElement.classList.remove(config.inactiveButtonClass);
      buttonElement.removeAttribute('disabled');
   }
};



const setEventListeners = (formElement, config) => {
   const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
   const buttonElement = formElement.querySelector(config.submitButtonSelector);
   toggleButtonState(inputList, buttonElement, config);
   inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
         isValid(formElement, inputElement, config);
         toggleButtonState(inputList, buttonElement, config);
      });
   });
};

const activateValidation = (config) => {
   const formList = Array.from(document.querySelectorAll(config.formSelector));
   formList.forEach((formElement) => {
      formElement.addEventListener('submit', (evt) => {
         evt.preventDefault();
      });
      setEventListeners(formElement, config);
   });
};

activateValidation(configValidation);


function createErrorMsg(inputElement) {
   if (inputElement.type === 'url') {
      inputElement.setCustomValidity("Введите адрес сайта");
   } else {
      inputElement.setCustomValidity('Вы пропустили это поле');
   }
} 