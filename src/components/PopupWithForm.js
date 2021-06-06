import  Popup  from "./Popup.js";
export default class PopupWithForm extends Popup {
   constructor(popupSelector, handleSubmit) {
      super(popupSelector);
      this._formElement = this._popup.querySelector('.popup__container');
      this._hadleSubmit = handleSubmit;
      this._inputList = this._formElement.querySelectorAll('.popup__input');
   }
   _getInputValues() {
      this._inputValues = {};
      this._inputList.forEach(input => 
      this._inputValues[input.name] = input.value);
      return this._inputValues;
   }
   setEventLesteners() {
      super.setEventLesteners();
      this._formElement.addEventListener('submit', this._submit);
   }
   close() {
      this._formElement.reset();
      super.close();
   }
   _submit = (event) => {
      event.preventDefault();
      this._hadleSubmit(this._getInputValues());
      this.close();
   }
   open(){
      super.open();
   }
}