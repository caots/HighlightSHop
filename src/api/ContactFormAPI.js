import request from '../util/request.js'

export function ResponseContactFormAPI(data) {
  return request({
    method: 'POST',
    url: 'v1/public/contact-form',
    data
  })
}
