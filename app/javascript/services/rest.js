import ApiService from './api'

export default class RestService extends ApiService {
  all(success, fail){
    this.connector.get(`${this.url}`)
    .onSuccess(success).onFail(fail);
  }

  one(id, success, fail){
    this.connector.get(`${this.url}/${id}`)
    .onSuccess(success).onFail(fail);
  }

  create(data, success, fail){
    this.connector.post(`${this.url}`, data)
    .onSuccess(success).onFail(fail);
  }

  update(id, data, success, fail){
    this.connector.patch(`${this.url}/${id}`, data)
    .onSuccess(success).onFail(fail);
  }

  delete(id, success, fail){
    this.connector.delete(`${this.url}/${id}`)
    .onSuccess(success).onFail(fail);
  }
}
