import Axios from 'axios'
import {Message} from 'element-ui'

const service = Axios.create({
  // baseURL: process.env.VUE_APP_BASE_API, // api 的 base_url
  withCredentials : true,
  baseURL: 'http://boss.f001.cn/index.php',
  timeout: 5000, // 请求超时时间

})
service.defaults.headers.common["Authorization"] = localStorage.getItem("token");
service.interceptors.request.use(config =>{
  // config.headers.token = '12345afkamklankn'

  return config
},error =>{
  return Promise.reject(error)
})

service.interceptors.response.use(response => {

  let data = response.data
  if (data.code === 0 || data.code === '0') {

      return data.data;
  }else if(data.code == 10001){
      console.log('登录过期')
      Message({
          message : data.message,
          duration : 1000,
          onClose : function(){
              // localStorage.clear();
              localStorage.loginToken = '';
              window.location.href = process.env.VUE_APP_LOGINHOST
          }
      })
  }else{

          console.log('请求出错')
          Message(data.message);
          // return Promise.resolve(null)//不能用resolve，否则还是会进去回调函数
          return Promise.reject(null);

  }
}, function (error) {
  // 都有接口报错了 不管之前有没有加1，直接减1，这样子能保证接口报错后loading消失；
  // store.commit('subLoading');

  console.log(error, JSON.stringify(error))
  Message('网络异常，请稍后再试');
  // return Promise.resolve(null)
  return Promise.reject(null);
})

service.get = (url, params) => {
  return Axios.get(url, {
    params:params,
    headers: {
      "X-Requested-With": "XMLHttpRequest",
       
    }
  })
}
service.post = (url, params,myconfig) => {
  return Axios(url, {
    method: 'post',
    data: params,
    headers: {
      "Content-Type": 'application/x-www-form-urlencoded',
      ...myconfig
    }
  })
}

export default service
