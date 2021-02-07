
const configValidation = {
   formSelector: '.popup__container',
   inputSelector: '.popup__input',
   submitButtonSelector: '.popup__button',
   inactiveButtonClass: 'popup__button_inactive',
   inputErrorClass: 'popup__input_type_error',
   errorClass: 'popup__input-error_active'
};

const isValid = (formElement, inputElement) => {
   if (!inputElement.validity.valid) {
      showInputError(formElement, inputElement, inputElement.validationMessage);
   } else {
      hideInputError(formElement, inputElement);
   }
}
const showInputError = (formElement, inputElement, errorMsg) => {
   const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
   inputElement.classList.add(configValidation.inputErrorClass);
   errorElement.classList.add(configValidation.errorClass);
   createErrorMsg(inputElement);
   errorElement.textContent = errorMsg;
}   


const hasInvalidInput = (inputList) =>{
   return inputList.some((inputElement) =>{  
      return !inputElement.validity.valid;
   })
};


const toggleButtonState = (inputList, buttonElement) =>{
   if (hasInvalidInput(inputList)){
      buttonElement.classList.add(configValidation.inactiveButtonClass);
      buttonElement.setAttribute('disabled', 'disabled');
   } else {
      buttonElement.classList.remove(configValidation.inactiveButtonClass);
      buttonElement.removeAttribute('disabled');
   }
};


const hideInputError = (formElement, inputElement) => {
   const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
   inputElement.classList.remove(configValidation.inputErrorClass);
   errorElement.classList.remove(configValidation.errorClass);
   errorElement.textContent = "";
}   

const setEventListeners = (formElement) => {
   const inputList = Array.from(formElement.querySelectorAll(configValidation.inputSelector));
   const buttonElement = formElement.querySelector(configValidation.submitButtonSelector);
   toggleButtonState(inputList, buttonElement);
   inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
         isValid(formElement, inputElement);
         toggleButtonState(inputList, buttonElement);
      });   
   });   
};   

const activateValidation = () => {
   const formList = Array.from(document.querySelectorAll(configValidation.formSelector));
   formList.forEach((formElement) => {
      formElement.addEventListener('submit', (evt) => {
         evt.preventDefault();
      });
      setEventListeners(formElement);
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
