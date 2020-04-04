import React, { useState, useEffect } from 'react'
import lifecycle from 'react-pure-lifecycle'
import { getGalleryImages } from '../apiClient'
import useReactRouter from 'use-react-router'
import Carousel, { Modal, ModalGateway } from 'react-images';
import Slider from './Slider'
import useModal from '../hooks/useModal'

let _isMounted = false

const methods = {
    componentWillUnmount() {
        _isMounted = false
    }
}

function Gallery() {
    const { history, location, match } = useReactRouter()
    const [gallery, setGallery] = useState([])
    const [currentImage, setCurrentImage] = useState(0)
    const {isShowing, openModal, closeModal} = useModal();
    const path = location.pathname
    const splitPath = path.split('/')
    const galleryName = splitPath[splitPath.length - 1]

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

    return (
        <div className="gallery container">
            <h1>{galleryName}</h1>
            <div className="gallery-container">
                {gallery.map(image => {
                    return <div key={image.id} className="gallery-image-holder">
                        <img
                            className="gallery-image"
                            src={image.link}
                            alt="image.title"
                            onClick={()=>{
                                setCurrentImage(image.id) 
                                console.log(currentImage)
                                openModal()
                            }}
                        />
                </div>
                })}
            </div>
            <ModalGateway>
                {isShowing ? (
                    <Modal onClose={closeModal}>
                        <Carousel
                            currentIndex={currentImage}
                            views={gallery.map(x => ({
                                ...x,
                                src: x.link,
                                caption: x.title
                              }))}
                        />
                    </Modal>
                ) : null}
            </ModalGateway>
        </div>
    )
}

export default lifecycle(methods)(Gallery)