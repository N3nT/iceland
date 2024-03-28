import './public/scss/style.scss'
const aboutLi = document.querySelectorAll('.about__wrap-list-item')
const aboutImg = document.querySelector('.about__wrap-img')
const galleryImages = ['./img/forest-6754057_1280.jpg', './img/mountains-100367_1280.jpg', '/img/hintersee-3601004_1280.jpg']
const galleryAsideLeft = document.querySelector('.gallery__wrap-asideleft')
const galleryAsideRight = document.querySelector('.gallery__wrap-asideright')
const galleryMid = document.querySelector('.gallery__wrap-mid')
const galleryRightArrow = document.querySelector('.gallery__wrap-right')
const galleryLeftArrow = document.querySelector('.gallery__wrap-left')
let galleryIndex = 0
let activeLi = aboutLi[0]

activeLi.classList.add('about-li--active')
aboutLi.forEach(e => {
    e.addEventListener('click', (e) => {
        if(!activeLi){
            e.target.classList.add('about-li--active')
            activeLi = e.target
        } else if(activeLi !== e.target){
            activeLi.classList.remove('about-li--active')
            e.target.classList.add('about-li--active')
            activeLi = e.target
        }
        setAboutImg(activeLi)
    })
});

const setAboutImg = (activeLi) => {
    if(activeLi === aboutLi[0]){
        aboutImg.src = '../img/mountains-3779403_640.jpg'
    } else if(activeLi === aboutLi[1]){
        aboutImg.src = '../img/animal-8510775_640.jpg'
    } else if(activeLi === aboutLi[2]){
        aboutImg.src = '../img/wolves-8372284_640.jpg'
    } else if(activeLi === aboutLi[3]){
        aboutImg.src = '../img/the-blue-lagoon-4980696_640.jpg'
    }
}

//gallery
const changeImg = () => {
    if(galleryIndex == 1){
        galleryAsideLeft.src = galleryImages[2]
        galleryMid.src = galleryImages[0]
        galleryAsideRight.src = galleryImages[1]
    } else if(galleryIndex == 2){
        galleryAsideLeft.src = galleryImages[1]
        galleryMid.src = galleryImages[2]
        galleryAsideRight.src = galleryImages[0]
    } else if(galleryIndex == 3){
        galleryAsideLeft.src = galleryImages[0]
        galleryMid.src = galleryImages[1]
        galleryAsideRight.src = galleryImages[2]
    }
}

const swipeToRight = () => {
    galleryIndex++
    if(galleryIndex > 3){
        galleryIndex = 1
    }
    changeImg()
}

const swipeToLeft = () => {
    galleryIndex--
    if(galleryIndex < 0){
        galleryIndex = 2
    } else if(galleryIndex == 0) {
        galleryIndex = 3
    }
    changeImg()
}

galleryRightArrow.addEventListener('click', swipeToRight)
galleryLeftArrow.addEventListener('click', swipeToLeft)