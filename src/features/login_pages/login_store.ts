import {
  LifeCycleStore,
  LifeCycleStoreFormState,
} from "../../core/helper/use_store";
import { LoginPagesHttpRepository } from "./login_pages_http_repository";
import { ContactListPagePath } from "../contact_list_page/contact_list_page_screen";
import { LoginPagesLocalStorageRepository } from "./login_pages_local_storage_repository";
import makeAutoObservable from "mobx-store-inheritance";
import { ValidationModel } from "../../core/helper/validation_model";
import { IsNotEmpty } from "class-validator";
import { json } from "stream/consumers";

export interface IUser {
  username: string;
  password: string;
}
export class UserViewModel extends ValidationModel {
  @IsNotEmpty()
  username = "";
  @IsNotEmpty()
  password = "";
}
export class LoginStore extends LifeCycleStoreFormState<UserViewModel> {
  viewModel: UserViewModel = new UserViewModel();
  loginPagesHttpRepository = new LoginPagesHttpRepository();
  loginPagesLocalStorageRepository = new LoginPagesLocalStorageRepository();
  leftIsActive = false;
  AuthInput = "";
  constructor() {
    super();
    makeAutoObservable(this);
  }

  dispose = () => {};
  login = async () =>
    (await this.loginPagesHttpRepository.login(this.viewModel)).map(() => {
      this.loginPagesLocalStorageRepository.create({ isAuth: true });
      this.navigate?.(ContactListPagePath);
    });
  register = async () =>
    (await this.viewModel.valid<UserViewModel>()).fold(
      async (m) => {
        console.log(JSON.stringify(m));
        await this.loginPagesHttpRepository.register(m);
      },
      async (e) => {
        console.log(e);
      }
    );
}
