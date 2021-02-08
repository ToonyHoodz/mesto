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
const cardTemplate = document.querySelector('#card-template').content.querySelector('.card');
const cardName = document.querySelector('.popup__input_cardName');
const imgLink = document.querySelector('.popup__input_imgLink');
const cards = document.querySelector('.cards');
const popupImg = document.querySelector('.popup_image');
const popupImgName = document.querySelector('.popup__image-name');
const popupItem = popupImg.querySelector('.popup__image-item');

//слушатель на закрытие Edit
buttonCloseEdit.addEventListener('click', closePopupEdit);

function closePopup(popup) {
   popup.classList.remove('popup_opened');
   document.removeEventListener('keydown', closePopupEsc);
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
buttonCloseAdd.addEventListener('click', closePopupAdd);
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
buttonOpenAdd.addEventListener('click', openPopupAdd);
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
   const inputList = Array.from(addForm.querySelectorAll(configValidation.inputSelector));
   toggleButtonState(inputList, buttonAdd);
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






