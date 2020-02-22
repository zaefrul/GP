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
  }
}
