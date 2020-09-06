import Server from './service'
export default {
  login(params,myconfig){
    return Server.post('/api/Api', params,myconfig)
  }
}