import { LifeCycleStore } from "../../core/helper/use_store";
import { LoginPagesHttpRepository } from "./login_pages_http_repository";
import { ContactListPagePath } from "../contact_list_page/contact_list_page_screen";
import { LoginPagesLocalStorageRepository } from "./login_pages_local_storage_repository";
import makeAutoObservable from "mobx-store-inheritance";

export interface IUser {
  username: string;
  password: string;
}
export class LoginStore extends LifeCycleStore {
  loginPagesHttpRepository = new LoginPagesHttpRepository();
  loginPagesLocalStorageRepository = new LoginPagesLocalStorageRepository();
  leftIsActive = false;
  AuthInput = "";
  userModel: IUser = {
    username: "",
    password: "",
  };
   constructor() {
     super();
    makeAutoObservable(this);
  }
  
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
