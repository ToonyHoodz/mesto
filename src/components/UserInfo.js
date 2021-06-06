export default class UserInfo {
   constructor(nameSelector, subSelector) {
      this._profileName = nameSelector;
      this._profileSub = subSelector;
      this._work = document.querySelector('#work-input');
      this._name = document.querySelector('#name-input');
   }
   getUserInfo() {
      return {
         name: this._profileName.textContent,
         work: this._profileSub.textContent,
      }
   }
   setUserInfo(){
      this._name.value = this.getUserInfo().name;
      this._work.value = this.getUserInfo().work;
   }
}
