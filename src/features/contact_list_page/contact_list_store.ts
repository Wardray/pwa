import makeAutoObservable from "mobx-store-inheritance";
import { LifeCycleStore } from "../../core/helper/use_store";
import { ContactListHttpRepository } from "./contact_list_http_repository";
export class ContactListStore extends LifeCycleStore {
  chats: string[] = [];
  contactListHttpRepository = new ContactListHttpRepository();
  constructor() {
    super();
    makeAutoObservable(this);
  }
  async initDependency() {
    await this.mapOk(this.contactListHttpRepository.getContacts(), "chats");
  }
}
