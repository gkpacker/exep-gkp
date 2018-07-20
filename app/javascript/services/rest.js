import ApiService from './api'

export default class RestService extends ApiService {
  all(){
    this.connector.get(`${url}`)
  }

  one(id){
    this.connector.get(`${url}/${id}`)
  }

  create(data){
    this.connector.post(`${url}`, data)
  }

  update(id, data){
    this.connector.patch(`${url}/${id}`, data)
  }

  delete(id){
    this.connector.delete(`${url}/${id}`)
  }
}
