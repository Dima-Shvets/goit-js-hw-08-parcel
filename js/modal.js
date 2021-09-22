import refs from '../references/refs.js'


export function onGalleryItemClick(e) {
    if (e.target.nodeName === 'LI' || e.target.nodeName === 'A' || e.target.nodeName === 'IMG') {
        e.preventDefault();
        window.addEventListener('keydown', onEscBtnPress);
        refs.lightBox.classList.add("is-open");
        refs.lightBoxImage.src = e.target.dataset.original;
        refs.lightBoxImage.alt = e.target.alt;
    }
}

export function onCloseModal() {
    window.removeEventListener('keydown', onEscBtnPress)
    refs.lightBox.classList.remove("is-open");
    refs.lightBoxImage.src = '';
}

export function onCloseBtnClick() {
    window.addEventListener('keydown', onEscBtnPress);
    onCloseModal();
}

export function onLightBoxOverlayClick(e) {
    if (e.currentTarget === e.target) {
        onCloseModal();
    }
}

export function onEscBtnPress(e) {
    if (e.code === 'Escape') {
        onCloseModal();
    }
} 



