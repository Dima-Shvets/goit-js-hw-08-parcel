import galleryItems from '../data/gallery.js'
import refs from '../references/refs.js'

// let currentPictureNumber = 0; 

export function onSliderForwardBtnClick() {
    const currentPictureNumber = findCurrentPictureNumber()
    if (currentPictureNumber === galleryItems.length - 1) {
        const nextPictureNumber = 0;
        updateLightboxImageSrc(nextPictureNumber);
        return
    }

    const nextPictureNumber = currentPictureNumber + 1;
    updateLightboxImageSrc(nextPictureNumber);
}

export function onSliderBackwardBtnClick() {
    const currentPictureNumber = findCurrentPictureNumber()
    if (currentPictureNumber === 0) {
        const nextPictureNumber = galleryItems.length - 1;
        updateLightboxImageSrc(nextPictureNumber)
        return
    }
    
    const nextPictureNumber = currentPictureNumber - 1;
    updateLightboxImageSrc(nextPictureNumber)
}

export function findCurrentPictureNumber() {
    let currentPictureIndex = 0;
    galleryItems.forEach((item, index) => {
        if (refs.lightBoxImage.src === item.original) {
            currentPictureIndex = index;
        }
    })
    return currentPictureIndex;
}

export function updateLightboxImageSrc(nextPictureNumber) {
    refs.lightBoxImage.src = galleryItems[nextPictureNumber].original;
}