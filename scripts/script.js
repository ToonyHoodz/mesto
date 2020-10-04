const buttonCloseEdit = document.querySelector('.popup__close-icon');
const buttonOpenEdit = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const nameInput = document.querySelector('.popup__input_name');
const workInput = document.querySelector('.popup__input_work');
const name = document.querySelector('.profile__info-name');
const work = document.querySelector('.profile__info-activity');


//слушатель на закрытие

buttonCloseEdit.addEventListener('click', popupClose);


//функция закрытия попапа

function popupClose() {
   popup.classList.remove('popup_opened');
}

//слушатель на открытие
buttonOpenEdit.addEventListener('click', popupOpen );

//функция открытия попапа и ввода данных
function popupOpen() {
   popup.classList.add('popup_opened');
   nameInput.value = name.textContent;
   workInput.value = work.textContent;
}


//функция замены данных из попапа
function editUserData(event) {
   event.preventDefault()
   name.textContent = nameInput.value;
   work.textContent = workInput.value;
   popupClose(popup)
}


editForm.addEventListener('submit', editUserData);




