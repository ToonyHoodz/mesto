export default class FormValidator{
   constructor (data, formElement){
      this._data = data;
      this._formElement = formElement;
      this._inputList = Array.from(formElement.querySelectorAll(this._data.inputSelector));
      this._buttonElement = formElement.querySelector(this._data.submitButtonSelector);
   }
   _setEventListeners() {
      this.toggleButtonState();
      this._inputList.forEach((inputElement) => {
         inputElement.addEventListener('input', () => {
            this._isValid(inputElement);
            this.toggleButtonState();
         });
      });
   };
   toggleButtonState = () => {
      if (this._hasInvalidInput(this._inputList)) {
         this._buttonElement.setAttribute('disabled', 'disabled');
         this._buttonElement.classList.add(this._data.inactiveButtonClass);
      } else {
         this._buttonElement.classList.remove(this._data.inactiveButtonClass);
         this._buttonElement.removeAttribute('disabled');
      }
   };
   _isValid = (inputElement) => {
      inputElement.setCustomValidity('');
      if (!inputElement.validity.valid) {
         this._createErrorMsg(inputElement);
         this._showInputError(inputElement, inputElement.validationMessage);
      } else {
         this._hideInputError(inputElement);
      }
   }
   _hasInvalidInput = (inputList) => {
      return inputList.some((inputElement) => {
         return !inputElement.validity.valid;
      })
   };
   _showInputError = (inputElement, errorMsg) => {
      const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
      inputElement.classList.add(this._data.inputErrorClass);
      errorElement.classList.add(this._data.errorClass);
      errorElement.textContent = errorMsg;
   }

   _hideInputError = (inputElement) => {
      const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
      inputElement.classList.remove(this._data.inputErrorClass);
      errorElement.classList.remove(this._data.errorClass);
      errorElement.textContent = "";
   }
   _createErrorMsg(inputElement) {
      if (inputElement.type === 'url') {
         inputElement.setCustomValidity("Введите адрес сайта");
      } else {
         inputElement.setCustomValidity('Вы пропустили это поле');
      }
   }
   activateValidation()  {
         this._formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
         });
      this._setEventListeners();
   };
}