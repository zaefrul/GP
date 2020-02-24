import GPApiService from "./api-service";

export default class MetadataFacade {
  constructor() {
    this.initiateGP();
  }

  initiateGP() {
      this.GPAPI = new GPApiService();
  }

  metadataList() {
      return this.GPAPI.get("/api/metadatas").then(res=>res.data);
  }

  metadata(id) {
      return this.GPAPI.get("/api/metadatas/"+id).then(res=>res.data);
  }

  metadataPrices(id){
      return this.GPAPI.get("/api/prices/metadata/"+id).then(res=>res.data);
  }

  newMetadata(data) {
      return this.GPAPI.post("/api/metadatas", data).then(res=>res.status);
  }

  editMetadata(data) {
      return this.GPAPI.put("/api/metadatas/"+data.id).then(res=>res.status);
  }
}