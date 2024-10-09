import { makeAutoObservable } from "mobx";
import { AddContactsHttpRepository } from "./add_contacts_http_repository";
import { LifeCycleStore } from "../../core/helper/use_store";
import { NavigateFunction } from "react-router-dom";

export class ContactStore implements LifeCycleStore {
  addContactsHttpRepository = new AddContactsHttpRepository();
  contacts: string[] = [];
  users: string[] = [];
  loading = true;
  navigate?: NavigateFunction;
  constructor() {
    makeAutoObservable(this);
  }

  init = async (navigate: NavigateFunction | undefined) => {
    this.navigate = navigate;
    (await this.addContactsHttpRepository.getContacts()).map((el) => {
      this.contacts = el;
    });
    (await this.addContactsHttpRepository.getUsers()).map((el) => {
      this.users = Object.keys(el);
    });
    this.loading = false;
  };
  async addContact(el: string) {
    await this.addContactsHttpRepository.saveContact(el);
    this.init(this.navigate);
  }
}
