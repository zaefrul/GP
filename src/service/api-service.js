import BaseApiService from "./base-api-service";

export default class GPApiService extends BaseApiService {
  constructor() {
    super();
    const instance = this.constructor.instance;
    if (instance) {
      return instance;
    }

    this.constructor.instance = this;
  }

  registration() {
    return this.post("users/register", {
      firstName: "Test",
      lastName: "Test",
      username: "Test",
      password: "p@ssw0rd"
    });
  }

  login(data) {
    return this.post("users/authenticate", data);
  }
}
