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

  deleteCustomer(id) {
    return this.GPAPI.deleteCustomer(id).then(res => res.data);
  }

  getCustomer(id) {
    return this.GPAPI.getCustomer(id).then(res => res.data);
  }

  updateCustomer(data) {
    return this.GPAPI.updateCustomer(data).then(res => res.data);
  }
}
