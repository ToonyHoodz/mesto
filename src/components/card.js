export default class Card {
   constructor(data, template, openImage) {
      this._name = data.name;
      this._link = data.link;
      this._openImage = openImage;
      this._template = template;
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
      this._element.querySelector('.card__image').alt = this._link;
      this._seteventLiteners();
      return this._element;
   };
   _seteventLiteners() {
      this._element.querySelector('.card__image').addEventListener('click', () => {
        this._openImage(this._name, this._link); 
           });
      this._element.querySelector('.card__delete-icon').addEventListener('click', () => {
         this._element.remove();
         this._elemnt = null;
      })
      this._element.querySelector('.card__like-icon').addEventListener('click', (event) =>{
            event.target.classList.toggle('card__like-icon_liked');
      });
   };
}

