import { makeAutoObservable } from "mobx";

export class AuthStore {
  isAuth = false; 
  username = "";  

  constructor() {
    makeAutoObservable(this); 
  }

  login(username: string) {
    this.isAuth = true;
    this.username = username;
    localStorage.setItem("isAuth", "auth");
    localStorage.setItem("authUserName", username);
  }

  logout() {
    this.isAuth = false;
    this.username = "";
    localStorage.removeItem("isAuth");
    localStorage.removeItem("authUserName");
  }

  checkAuth() {
    const isAuth = localStorage.getItem("isAuth");
    const username = localStorage.getItem("authUserName");

    if (isAuth && username) {
      this.isAuth = true;
      this.username = username;
    }
  }
}

