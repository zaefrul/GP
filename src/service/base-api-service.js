import Http from "./httpservice";
import axios from "axios";

export default class BaseApiService {
  constructor() {}

  post(url, data, config) {
    return Http.post(url, data, config);
  }

  get(url, config = {}) {
    return Http.get(url, config);
  }

  put(url, data, config) {
    return Http.put(url, data, config);
  }

  combineAnd(operations) {
    return axios.all([...operations]);
  }
}
