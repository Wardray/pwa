import { HttpRepository } from "../../core/repository/http_repository";

export class AddContactsHttpRepository extends HttpRepository {
  getUsers = () => this.jsonRequest<{ [key: string]: string }>("/users", "GET");
  saveContact = (addsId: string) =>
    this.jsonRequest<[string]>("/user/add/contacts", "POST", {
      whoAdded: addsId,
      whoAdds: localStorage.getItem("authUserName"),
    });
  
}
