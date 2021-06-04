import {
    nameProfile,
    workProfile
    } from "./consts.js";
export default class UserInfo {
   constructor(  ) {
      this._work = document.querySelector('#work-input');
      this._name = document.querySelector('#name-input');
   }
   getUserInfo() {
      this._name.value = nameProfile.textContent;
      this._work.value = workProfile.textContent;
   }
}