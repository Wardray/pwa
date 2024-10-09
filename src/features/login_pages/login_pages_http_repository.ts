import { HttpRepository } from "../../core/repository/http_repository";
import { IUser } from "./login_store";

export class LoginPagesHttpRepository extends HttpRepository {
  login = (user: IUser) => this.jsonRequest("/login", "POST", user);
  register = (user: IUser) => this.jsonRequest("/register", "POST", user);
}
