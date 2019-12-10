import axios from 'axios'
import {
  getToken
} from '../util/auth.js'
import store from '../store/store.js'
const tokenHeader_value = "1df0e68d684175afa5ae2c3d1543fa0e";

const request = axios.create({
  baseURL: 'https://admin.thatfruit.vn/api/'
})
//Request interceptor yêu cầu nhận cấu hình yêu cầu và một error callback
request.interceptors.request.use(
  config => {
    // Do something before request is sent
    config.headers['Access-Control-Allow-Origin'] = true
    config.headers['adminbksoftwarevn'] = tokenHeader_value
    if (store.getters.token) {
      config.headers['Authorization'] = getToken()
    }
    return config
  }
);

request.interceptors.response.use(response => {
  response = response.data
  return response
});
export default request
