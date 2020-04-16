import React, { useState, useEffect, useCallback } from 'react'
import lifecycle from 'react-pure-lifecycle'
import { getGalleryImages } from '../apiClient'
import useReactRouter from 'use-react-router'
import Carousel, { Modal, ModalGateway } from 'react-images'
import Gallery from 'react-photo-gallery'
import dompurify from 'dompurify'

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
    _renderCustomControls
    const footer = document.getElementsByClassName('react-images__footer')
    if(footer) {
      // const sanitizer = dompurify.sanitize
      const title ='<h1>Hello</h1>'
      const cleanTitle = dompurify.sanitize(title)
      footer.innerHTML = cleanTitle
      // return <footer dangerouslySetInnerHTML={{__html: sanitizer(title)}} />
    }
    console.log(footer)
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0)
    setViewerIsOpen(false)
  };

  const _renderCustomControls = () => {
    console.log('here')
    return <a href='' className='image-gallery-custom-action' onClick={this._customAction.bind(this)}>Click me</a>
  }

  return (
    <div>
      <div className="container">
        <h1>{galleryName}</h1>
        <Gallery photos={gallery} onClick={openLightbox} />
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