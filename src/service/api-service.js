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

  registration(data) {
    return this.post("users/register", data);
  }

  login(data) {
    return this.post("users/authenticate", data);
  }

  getAllProjects() {
    return this.get("api/projects");
  }

  getDashboardProjects() {
    return this.get("api/projects/dashboard");
  }

  getAllUsers() {
    return this.get("users");
  }

  getUser(id) {
    return this.get("users/"+id);
  }
}
