
import './index.css';
import {
   initialCards,
buttonOpenEdit,
popupEdit,
popupAddSelector,
popupImageSelector,
popupEditSelector,
imgLink,
nameProfile,
workProfile,
editForm,
addForm,
nameSelector,
subSelector,
nameInput,
workInput,
buttonOpenAdd,
cards,
popupImg,
cardTemplate,
selectors
} from "../components/Consts.js";
import Card from "../components/Card.js";
import FormValidator from  '../components/Validaty.js';
import UserInfo from '../components/UserInfo.js'
import Section from "../components/Section.js";
import  PopupWithImage from "../components/PopupWithImage.js";
import  PopupWithForm  from "../components/PopupWithForm.js";

//первичные карточки
const firstCards = new Section({
   items: initialCards,
   renderer: (data) =>{
      const card = createCard(data);
      const cardEl = card.generateCard();
      firstCards.addItem(cardEl);
   },
}, cards);
firstCards.renderItems();


//popupImg
const openPopupImage = new PopupWithImage(popupImageSelector);
openPopupImage.setEventLesteners();

//popupAdd

const addCard = new PopupWithForm(popupAddSelector, submitCard);
addCard.setEventLesteners();
buttonOpenAdd.addEventListener('click', () => { 
   formAdd.toggleButtonState();
   addCard.open()});

function submitCard (data) {
   const {
      cardName: name,
      imglink: link
   } = data;
   const card = createCard({
      name,
      link
   });
   const cardEl = card.generateCard();
   firstCards.newItem(cardEl);
}

//validation
const formAdd = new FormValidator(selectors, addForm);
formAdd.activateValidation();


const formEdit = new FormValidator(selectors, editForm);
formEdit.activateValidation();


//edition

const editProfile = new PopupWithForm(popupEditSelector, submitProfile);
editProfile.setEventLesteners();
const fillProfile = new UserInfo(nameSelector,
subSelector);

buttonOpenEdit.addEventListener('click', () =>{
   formEdit.toggleButtonState();
   editProfile.open();
  fillProfile.getUserInfo();
fillProfile.setUserInfo(nameProfile.textContent, workProfile.textContent);
   nameInput.value = nameProfile.textContent;
   workInput.value = workProfile.textContent;
});

function submitProfile(data) {
   nameProfile.textContent = data.name;
   workProfile.textContent = data.work;
}

function createCard(data) {
   const card = new Card(data, cardTemplate, () => openPopupImage.open(data));
   return card;
}


