const buttonCloseEdit = document.querySelector('.popup__close-bttn');
const buttonOpenEdit = document.querySelector('.profile__edit-button');
const popupEdit = document.querySelector('.popup');
const nameInput = document.querySelector('input[name = "forename"]');
const workInput = document.querySelector('input[name = "work"]');
const name = document.querySelector('.profile__info-name');
const work = document.querySelector('.profile__info-activity');
const editForm = document.forms.editForm;



const editText = document.querySelector('.profile'); 
const screenWidth = window.screen.width 


function editTextHtml() {
   editText.innerHTML = ""
   editText.innerHTML += '<img src="./images/image.jpg" alt="Портрет Жак-Ива Кусто" class="profile__avatar"><div class = "profile__info"><h2 class="profile__info-name">Жак - Ив Кусто</h2><button class="button profile__edit-button"><img class="profile__edit-button-img" src="./images/EditIcon(2).svg" alt="Иконка редактирования"></button></div><h3 class="profile__info-activity">Исследователь океана</h3><button class="button profile__add-bttn"><img class="profile__add-bttn-img" src="./images/VectorAddIcon(2).svg" alt="Иконка добавления"></button>';
}





if (window.innerWidth < 900) {
   editTextHtml();
   editText.classList.add('profile_new');
   editText.classList.remove('profile');
}





//слушатели


//функция открытия попапа
function popupOpen(modalWindow) {
   modalWindow.classList.add('popup_opened');
   nameInput.value = name.textContent;
   workInput.value = work.textContent;
}


//функция закрытия попапа
function popupClose(modalWindow) {
   modalWindow.classList.remove('popup_opened');
}

//функция замены данных из попапа
function editUserData(event) {
   event.preventDefault()
   name.textContent = nameInput.value;
   work.textContent = workInput.value;
   popupClose(popupEdit)
}
buttonCloseEdit.addEventListener('click', function(){
   popupClose(popupEdit)
});
buttonOpenEdit.addEventListener('click', function(){ 
   popupOpen(popupEdit)
});
editForm.addEventListener('submit', editUserData);





