export { closePopup, openPopup };
//универсальная функция для закрытия попапа
function closePopup(popup) {
   popup.classList.remove('popup_opened');
}
//универсальная функция для открытия попапа
function openPopup(popup) {
   popup.classList.add('popup_opened');
}


//функция закрытия попапа Edit
function closePopupEdit() {
   closePopup(popupEdit);
   document.removeEventListener('keydown', closePopupEsc);
   popupEdit.removeEventListener('click', closePopupOverlay);
};
//функция закрытия попапа Add
function closePopupAdd() {
   closePopup(popupAdd);
   document.removeEventListener('keydown', closePopupEsc);
   popupAdd.removeEventListener('click', closePopupOverlay);
}
//функция открытия попапа Edit и ввода данных
function openPopupEdit() {
   openPopup(popupEdit);
   nameInput.value = nameProfile.textContent;
   workInput.value = workProfile.textContent;
   document.addEventListener('keydown', closePopupEsc);
   popupEdit.addEventListener('click', closePopupOverlay);
};
//функция замены данных из попапа Edit
function editUserData(evt) {
   evt.preventDefault();
   nameProfile.textContent = nameInput.value;
   workProfile.textContent = workInput.value;
   closePopup(popupEdit);
};
//функция открытия попапа Add 
function openPopupAdd() {
   openPopup(popupAdd);
   document.addEventListener('keydown', closePopupEsc);
   popupAdd.addEventListener('click', closePopupOverlay);
};

//функция на закрытие по клику на оверлей
function closePopupOverlay(evt) {
   if (evt.target === evt.currentTarget) {
      closePopup(document.querySelector('.popup_opened'))
   }
}
//функция на закрытие попапов на ESC
function closePopupEsc(evt) {
   if (evt.key === "Escape") {
      closePopup(document.querySelector('.popup_opened'));
   }
}


//функция добавления обработчиков
function addEventListeners() {
   //слушатель на закрытие Edit
   buttonCloseEdit.addEventListener('click', closePopupEdit);
   //слушатель на закрытие попап Add
   buttonCloseAdd.addEventListener('click', closePopupAdd);
   //слушатель на открытие popup Edit
   buttonOpenEdit.addEventListener('click', openPopupEdit);
   //слушатель на замену данных
   editForm.addEventListener('submit', editUserData);
   //слушатель на открытие popup Add
   buttonOpenAdd.addEventListener('click', openPopupAdd);
}
addEventListeners();



