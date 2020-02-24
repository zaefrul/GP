export class RFQ {
  constructor(data) {
    this.items = [];
    this.projectId = data.id;
    this.remarks = "";
  }

  setItems(items) {
    this.items = [...items];
  }
}

export class RFQItem {
  constructor(data) {
    this.partName = data.partName;
    this.partNumber = data.partNumber;
    this.partPosition = data.partPosition;
    this.serialNumber = data.serialNumber;
    this.drawingNumber = data.drawingNumber;
    this.tagNumber = data.tagNumber;
    this.modelNumber = data.modelNumber;
    this.remarks = data.remarks;
    this.revision = data.revision;
    this.unitOfMeasurement = data.unitOfMeasurement;
    this.quantity = data.quantity;
  }
}
export class QuotationItem extends RFQItem {
  constructor(data) {
    super(data);
    this.currency = data.currency;
    this.amount = (Number(data.amount).toFixed(2) * 100) / 100;
    this.revision = "";
    this.unitOfMeasurement = "";
  }
}
