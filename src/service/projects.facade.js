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

  getDashboardProjects() {
    return this.GPAPI.getDashboardProjects().then(res => res.data);
  }

  createProject(data) {
    return this.GPAPI.createCustomer(data.customer).then(res => {
      return this.GPAPI.createProject({
        ...data.title,
        customerId: res.data.id
      });
    });
  }
}
