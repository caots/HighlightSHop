import request from '../util/request.js'
export function getAllRecord() {
    return request({
      method: 'GET',
      url: 'v1/public/record/all'
    })
  }