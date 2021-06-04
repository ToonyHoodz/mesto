export default class Popup {
   constructor(popupSelector){
      this._popup = popupSelector;
   }
   open(){
      this._popup.classList.add('popup_opened');
      document.addEventListener('keydown', this._handleEscClose);
   }
   close() {
      this._popup.classList.remove('popup_opened');
      document.removeEventListener('keydown', this._handleEscClose);
   }
   _closeOverlay = (event) => {
      if (event.target === event.currentTarget) {
         this.close();
   }}
   _handleEscClose = (event) => {
      if (event.key === "Escape"){
         this.close()
      }
   }
   setEventLesteners(){
      const closeButton = this._popup.querySelector('.popup__close-bttn')
      closeButton.addEventListener('click', () =>{
         this.close();
      })
      this._popup.addEventListener('click', this._closeOverlay);
   }
}



