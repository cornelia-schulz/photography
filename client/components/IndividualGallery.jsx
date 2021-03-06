import React, { useState, useEffect, useCallback } from 'react'
import lifecycle from 'react-pure-lifecycle'
import { getGalleryImages } from '../apiClient'
import useReactRouter from 'use-react-router'
import Carousel, { Modal, ModalGateway } from 'react-images'
import { useTranslation } from 'react-i18next'
import Gallery from 'react-photo-gallery'

let _isMounted = false

const methods = {
  componentWillUnmount() {
    _isMounted = false
  }
}

function IndividualGallery() {
  const { location } = useReactRouter()
  const [gallery, setGallery] = useState([])
  const [shopLink, setShopLink] = useState('')
  const path = location.pathname
  const splitPath = path.split('/')
  const [galleryName, setGalleryName] = useState(splitPath[splitPath.length - 1])
  const [currentImage, setCurrentImage] = useState(0)
  const [viewerIsOpen, setViewerIsOpen] = useState(false)
  const { i18n } = useTranslation()

  useEffect(() => {
    _isMounted = true
    getGalleryImages(galleryName, i18n.language)
      .then(gallery => {
        if (_isMounted) {
          setGallery(gallery.images)
          setShopLink(gallery.galleryDetails.shop_link)
          setGalleryName(gallery.galleryDetails.name)
        }
      })
  }, [galleryName, i18n.language])

  

  const openLightbox = useCallback((event, { index }) => {
    setCurrentImage(index)
    setViewerIsOpen(true)
  }, [])

  const closeLightbox = () => {
    setCurrentImage(0)
    setViewerIsOpen(false)
  }

  return (
  <div>
    <div className="individual-gallery container">
      <button className="goToShopBtn">
        <a
          rel="noreferrer"
          target="_blank"
          href={shopLink}
        >
          {galleryName} Shop
        </a>
      </button>
      <h1>{galleryName}</h1>
      <Gallery photos={gallery} onClick={openLightbox} />
      <button className="goToShopBtn">
        <a
          rel="noreferrer"
          target="_blank" 
          href={shopLink}
        >
          Buy {galleryName} images
        </a>
      </button>
    </div>
    <ModalGateway>
    {viewerIsOpen ? (
      <Modal onClose={closeLightbox}>
        <Carousel
          currentIndex={currentImage}
          views={gallery.map(x => ({
          ...x,
          srcset: x.srcSet,
          caption: x.title,
          showThumbnails: true
          }))}
        />
      </Modal>
    ) : null}
    </ModalGateway>
  </div>
  );
}

export default lifecycle(methods)(IndividualGallery)