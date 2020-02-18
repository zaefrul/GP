import Http from "./httpservice";

export default class BaseApiService {
  constructor() {}

  post(url, data, config) {
    return Http.post(url, data, config);
  }

  get(url, config = {}) {
    return Http.get(url, config);
  }

  patch(url, data, config) {
    return Http.patch(url, data, config);
  }
}
