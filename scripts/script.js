const buttonClose = document.querySelector('.popup__close-icon');
const buttonCloseImg = document.querySelector('.popup__close-icon-img');
const buttonOpenEdit = document.querySelector('.profile__edit-button');
const popupEdit = document.querySelector('.popup__edit');
const nameInput = document.querySelector('.popup__input_name');
const workInput = document.querySelector('.popup__input_work');
const nameProfile = document.querySelector('.profile__info-name');
const workProfile = document.querySelector('.profile__info-activity');
const editForm = document.querySelector('.popup__container_edit');
const addForm = document.querySelector('.popup__container_add');
const popupAdd = document.querySelector('.popup__add');
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


//слушатель на закрытие

buttonClose.addEventListener('click', () => {
   popupCloseEdit(popupEdit);
});


//функция закрытия попапа Edit
function popupCloseEdit() {
   popupEdit.classList.remove('popup_opened');
};

//функция закрытия попапа Add
function popupCloseAdd() {
   popupAdd.classList.remove('popup_opened');
}
//слушатель на закрытие попап Add
buttonClose.addEventListener('click', popupCloseAdd);

//слушатель на открытие popup Edit
buttonOpenEdit.addEventListener('click', () => {
   popupOpenEdit(popupEdit);
});

//функция открытия попапа Edit и ввода данных
function popupOpenEdit() {
   popupEdit.classList.add('popup_opened');
   nameInput.value = nameProfile.textContent;
   workInput.value = workProfile.textContent;
};


//функция замены данных из попапа
function editUserData(evt) {
   evt.preventDefault();
   nameProfile.textContent = nameInput.value;
   workProfile.textContent = workInput.value;
   popupCloseEdit(popupEdit);
};

//слушатель на замену данных
editForm.addEventListener('submit', editUserData);


//функция открытия попапа Add и ввода данных
function popupOpenAdd() {
   popupAdd.classList.add('popup_opened');
};

//слушатель на открытие popup Add
buttonOpenAdd.addEventListener('click', () => {
   popupOpenAdd(popupAdd);
});


//функции добавления карточек при загрузке страницы


function createCard(el) {
   const newCard = cardTemplate.cloneNode(true);
   newCard.querySelector('.card__name').textContent = el.name;
   newCard.querySelector('.card__image').src = el.link;
   cards.append(newCard);

   newCard.addEventListener('click', openImage);
   newCard.addEventListener('click', deleteCard);
   newCard.addEventListener('click', like);
   return newCard;
}

function createCards() {
   for (let i = 0; i < initialCards.length; i++) {
      createCard(initialCards[i]); 

   }
}

//первичная загрузка карточек
createCards();

//лайк 
function like(event) {
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
   popupCloseAdd(popupAdd);
   addForm.reset();
}


//функции удаления карточки
function deleteCard(event) {
   event.preventDefault();
   const item = event.currentTarget;
   if (event.target.classList.contains('card__delete-icon')){
      item.removeEventListener('click', deleteCard);
      item.removeEventListener('click', like);
      item.removeEventListener('click', openImage);
      item.remove();
   }
}

//функция открытия картинки
function openImage(event) {
   if (event.target.classList.contains('card__image')) {
      popupImg.classList.add('popup_opened');
      popupImg.src = event.target.src;
      popupImgName.textContent = event.nextSibling;
      console.log(popupImg.src)
   }
}

function closePopupImage() {
   popupImg.classList.remove('popup_opened');
}

buttonCloseImg.addEventListener('click', closePopupImage);
