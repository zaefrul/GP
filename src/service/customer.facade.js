import GPApiService from "./api-service";

export default class CustomersFacade {
  constructor() {
    this.initiateGP();
  }

  initiateGP() {
    this.GPAPI = new GPApiService();
  }

  getAllCustomers() {
    return this.GPAPI.getAllCustomers().then(res => res.data);
  }

  createCustomer(data) {
    return this.GPAPI.createCustomer(data);
  }
}
