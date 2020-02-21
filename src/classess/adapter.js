import { stages } from "../constants/constants";
import moment from "moment";

class ProjectBaseAdapter {
  constructor(data) {
    this.id = data.id;
    this.companyName = data.customer.companyName;
  }
}

export class ProjectLandingAdapter extends ProjectBaseAdapter {
  constructor(data) {
    super(data);
    this.date = moment(data.dateModified).format("DD/MM/YYYY");
    this.stage = stages[data.stage + 1];
  }
}

export class ProjectListAdapter extends ProjectBaseAdapter {
  constructor(data) {
    super(data);
    this.phone = data.customer.phone;
    this.email = data.customer.email;
  }
}
