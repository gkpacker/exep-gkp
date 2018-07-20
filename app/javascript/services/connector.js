export default class Connector {
  constructor() {
    this.data = {}
    this.apiUrl = '/api'
    this.apiVersion = '/v1'
  }

  setData(data){
    this.data = data
  }

  doRequest(method, url){
    fetch(`${apiUrl}${apiVersion}${url}`, { method })
      .then(response => response.json())
      .then((data) => {
        console.log(data);
      });
  }

  get(url){
    doRequest('GET', url)
  }

  post(url, data){
    setData(data);
    doRequest('POST', url);
  }

  patch(url, data){
    setData(data);
    doRequest('PATCH', url);
  }

  delete(url){
    doRequest('DELETE', url);
  }
}
