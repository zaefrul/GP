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
}