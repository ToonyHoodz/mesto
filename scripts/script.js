<<<<<<< HEAD
const buttonCloseEdit = document.querySelector('.popup__close-icon');
||||||| 4d01e61
const buttonCloseEdit = document.querySelector('.popup__close-bttn');
=======
const buttonClose = document.querySelector('.popup__close-icon');
const buttonCloseImg = document.querySelector('.popup__close-icon-img');
>>>>>>> develop
const buttonOpenEdit = document.querySelector('.profile__edit-button');
const popupEdit = document.querySelector('.popup__edit');
const nameInput = document.querySelector('.popup__input_name');
const workInput = document.querySelector('.popup__input_work');
const nameProfile = document.querySelector('.profile__info-name');
const workProfile = document.querySelector('.profile__info-activity');
const editForm = document.querySelector('.popup__container_edit');
const addForm = document.querySelector('.popup__container_add');
const popupAdd = document.querySelector('.popup__add');
const buttonAdd = document.querySelector('.popup__button_add');
const buttonOpenAdd = document.querySelector('.profile__add-bttn');
const cardTemplate = document.querySelector('#card-template').content.querySelector('.card');
const cardName = document.querySelector('.popup__input_cardName');
const imgLink = document.querySelector('.popup__input_imgLink');
const cards = document.querySelector('.cards');
const likeButton = document.querySelector('.card__like-icon');
const popupImg = document.querySelector('.popup__image');
const popupImgName = document.querySelector('.popup__image-name');
const initialCards = [
   {
      name: 'Архыз',
   link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
},
{
   name: 'Челябинская область',
   link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
},
{
   name: 'Иваново',
   link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
},
{
   name: 'Сахалин',
   link: 'https://images.unsplash.com/photo-1579472140844-a42628a9dec6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80'
},
{
   name: 'Холмогорский район',
   link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
},
{
   name: 'Санкт-Петербург',
   link: 'https://images.unsplash.com/photo-1556610961-2fecc5927173?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1520&q=80'
}
];

<<<<<<< HEAD
//функция закрытия попапа
function popupClose() {
   popup.classList.remove('popup_opened');
||||||| 4d01e61

//слушатель на закрытие

buttonCloseEdit.addEventListener('click', () => {
   popupClose(popup);
});


//функция закрытия попапа
function popupClose(event) {
   event.classList.toggle('popup_opened');
=======

//слушатель на закрытие

buttonClose.addEventListener('click', () => {
   ClosePopupEdit(popupEdit);
});


//функция закрытия попапа Edit
function closePopupEdit() {
   popupEdit.classList.remove('popup_opened');
};

//функция закрытия попапа Add
function closePopupAdd() {
   popupAdd.classList.remove('popup_opened');
>>>>>>> develop
}
//слушатель на закрытие попап Add
buttonClose.addEventListener('click', closePopupAdd);

<<<<<<< HEAD
//функция открытия попапа и ввода данных
function popupOpen() {
   popup.classList.add('popup_opened');
   nameInput.value = name.textContent;
   workInput.value = work.textContent;
}
||||||| 4d01e61
//слушатель на открытие
buttonOpenEdit.addEventListener('click', () => {
   popupOpen(popup);
});

//функция открытия попапа и ввода данных
function popupOpen(event) {
   event.classList.toggle('popup_opened');
   nameInput.value = name.textContent;
   workInput.value = work.textContent;
}
=======
//слушатель на открытие popup Edit
buttonOpenEdit.addEventListener('click', () => {
   openPopupEdit(popupEdit);
});

//функция открытия попапа Edit и ввода данных
function openPopupEdit() {
   popupEdit.classList.add('popup_opened');
   nameInput.value = nameProfile.textContent;
   workInput.value = workProfile.textContent;
};
>>>>>>> develop

//функция замены данных из попапа
function editUserData(evt) {
   evt.preventDefault();
   nameProfile.textContent = nameInput.value;
   workProfile.textContent = workInput.value;
   closePopupEdit(popupEdit);
};

//слушатель на замену данных
editForm.addEventListener('submit', editUserData);


//функция открытия попапа Add и ввода данных
function openPopupAdd() {
   popupAdd.classList.add('popup_opened');
};

//слушатель на открытие popup Add
buttonOpenAdd.addEventListener('click', () => {
   openPopupAdd(popupAdd);
});


//функции добавления карточек при загрузке страницы


function createCard(el) {
   const newCard = cardTemplate.cloneNode(true);
   newCard.querySelector('.card__name').textContent = el.name;
   newCard.querySelector('.card__image').src = el.link;
   cards.append(newCard);

   newCard.addEventListener('click', openImage);
   newCard.addEventListener('click', deleteCard);
   newCard.addEventListener('click', likeOn);
   return newCard;
}

<<<<<<< HEAD
//слушатель на замену данных
editForm.addEventListener('submit', editUserData);
||||||| 4d01e61

editForm.addEventListener('submit', editUserData);
=======
function createCards() {
   for (let i = 0; i < initialCards.length; i++) {
      createCard(initialCards[i]); 

   }
}
>>>>>>> develop

//первичная загрузка карточек
createCards();

<<<<<<< HEAD
//слушатель на закрытие

buttonCloseEdit.addEventListener('click', popupClose);
||||||| 4d01e61
=======
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
   closePopupAdd(popupAdd);
   addForm.reset();
}

buttonAdd.addEventListener('click', addCard);


//функции удаления карточки
function deleteCard(event) {
   event.preventDefault();
   const item = event.currentTarget;
   if (event.target.classList.contains('card__delete-icon')){
      item.removeEventListener('click', deleteCard);
      item.removeEventListener('click', likeOn);
      item.removeEventListener('click', openImage);
      item.remove();
   }
}

//функция открытия картинки
function openImage(event) {
   if (event.target.classList.contains('card__image')) {
      popupImg.classList.add('popup_opened');
      const popupItem = popupImg.querySelector('.popup__image-item');
      popupItem.src = event.target.src;
      popupImgName.textContent = event.target.parentNode.nextSibling.nextSibling.firstChild.nextSibling.textContent
   }
}



function closePopupImage() {
   popupImg.classList.remove('popup_opened');
}


//слушатель на закрытие
buttonCloseImg.addEventListener('click', closePopupImage);
>>>>>>> develop

//слушатель на открытие
buttonOpenEdit.addEventListener('click', popupOpen );

