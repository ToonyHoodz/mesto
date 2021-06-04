import  Popup  from "./popup.js";
export default class PopupWithForm extends Popup {
   constructor(popupSelector, handleSubmit) {
      super(popupSelector);
      this._formElement = this._popup.querySelector('.popup__container');
      this._hadleSubmit = handleSubmit;
   }
   _getInputValues() {
      this._inputList = this._formElement.querySelectorAll('.popup__input');
      this._inputValues = {};
      this._inputList.forEach(input => 
      this._inputValues[input.name] = input.value);
      console.log(this._inputValues.cardName);
      console.log(this._inputValues.imglink);
      return this._inputValues;
   }
   setEventLesteners() {
      super.setEventLesteners();
      this._formElement.addEventListener('submit', this._submit)
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
      this.setEventLesteners();
   }
}