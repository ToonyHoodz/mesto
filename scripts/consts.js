const initialCards = [{
   name: 'Архыз',
   link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
}, {
   name: 'Челябинская область',
   link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
}, {
   name: 'Иваново',
   link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
}, {
   name: 'Сахалин',
   link: 'https://images.unsplash.com/photo-1579472140844-a42628a9dec6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80'
}, {
   name: 'Холмогорский район',
   link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
}, {
   name: 'Санкт-Петербург',
   link: 'https://images.unsplash.com/photo-1556610961-2fecc5927173?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1520&q=80'
}];

const buttonCloseEdit = document.querySelector('.popup__close-bttn-edit');
const buttonCloseAdd = document.querySelector('.popup__close-bttn-add');
const buttonCloseImg = document.querySelector('.popup__close-icon-img');
const buttonOpenEdit = document.querySelector('.profile__edit-button');
const popupEdit = document.querySelector('.popup_edit');
const nameInput = document.querySelector('.popup__input_name');
const workInput = document.querySelector('.popup__input_work');
const nameProfile = document.querySelector('.profile__info-name');
const workProfile = document.querySelector('.profile__info-activity');
const editForm = document.querySelector('.popup__container_edit');
const addForm = document.querySelector('.popup__container_add');
const popupAdd = document.querySelector('.popup_add');
const buttonAdd = document.querySelector('.popup__button_add');
const buttonOpenAdd = document.querySelector('.profile__add-bttn');
const popupImgName = document.querySelector('.popup__image-name');
const popupItem = document.querySelector('.popup__image-item');
const cardName = document.querySelector('.popup__input_cardName');
const imgLink = document.querySelector('.popup__input_imgLink');
const cards = document.querySelector('.cards');
const popupImg = document.querySelector('.popup_image');
const cardTemplate = document.querySelector('#card-template').content.querySelector('.card');


const configValidation = {
   formSelector: '.popup__container',
   inputSelector: '.popup__input',
   submitButtonSelector: '.popup__button',
   inactiveButtonClass: 'popup__button_inactive',
   inputErrorClass: 'popup__input_type_error',
   errorClass: 'popup__input-error_active'
};
