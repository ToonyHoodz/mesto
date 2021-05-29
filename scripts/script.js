import {closePopup} from './popup.js';
import Card from "./card.js";
import FormValidator from  './validaty.js';

//closePopupEdit, closePopupAdd, openPopupEdit, editUserData, openPopupAdd, addEventListeners, closePopupOverlay, closePopupEsc
initialCards.forEach((el) => {
   const card = new Card(el.name, el.link);
   const cardEl = card.generateCard();
   cards.append(cardEl);
});

const formList = Array.from(document.querySelectorAll(configValidation.formSelector));
formList.forEach((el) =>{
   const formElement = new FormValidator (configValidation, el);
   const validityCheck = formElement.activateValidation(el, configValidation);
   const popupList = Array.from(document.querySelectorAll('.popup'));
   popupList.forEach((popup) =>{
      popup.addEventListener('click',() =>{
         closePopup(popupImg);
      })
   });
});

formList.forEach((container) =>{
container.addEventListener('click', () =>{
   closePopup(container);
})
});



//функция добавления  карточки
function addCard(event) {
   event.preventDefault();
   const card = new Card(cardName.value, imgLink.value)
   const cardEl = card.generateCard();
   addForm.reset();
   closePopup(popupAdd);
cards.prepend(cardEl);
}
//функции создания шаблона карточек 

buttonAdd.addEventListener('click', addCard);

