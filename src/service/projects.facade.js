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
        let rfq = new RFQ({ id: res.data.id });
        let rfqItem = [];
        data.items.map(d => {
          console.log(d, "items");
          rfqItem.push(new RFQItem(d));
        });
        rfq.setItems(rfqItem);
        return this.GPAPI.combineAnd([
          this.GPAPI.createCustomerRFQ(rfq),
          this.GPAPI.createSupplierRFQ(rfq)
        ]);
        // return this.GPAPI.createCustomerRFQ(rfq);
      });
  }
}
