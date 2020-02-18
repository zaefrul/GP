import { logout } from "./auth-service";

export default class LogoutFacade {
  constructor() {}

  logout() {
    return logout();
  }
}
