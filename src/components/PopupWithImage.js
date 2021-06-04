import  Popup  from "./popup.js";
export default class PopupWithImage extends Popup {
   constructor(popupSelector) {
      super(popupSelector);
      this._popupImg = this._popup.querySelector('.popup__image-item');
      this._popupImgName = this._popup.querySelector('.popup__image-name');
   }
   open(data) {
      this._popupImgName.textContent = data.name;
      this._popupImgName.alt = data.name;
      this._popupImg.src = data.link;
      super.open();
   }
}