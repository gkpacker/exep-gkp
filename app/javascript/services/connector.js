export default class Connector {
  constructor() {
    this.data = {};
    this.apiUrl = '/api';
    this.apiVersion = '/v1';
    this.defaultHeaders = {
      'credentials': "same-origin",
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };
    this.successStatus = [200, 201, 204, 101, 304];
    this.hasError = false;
  }

  setData(data){
    this.data = data
  }

  verifyStatus(status){
    this.hasError = !this.successStatus.includes(status);
  }

  onSuccess(callback){
    if (callback) {
     this.handleSuccess = callback
    }
    return this
  }

  onFail(callback){
    if (callback) {
      this.handleError = callback
    }
    return this
  }

  buildParams(method){
    const params = {
      method: method,
      headers: this.defaultHeaders,
    }

    if(method == 'POST' || method == 'PATCH'){
      params['body']= JSON.stringify(this.data);
    }
    return params
  }

  buildUrl(url){
    return `${this.apiUrl}${this.apiVersion}${url}`
  }

  doRequest(params, url){
    fetch(url, params)
      .then(response => {
        this.verifyStatus(response.status)
        return response.json()
      })
      .then((data) => {
        if (this.hasError) {
          if (this.handleError) {
            this.handleError(data)
          }
        } else {
          if (this.handleSuccess) {
            this.handleSuccess(data)
          }
        }
        // console.log(data);
      });
      return this
  }

  get(path){
    const params = this.buildParams('GET')
    const url = this.buildUrl(path)
    return this.doRequest(params, url)
  }

  post(path, data){
    this.setData(data);
    const params = this.buildParams('POST')
    const url = this.buildUrl(path)
    return this.doRequest(params, url);
  }

  patch(path, data){
    this.setData(data);
    const params = this.buildParams('PATCH')
    const url = this.buildUrl(path)
    return this.doRequest(params, url);
  }

  delete(path){
    const params = this.buildParams('DELETE')
    const url = this.buildUrl(path)
    return this.doRequest(params, url);
  }
}
