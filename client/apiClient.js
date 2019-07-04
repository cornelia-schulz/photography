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

export function getAllFavourites() {
  return request
    .get('/api/v1/photos/favourites')
    .then(res => {
      return res.body
    })
    .catch(err => {
      console.error(err)
    })
}

export function getAllGalleries() {
  return request
    .get('/api/v1/galleries')
    .then(res => {
      return res.body
    })
    .catch(err => {
      console.error(err)
    })
}

export function getGalleryImages(gallery) {
  return request
    .get(`/api/v1/gallery/${gallery}`)
    .then(res => {
      return res.body
    })
    .catch(err => {
      console.error(err)
    })
}