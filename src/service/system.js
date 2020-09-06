import Server from './service'
export default {
  getUser(params,myconfig){
    return Server.post('/api/Api', params,myconfig)
  }
}