import request from '../util/request.js'

export function getAllBigCategoryAPI() {
  return request({
    method: 'GET',
    url: `v1/public/big-category/page`
  })
}
export function getAllSmallCategoryAPI() {
  return request({
    method: 'GET',
    url: `v1/public/small-category/page`
  })
}
