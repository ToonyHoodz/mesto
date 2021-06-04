
import './pages/style.css';
import {
   initialCards,
buttonOpenEdit,
popupEdit,
cardName,
imgLink,
nameProfile,
workProfile,
editForm,
addForm,
popupAdd,
buttonAdd,
buttonOpenAdd,
cards,
popupImg,
cardTemplate,
configValidation
} from "./components/consts.js";
import Card from "./components/card.js";
import FormValidator from  './components/validaty.js';
import UserInfo from './components/UserInfo.js'
import Section from "./components/Section.js";
import  PopupWithImage from "./components/PopupWithImage.js";
import  PopupWithForm  from "./components/PopupWithForm.js";

//первичные карточки
const firstCards = new Section({
   items: initialCards,
   renderer: (data) =>{
      const card = new Card(data, cardTemplate, () => openPopupImage.open(data));
      const cardEl = card.generateCard();
      firstCards.addItem(cardEl);
   },
}, cards);
firstCards.renderItems();


//popupImg
const openPopupImage = new PopupWithImage(popupImg);
openPopupImage.setEventLesteners();

//popupAdd

const addCard = new PopupWithForm(popupAdd, submitCard);
buttonOpenAdd.addEventListener('click', () => { addCard.open()});

function submitCard (data) {
   const {
      cardName: name,
      imglink: link
   } = data;

   const card = new Card ({
      name,
      link }, 
   cardTemplate,
   () => openPopupImage.open(data));
   const cardEl = card.generateCard();
   firstCards.newItem(cardEl);
   buttonAdd.setAttribute('disabled', 'disabled');
   buttonAdd.classList.add(configValidation.inactiveButtonClass);
}

//validation
const formAdd = new FormValidator(configValidation, addForm);
formAdd.activateValidation();
const formEdit = new FormValidator(configValidation, editForm);
formEdit.activateValidation();


//edition

const editProfile = new PopupWithForm(popupEdit, submitProfile);
editProfile.setEventLesteners();
buttonOpenEdit.addEventListener('click', () =>{
   editProfile.open();
   const inputValue = new UserInfo();
   inputValue.getUserInfo();
});

function submitProfile(data) {
   nameProfile.textContent = data.name;
   workProfile.textContent = data.work;
}
