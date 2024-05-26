import './public/scss/style.scss'
const aboutLi = document.querySelectorAll('.about__wrap-list-item')
const aboutImg = document.querySelector('.about__wrap-img')
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
