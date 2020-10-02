var buttonCloseEdit = document.querySelector('.popup__close-bttn');
const buttonOpenEdit = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup')
const popupEdit = document.querySelector('.popup');
const nameInput = document.querySelector('.popup__input-name');
const workInput = document.querySelector('.popup__input-work');
const name = document.querySelector('.profile__info-name');
const work = document.querySelector('.profile__info-activity');




//функция открытия попапа и ввода данных
function popupOpen(popup) {
   popup.classList.add('popup_opened');
   nameInput.value = name.textContent;
   workInput.value = work.textContent;
}



//слушатель на открытие
buttonOpenEdit.addEventListener('click', function(){ 
   popupOpen(popupEdit)
});




//функция закрытия попапа
function popupClose(popup) {
   popup.classList.remove('popup_opened');
}

//слушатель на закрытие
buttonCloseEdit.addEventListener('click', function () {
   popupClose(popupEdit)
}); 

//функция замены данных из попапа
function editUserData(event) {
   event.preventDefault()
   name.textContent = nameInput.value;
   work.textContent = workInput.value;
   popupClose(popupEdit)
}


editForm.addEventListener('submit', editUserData);




