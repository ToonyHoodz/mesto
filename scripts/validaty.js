export default class FormValidator{
   constructor (data, formElement){
      this._data = configValidation;
      this._formElement = formElement;
   }
   _setEventListeners = (formElement, config) => {
      const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
      const buttonElement = formElement.querySelector(config.submitButtonSelector);
      this._toggleButtonState(inputList, buttonElement, config);
      inputList.forEach((inputElement) => {
         inputElement.addEventListener('input', () => {
            this._isValid(formElement, inputElement, config);
            this._toggleButtonState(inputList, buttonElement, config);
         });
      });
   };
   _toggleButtonState = (inputList, buttonElement, config) => {
      if (this._hasInvalidInput(inputList)) {
         buttonElement.classList.add(config.inactiveButtonClass);
         buttonElement.setAttribute('disabled', 'disabled');
      } else {
         buttonElement.classList.remove(config.inactiveButtonClass);
         buttonElement.removeAttribute('disabled');
      }
   };
   _isValid = (formElement, inputElement, config) => {
      inputElement.setCustomValidity('');
      if (!inputElement.validity.valid) {
         this._createErrorMsg(inputElement);
         this._showInputError(formElement, inputElement, inputElement.validationMessage, config);
      } else {
         this._hideInputError(formElement, inputElement, config);
      }
   }
   _hasInvalidInput = (inputList) => {
      return inputList.some((inputElement) => {
         return !inputElement.validity.valid;
      })
   };
   _showInputError = (formElement, inputElement, errorMsg, config) => {
      const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
      inputElement.classList.add(config.inputErrorClass);
      errorElement.classList.add(config.errorClass);
      errorElement.textContent = errorMsg;
   }

   _hideInputError = (formElement, inputElement, config) => {
      const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
      inputElement.classList.remove(config.inputErrorClass);
      errorElement.classList.remove(config.errorClass);
      errorElement.textContent = "";
   }
   _createErrorMsg(inputElement) {
      if (inputElement.type === 'url') {
         inputElement.setCustomValidity("Введите адрес сайта");
      } else {
         inputElement.setCustomValidity('Вы пропустили это поле');
      }
   }
   activateValidation(formElement, config)  {
         this._formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
         });
         this._setEventListeners(formElement, config);
   };
}