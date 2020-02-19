import { stages } from "../constants/constants";
import moment from "moment";

export class ProjectLandingAdapter {
  constructor(data) {
    this.id = data.id;
    this.companyName = data.customer.companyName;
    this.date = moment(data.dateModified).format("DD/MM/YYYY");
    this.stage = stages[data.stage + 1];
  }
}
