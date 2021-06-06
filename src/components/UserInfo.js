export default class UserInfo {
   constructor(nameSelector, subSelector) {
      this._profileName = document.querySelector(nameSelector);
      this._profileSub = document.querySelector(subSelector);
      this._work = document.querySelector('#work-input');
      this._name = document.querySelector('#name-input');
   }
   getUserInfo() {
      return {
         name: this._profileName.textContent,
         work: this._profileSub.textContent,
      }
   }
   setUserInfo(name, work) {
      this._profileName.textContent = name;
      this._profileSub.textContent = work;
   }
}
