import request from '../util/request.js'

export function findAllTagAPI(size = 10) {
  return request({
    method: 'GET',
    url: 'v1/public/tag/page',
    params: {
      size
    }
  })
}
