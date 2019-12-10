import request from '../util/request.js'

export function loginAPI(data) {
  return request({
    method: 'POST',
    url: 'v1/public/user/login',
    data
  })
}

export function getProfileUserAPI() {
  return request({
    method: 'GET',
    url: 'v1/user/user/my-profile'
  })
}
