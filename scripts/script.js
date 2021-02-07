const buttonClose = document.querySelector('.popup__close-icon');
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
const cardTemplate = document.querySelector('#card-template').content.querySelector('.card');
const cardName = document.querySelector('.popup__input_cardName');
const imgLink = document.querySelector('.popup__input_imgLink');
const cards = document.querySelector('.cards');
const likeButton = document.querySelector('.card__like-icon');
const popupImg = document.querySelector('.popup_image');
const popupImgName = document.querySelector('.popup__image-name');
const popupItem = popupImg.querySelector('.popup__image-item');
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
//слушатель на закрытие Edit
buttonClose.addEventListener('click', closePopupEdit);

function closePopup(popup) {
   popup.classList.remove('popup_opened');
   document.removeEventListener('keydown', closePopupEsc);
   popup.removeEventListener('click', closePopupOverlay);

}

function openPopup(popup) {
   popup.classList.add('popup_opened');
   document.addEventListener('keydown', closePopupEsc);
   popup.addEventListener('click', closePopupOverlay);
}

//функция закрытия попапа Edit
function closePopupEdit() {
   closePopup(popupEdit);

};
//функция закрытия попапа Add
function closePopupAdd() {
   closePopup(popupAdd);
}
//слушатель на закрытие попап Add
buttonClose.addEventListener('click', closePopupAdd);
//слушатель на открытие popup Edit
buttonOpenEdit.addEventListener('click', openPopupEdit);
//функция открытия попапа Edit и ввода данных
function openPopupEdit() {
   openPopup(popupEdit);
   nameInput.value = nameProfile.textContent;
   workInput.value = workProfile.textContent;
};
//функция замены данных из попапа Edit
function editUserData(evt) {
   evt.preventDefault();
   nameProfile.textContent = nameInput.value;
   workProfile.textContent = workInput.value;
   closePopup(popupEdit);
};
//слушатель на замену данных
editForm.addEventListener('submit', editUserData);
//функция открытия попапа Add и ввода данных
function openPopupAdd() {
  openPopup(popupAdd);
};
//слушатель на открытие popup Add
buttonOpenAdd.addEventListener('click', () => {
   openPopupAdd(popupAdd);
});
//функции добавления карточек при загрузке страницы
function createCard(el) {
   const newCard = cardTemplate.cloneNode(true);
   const cardImage = newCard.querySelector('.card__image');
   newCard.querySelector('.card__name').textContent = el.name;
   cardImage.src = el.link;
   cardImage.alt = el.name;
   cardImage.addEventListener('click', () => {
      openImage(el) });
   newCard.addEventListener('click', deleteCard);
   newCard.addEventListener('click', likeOn);
   return newCard;
}

function createCards() {
   for (let i = 0; i < initialCards.length; i++) {
      const newCard = createCard(initialCards[i]);
      cards.append(newCard);
   }
}
//первичная загрузка карточек
createCards();
//лайк 
function likeOn(event) {
   if (event.target.classList.contains('card__like-icon')) {
      event.target.classList.toggle('card__like-icon_liked');
   }
}
//функция создания шаблона карточки
function addCard(event) {
   event.preventDefault();
   const addedCard = {
      name: '',
      link: ''
   }
   addedCard.name = cardName.value;
   addedCard.link = imgLink.value;
   cards.prepend(createCard(addedCard));
   closePopup(popupAdd);
   addForm.reset();
}
buttonAdd.addEventListener('click', addCard);
//функции удаления карточки
function deleteCard(event) {
   event.preventDefault();
   const item = event.currentTarget;
   if (event.target.classList.contains('card__delete-icon')) {
      item.removeEventListener('click', deleteCard);
      item.removeEventListener('click', likeOn);
      item.removeEventListener('click', openImage);
      item.remove();
   }
}
//функция открытия картинки
function openImage(el) {
      openPopup(popupImg);
      popupItem.src = el.link;
      popupImgName.textContent = el.name
   
}

function closePopupImage() {
   closePopup(popupImg);
}
//слушатель на закрытие popup Image
buttonCloseImg.addEventListener('click', closePopupImage);




//функция на закрытие попапов на ESC
function closePopupEsc(evt) {
   if (evt.key === "Escape"){
      closePopup(document.querySelector('.popup_opened'));
   }
}

//функция на закрытие по клику на оверлей
function closePopupOverlay(evt){
      if (evt.target === evt.currentTarget) {
         closePopup(document.querySelector('.popup_opened'))
      }
   }






