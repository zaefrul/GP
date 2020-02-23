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
      this.GPAPI.createCustomerRFQ(rfq),
      this.GPAPI.createSupplierRFQ(rfq)
    ]);
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

  handleBothCustomerRFQQuo(id) {
    return this.GPAPI.combineAnd([
      this.GPAPI.getRFQ(id),
      this.GPAPI.getQuotation(id)
    ]);
  }

  createQuotation(data) {
    return this.GPAPI.createQuotation(data).then(res => res.data);
  }

  updateQuotation(data) {
    return this.GPAPI.updateQuotation(data).then(res => res.data);
  }
}
