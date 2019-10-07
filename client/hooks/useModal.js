import { useState } from 'react'

const useModal = () => {
    const [isShowing, setIsShowing] = useState(false)

    function openModal(image) {
        console.log('useModal openModal')
        setIsShowing(true)
        console.log(isShowing)
    }

    function closeModal() {
        console.log(closeModal)
        setIsShowing(false)
    }

    return {
        isShowing,
        openModal,
        closeModal,
    }
}

export default useModal