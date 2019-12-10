import request from '../util/request.js'

export function getAllProduct() {
  return request({
    method: 'GET',
    url: `v1/public/product/all`
  })
}

export function getAllProductByPage(page) {
  return request({
    method: 'GET',
    url: `v1/public/product/page?page=${page}&size=9`
  })
}

export function getAllSaleProductByPage(page) {
  return request({
    method: 'GET',
    url: `v1/public/product/find-by-sale?page=${page}&size=9`
  })
}

export function getAllHotProductByPage(page) {
  return request({
    method: 'GET',
    url: `v1/public/product/find-by-hot?page=${page}&size=9`
  })
}

export function getProductById(id) {
  return request({
    method: 'GET',
    url: `v1/public/product/find-by-id?id=${id}`
  })
}

export function getListProductBySmallCategory(idSmallCategory, page = 1) {
  return request({
    method: 'GET',
    url: `v1/public/product/by-small-category/page?id-small=${idSmallCategory}&page=${page}`
  })
}

export function getListProductByBigCategory(idBigCategory, page = 1) {
  return request({
    method: 'GET',
    url: `v1/public/product/by-big-category/page?id-big=${idBigCategory}&page=${page}`
  })
}

export function getListProductBySearch(text, page = 1, size = 9) {
  return request({
    method: 'GET',
    url: `v1/public/product/name/page?name=${text}&page=${page}&size=${size}`
  })
}

export function geSizeProducyBySmallCategory(idSmallCategory) {
  return request({
    method: 'GET',
    url: `v1/public/product/by-small-category/size?id-small=${idSmallCategory}`
  })
}

export function geSizeProducyByBigCategory(idBigCategory) {
  return request({
    method: 'GET',
    url: `v1/public/product/by-big-category/size?id-big=${idBigCategory}`
  })
}
export function geSizeProducyBySearch(size=9) {
  return request({
    method: 'GET',
     url: `v1/public/product/name/size?size=${size}`
  })
}

export function getAllProductByTag(){
  //do something
}
