import GPApiService from "./api-service";

export default class ProjectsFacade {
  constructor() {
    this.initiateGP();
  }

  initiateGP() {
    this.GPAPI = new GPApiService();
  }

  getAllProjects() {
    return this.GPAPI.getAllProjects().then(res => res.data);
  }
}
