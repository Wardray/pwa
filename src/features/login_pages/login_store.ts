import { makeAutoObservable } from "mobx";
import { LifeCycleStore } from "../../core/helper/use_store";
import { NavigateFunction } from "react-router-dom";
import { LoginPagesHttpRepository } from "./login_pages_http_repository";
import { ContactListPagePath } from "../contact_list_page/contact_list_page_screen";
import { LoginPagesLocalStorageRepository } from "./login_pages_local_storage_repository";
export interface IUser {
  username: string;
  password: string;
}
export class LoginStore implements LifeCycleStore {
  loginPagesHttpRepository = new LoginPagesHttpRepository();
  loginPagesLocalStorageRepository = new LoginPagesLocalStorageRepository();
  leftIsActive = false;
  AuthInput = "";
  userModel: IUser = {
    username: "",
    password: "",
  };
  navigate?: NavigateFunction;
  constructor() {
    makeAutoObservable(this);
  }
  init = (navigate: NavigateFunction | undefined) => {
    this.navigate = navigate;
  };
  dispose = () => {};
  login = async () =>
    (await this.loginPagesHttpRepository.login(this.userModel)).fold(
      () => {
        this.loginPagesLocalStorageRepository.create({ isAuth: true });
        this.navigate?.(ContactListPagePath);
      },
      () => {
        console.log(201);
      }
    );
  register = async () =>
    (await this.loginPagesHttpRepository.register(this.userModel)).fold(
      () => {
        console.log(200);
      },
      () => {
        console.log(201);
      }
    );
}
