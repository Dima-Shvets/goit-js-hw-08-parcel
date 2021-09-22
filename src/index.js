import galleryItems from '../data/gallery.js'
import refs from '../references/refs.js'

import makeGalleryMarkup from '../js/galleryMarkup.js'

import { onGalleryItemClick, onCloseBtnClick, onLightBoxOverlayClick, onEscBtnPress } from '../js/modal.js'

import {onSliderForwardBtnClick, onSliderBackwardBtnClick} from '../js/slider.js'

// GALLERY MARCKUP

const galleryMarkup = makeGalleryMarkup(galleryItems);

refs.gallery.innerHTML = galleryMarkup;

// SLIDER

refs.sliderForwardBtn.addEventListener('click', onSliderForwardBtnClick);
refs.sliderBackwardBtn.addEventListener('click', onSliderBackwardBtnClick);

// MODAL

refs.gallery.addEventListener('click', onGalleryItemClick);
refs.closeBtn.addEventListener('click', onCloseBtnClick);
refs.lightBoxOverlay.addEventListener('click', onLightBoxOverlayClick);
window.addEventListener('keydown', onEscBtnPress);
