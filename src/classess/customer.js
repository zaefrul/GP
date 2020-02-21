export class Customer {
  constructor(data) {
    this.companyName = data.companyName;
    this.address = data.address;
    this.postcode = data.postcode;
    this.state = data.state;
    this.country = data.country;
    this.phone = data.phone;
    this.email = data.email;
    this.license = data.license;
    this.type = 0;
  }
}
