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

export function getAllGalleries(locale) {
  return request
    .get(`/api/v1/galleries/lang/${locale}`)
    .then(res => {
      return res.body
    })
    .catch(err => {
      console.error(err)
    })
}

export function getGalleryImages(gallery, locale) {
  return request
    .get(`/api/v1/galleries/${gallery}/${locale}`)
    .then(res => {
      return res.body
    })
    .catch(err => {
      console.error(err)
    })
}