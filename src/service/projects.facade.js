import GPApiService from "./api-service";
import { RFQ, RFQItem } from "../classess/projects";
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
    return this.GPAPI.createCustomer(data.customer)
      .then(res => {
        return this.GPAPI.createProject({
          ...data.title,
          customerId: res.data.id
        });
      })
      .then(res => {
        let rfq = this.processRfqData(res.data.id, data.items);
        return this.handleBothRFQ(rfq);
        // return this.GPAPI.createCustomerRFQ(rfq);
      });
  }

  createExistingProject(data) {
    return this.GPAPI.createProject({
      ...data.title,
      customerId: data.customerId
    }).then(res => {
      let rfq = this.processRfqData(res.data.id, data.items);
      return this.handleBothRFQ(rfq);
      // return this.GPAPI.createCustomerRFQ(rfq);
    });
  }

  processRfqData(data, items) {
    let rfq = new RFQ({ id: data });
    let rfqItem = [];
    items.map(d => {
      console.log(d, "items");
      rfqItem.push(new RFQItem(d));
    });
    rfq.setItems(rfqItem);

    return rfq;
  }

  handleBothRFQ(rfq) {
    return this.GPAPI.combineAnd([
      this.GPAPI.createCustomerRFQ(rfq)
      //this.GPAPI.createSupplierRFQ(rfq) comment - need to be created during button generation
    ]);
  }

  createSupplierRfq(data) {
    return this.GPAPI.createSupplierRFQ(data);
  }

  getProjectDetail(id)
  {
    console.log("from facade"+id);
    return this.GPAPI.get("/api/projects/"+id).then(res=> res.data);
  }

  getProjectDetail(id) {
    console.log("from facade" + id);
    return this.GPAPI.get("/api/projects/" + id).then(res => res.data);
  }

  getRfq(id) {
    return this.GPAPI.getRFQ(id).then(res => res.data);
  }

  getCurrentProject(id) {
    return this.GPAPI.getCurrentProject(id).then(res => res.data);
  }

  getProjectCustomerRFQ(projectId)
  {
    return this.GPAPI.get("/api/rfqs/customers/"+projectId).then(res=>res.data);
  }

  getProjectSupplierRFQ(projectId)
  {
    return this.GPAPI.get("/api/rfqs/suppliers/"+projectId).then(res=>res.data);
  }
  
  handleBothCustomerRFQQuo(id) {
    return this.GPAPI.combineAnd([
      this.GPAPI.getRFQ(id),
      this.GPAPI.getQuotation(id)
    ]);
  }

  createQuotation(data) {
    return this.GPAPI.createQuotation(data).then(res => res.data);
  }

  createSupplierQuotation(data) {
    return this.GPAPI.createSupplierQuotation(data).then(res => res.data);
  }

  updateQuotation(data) {
    return this.GPAPI.updateQuotation(data).then(res => res.data);
  }

  handleBothCSupplierRFQQuo(id) {
    return this.GPAPI.combineAnd([
      this.GPAPI.getSupplierRFQ(id),
      this.GPAPI.getSupplierQuotation(id)
    ]);
  }

  createCustomerPo(data) {
    return this.GPAPI.createCustomerPO(data).then(res => res.data);
  }

  createSupplierPo(data) {
    return this.GPAPI.createSupplierPO(data).then(res => res.data);
  }

  handleBothSupplierQuoPO(id) {
    return this.GPAPI.combineAnd([
      this.GPAPI.getSupplierQuotation(id),
      this.GPAPI.getSupplierPO(id)
    ]);
  }

  handleBothCustomerQuoPO(id) {
    return this.GPAPI.combineAnd([
      this.GPAPI.getQuotation(id),
      this.GPAPI.getCustomerPO(id)
    ]);
  }

  generateSupplierRFQ(id) {
    return this.GPAPI.get("/api/rfqs/supplier/generateRFQ/"+id).then(res => res.data);
  }

  getProjectSupplierQuotation(projectId) {
    return this.GPAPI.get("/api/quotations/project/supplier/" + projectId).then(res=>res.data);
  }

  getProjectCustomerQuotation(projectId) {
    return this.GPAPI.get("/api/quotations/project/customer/" + projectId).then(res=>res.data);
  }

  getDetailProQuo(quoId) {
    return this.GPAPI.get("/api/quotations/"+quoId).then(res=>res.data);
  }

  addSupplierDO(data) {
    return this.GPAPI.post('/api/deliveryorders/supplier', data).then(res=>res.data);
  }

  getLatestDO(id) {
    return this.GPAPI.get("/api/deliveryorders/project/supplier/"+id).then(res=>res.data);
  }
}
