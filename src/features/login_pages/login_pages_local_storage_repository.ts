import { LocalStorageRepository } from "../../core/repository/local_storage_repository";

export class LoginPagesLocalStorageRepository extends LocalStorageRepository<{
  isAuth: boolean;
}> {
  keyStorage = "isAuth";
}
