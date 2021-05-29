import { closePopup, openPopup } from './popup.js';
export default class Card {
   constructor(name, link) {
      this._name = name;
      this._link = link;
      
   }
   _getTemplate() {
      const cardEl = document
         .querySelector('#card-template')
         .content.querySelector('.card')
         .cloneNode(true);
      return cardEl;
   }
   generateCard() {
      this._element = this._getTemplate();
      this._element.querySelector('.card__name').textContent = this._name;
      this._element.querySelector('.card__image').src = this._link;
      this._seteventLiteners();
      return this._element;
   };
   _seteventLiteners() {
      this._element.querySelector('.card__image').addEventListener('click', () => {
         this._openImage();
      });
      this._element.querySelector('.card__delete-icon').addEventListener('click', () => {
         this._element.remove();
         this._elemnt = null;
      })
      this._element.querySelector('.card__like-icon').addEventListener('click', (event) =>{
         if (event.target.classList.contains('card__like-icon')) {
            event.target.classList.toggle('card__like-icon_liked');
      }});
      buttonCloseImg.addEventListener('click', () => {
         this._closePopupImage();
      })
   };

   _openImage() {
      popupItem.src = this._link;
      popupItem.alt = this._name;
      popupImgName.textContent = this._name;
      openPopup(popupImg);
      document.addEventListener('keydown', this._closePopupEsc)
   }
   _closePopupEsc(evt) {
      if (evt.key === "Escape"){
         closePopup(document.querySelector('.popup_opened'));
      }
   };
   _closePopupImage() {
     closePopup(popupImg);
      document.removeEventListener('keydown', this._closePopupEsc)
   };
}

