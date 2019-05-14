import request from 'superagent'

export function getAllPhotos() {
  return request
    .get('/api/v1/photos')
    .then(res => {
      return res.body
    })
    .catch(err => {
      console.error(err)
    })
}