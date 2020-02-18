import GPLoginFacade from "./login.facade";
import GetUserFacade from "./getuser.facade";
import LogoutFacade from "./logout.facade";

export default class GPOpsFactory {
  static handleLogin(data) {
    const loginFacade = new GPLoginFacade();
    return loginFacade.handleLogin(data);
  }

  static getUserDetails() {
    const userFacade = new GetUserFacade();
    return userFacade.getUser();
  }

  static customerLogout() {
    const logoutFacade = new LogoutFacade();
    return logoutFacade.logout();
  }
}
