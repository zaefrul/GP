import GPLoginFacade from "./login.facade";
import GetUserFacade from "./getuser.facade";
import LogoutFacade from "./logout.facade";
import ProjectsFacade from "./projects.facade";
import UserFacade from "./user.facade";

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

  static getAllProjects() {
    const ProjectsFcd = new ProjectsFacade();
    return ProjectsFcd.getAllProjects();
  }

  static getDashboardProjects() {
    const ProjectsFcd = new ProjectsFacade();
    return ProjectsFcd.getDashboardProjects();
  }

  static registerUser(data) {
    const UserFcd = new UserFacade();
    return UserFcd.registerUser(data);
  }

  static getAllUser() {
    const UserFcd = new UserFacade();
    return UserFcd.allUsers();
  }
}
