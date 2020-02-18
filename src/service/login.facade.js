import GPApiService from "./api-service";
import { login } from "./auth-service";

export default class LoginFacade {
  constructor() {
    this.initiateGP();
  }

  initiateGP() {
    this.GPAPI = new GPApiService();
  }

  handleLogin(data) {
    return this.GPAPI.login(data)
      .then(res => {
        login(res.data);
        return res.data;
      })
      .catch(err => console.log(err));
  }
}
