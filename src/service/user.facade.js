import GPApiService from "./api-service";

export default class UserFacade {
  constructor() {
    this.initiateGP();
  }

  initiateGP() {
      this.GPAPI = new GPApiService();
  }

  registerUser(data) {
    return this.GPAPI.registration(data);
  }

  allUsers() {
      return this.GPAPI.getAllUsers().then(res=>res.data);
  }

  user(id) {
    console.log(id);
    return this.GPAPI.getUser(id).then(res=>res.data);
  }

  modifyUser(id, data) {
    return this.GPAPI.modifyUser(id, data).then(res=>res.status);
  }
}