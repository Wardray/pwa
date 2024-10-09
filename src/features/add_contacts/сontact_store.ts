import makeAutoObservable from "mobx-store-inheritance";
import { AddContactsHttpRepository } from "./add_contacts_http_repository";
import { LifeCycleStore } from "../../core/helper/use_store";

export class ContactStore extends LifeCycleStore {
  addContactsHttpRepository = new AddContactsHttpRepository();
  contacts: string[] = [];
  users: string[] = [];
  loading = true;
  constructor() {
    super();
    makeAutoObservable(this);
  }
  initDependency = async () => {
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
    this.initDependency();
  }
}
