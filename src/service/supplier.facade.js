import GPApiService from "./api-service";

export default class SuppliersFacade {
  constructor() {
    this.initiateGP();
  }

  initiateGP() {
    this.GPAPI = new GPApiService();
  }

  getAllSuppliers() {
    return this.GPAPI.getAllSuppliers().then(res => res.data);
  }

  createSupplier(data) {
    return this.GPAPI.createSupplier(data);
  }
}
