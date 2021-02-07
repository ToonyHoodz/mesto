
const enableValidation = ({
   formSelector: '.popup__container',
   inputSelector: '.popup__input',
   submitButtonSelector: '.popup__button',
   inactiveButtonClass: 'popup__button_inactive',
   inputErrorClass: 'popup__input_type_error',
   errorClass: 'popup__input-error_active'
});


const isValid = (formElement, inputElement) => {
   if (!inputElement.validity.valid) {
      showInputError(formElement, inputElement, inputElement.validationMessage);
   } else {
      hideInputError(formElement, inputElement);
   }
}


const hasInvalidInput = (inputList) =>{
   return inputList.some((inputElement) =>{  
      return !inputElement.validity.valid;
   })
};

function createErrorMsg(inputElement, errorMsg) {
  if (inputElement = 0 ) {

     if (inputElement.name === 'imgLink') {
        errorMsg = "Введите адрес сайта"
     } else {
        errorMsg = 'Вы пропустили это поле';
     }
  }
}

const showInputError = (formElement, inputElement, errorMsg) => {
   const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
   inputElement.classList.add(enableValidation.inputErrorClass);
   errorElement.classList.add(enableValidation.errorClass);
   createErrorMsg();
   errorElement.textContent = errorMsg;
}

const hideInputError = (formElement, inputElement) => {
   const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
   inputElement.classList.remove(enableValidation.inputErrorClass);
   errorElement.classList.remove(enableValidation.errorClass);
   errorElement.textContent = "";

}



const toggleButtonState = (inputList, buttonElement) =>{
   if (hasInvalidInput(inputList)){
      buttonElement.classList.add(enableValidation.inactiveButtonClass);
      buttonElement.setAttribute('disabled', 'disabled');
   } else {
      buttonElement.classList.remove(enableValidation.inactiveButtonClass);
      buttonElement.removeAttribute('disabled');
   }
};

const setEventListeners = (formElement) => {
   const inputList = Array.from(formElement.querySelectorAll(enableValidation.inputSelector));
   const buttonElement = formElement.querySelector(enableValidation.submitButtonSelector);
   toggleButtonState(inputList, buttonElement);
   inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
         isValid(formElement, inputElement);
         toggleButtonState(inputList, buttonElement);
      });   
   });   
};   

const activateValidation = () => {
   const formList = Array.from(document.querySelectorAll(enableValidation.formSelector));
   formList.forEach((formElement) => {
      formElement.addEventListener('submit', (evt) => {
         evt.preventDefault();
         console.log(evt);
      });   
      setEventListeners(formElement);
   });   
};   
activateValidation();

