export const initialCards = [{
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

export const buttonClosePopup = document.querySelector('.popup__close-bttn');
export const buttonCloseEdit = document.querySelector('.popup__close-bttn-edit');
export const buttonCloseAdd = document.querySelector('.popup__close-bttn-add');
export const buttonCloseImg = document.querySelector('.popup__close-icon-img');
export const buttonOpenEdit = document.querySelector('.profile__edit-button');
export const popupEdit = document.querySelector('.popup_edit');
export const nameInput = document.querySelector('.popup__input_name');
export const workInput = document.querySelector('.popup__input_work');
export const nameProfile = document.querySelector('.profile__info-name');
export const workProfile = document.querySelector('.profile__info-activity');
export const editForm = document.querySelector('.popup__container_edit');
export const addForm = document.querySelector('.popup__container_add');
export const popupAdd = document.querySelector('.popup_add');
export const buttonAdd = document.querySelector('.popup__button_add');
export const buttonOpenAdd = document.querySelector('.profile__add-bttn');
export const popupImgName = document.querySelector('.popup__image-name');
export const popupItem = document.querySelector('.popup__image-item');
export const cardName = document.getElementById('cardName');
export const imgLink = document.getElementById('imglink');
export const cards = document.querySelector('.cards');
export const popupImg = document.querySelector('.popup_image');
export const cardTemplate = document.querySelector('#card-template').content.querySelector('.card');


export const configValidation = {
   formSelector: '.popup__container',
   inputSelector: '.popup__input',
   submitButtonSelector: '.popup__button',
   inactiveButtonClass: 'popup__button_inactive',
   inputErrorClass: 'popup__input_type_error',
   errorClass: 'popup__input-error_active'
};
