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
    return this.get("users/" + id);
  }

  modifyUser(id, data) {
    return this.put("users/" + id, data);
  }

  createCustomer(data) {
    return this.post("api/customers", data);
  }

  getCustomer(data) {
    return this.get("/api/customers");
  }

  createProject(data) {
    return this.post("api/projects", data);
  }

  getAllCustomers() {
    return this.get("api/customers");
  }

  getAllSuppliers() {
    return this.get("api/suppliers");
  }

  createSupplier(data) {
    return this.post("api/suppliers", data);
  }

  createCustomerRFQ(data) {
    return this.post("api/rfqs/customer", data);
  }

  createSupplierRFQ(data) {
    return this.post("api/rfqs/supplier", data);
  }

  getRFQ(id) {
    return this.get(`api/rfqs/customers/${id}`);
  }

  getQuotation(id) {
    return this.get(`api/quotations/project/customer/${id}`);
  }

  getCurrentProject(id) {
    return this.get(`api/projects/${id}`);
  }

  createCustomerQuotation(data) {
    return this.post(`api/quotations/customer/`, data);
  }

  createQuotation(data) {
    return this.post(`api/quotations/customer`, data);
  }

  updateQuotation(data) {
    return this.put(`api/quotations/${data.id}`, data.data);
  }

  createSupplierQuotation(data) {
    return this.post(`api/quotations/supplier`, data);
  }

  updateSupplierQuotation(data) {
    return this.put(`api/quotations/${data.id}`, data.data);
  }

  getSupplierQuotation(id) {
    return this.get(`api/quotations/project/supplier/${id}`);
  }

  getSupplierRFQ(id) {
    return this.get(`api/rfqs/suppliers/${id}`);
  }

  createCustomerPO(data) {
    return this.post("api/purchaseorders/customer", data);
  }

  createSupplierPO(data) {
    return this.post("api/purchaseorders/supplier", data);
  }

  getCustomerPO(id) {
    return this.get(`api/purchaseorders/project/customer/${id}`);
  }

  getSupplierPO(id) {
    return this.get(`api/purchaseorders/project/supplier/${id}`);
  }
}
