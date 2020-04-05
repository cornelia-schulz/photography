import React, { useState, useEffect, useCallback } from 'react'
import lifecycle from 'react-pure-lifecycle'
import { getGalleryImages } from '../apiClient'
import useReactRouter from 'use-react-router'
import Carousel, { Modal, ModalGateway } from 'react-images'
import Gallery from 'react-photo-gallery'

let _isMounted = false

const methods = {
    componentWillUnmount() {
        _isMounted = false
    }
}

function IndividualGallery() {
    const { history, location, match } = useReactRouter()
    const [gallery, setGallery] = useState([])
    const path = location.pathname
    const splitPath = path.split('/')
    const galleryName = splitPath[splitPath.length - 1]
    const [currentImage, setCurrentImage] = useState(0)
    const [viewerIsOpen, setViewerIsOpen] = useState(false)

    useEffect(() => {
        _isMounted = true
        getGalleryImages(galleryName)
            .then(images => {
                if (_isMounted) {
                    console.log(images)
                    setGallery(images)
                }
            })
    }, [])

    

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index)
    setViewerIsOpen(true)
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0)
    setViewerIsOpen(false)
  };

  return (
    <div>
      <div className="container">
        <h1>{galleryName}</h1>
      </div>
      <Gallery photos={gallery} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={gallery.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  );
}

export default lifecycle(methods)(IndividualGallery)