import Connector from './connector'

export default class ApiService{
  constructor(){
    this.connector = new Connector()
  }
}
