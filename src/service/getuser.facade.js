import { getLogin } from "./auth-service";

export default class GetUserFacade {
  constructor() {}

  getUser() {
    return getLogin();
  }
}
