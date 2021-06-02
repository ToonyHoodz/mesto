export { closePopup, openPopup, openImage, closePopupOverlay};
//универсальная функция для закрытия попапа
function closePopup(popup) {
   popup.classList.remove('popup_opened');
   document.removeEventListener('keydown', closePopupEsc);
}
//универсальная функция для открытия попапа
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
//функция открытия попапа Add 
function openPopupAdd() {
   openPopup(popupAdd); 
};

//функция на закрытие по клику на оверлей
function closePopupOverlay(event) {
   if (event.target === event.currentTarget) {
      closePopup(document.querySelector('.popup_opened'))
   }
}
//функция на закрытие попапов на ESC
function closePopupEsc(evt) {
   if (evt.key === "Escape") {
      closePopup(document.querySelector('.popup_opened'));
   }
}

function openImage(name, link) {
   popupItem.src = link;
   popupItem.alt = name;
   popupImgName.textContent = name;
   openPopup(popupImg);
}

function closePopupImage() {
   closePopup(popupImg);
   document.removeEventListener('keydown', closePopupEsc)
};


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
   buttonCloseImg.addEventListener('click', closePopupImage);

}
addEventListeners();



