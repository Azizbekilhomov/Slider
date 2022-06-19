const slides = document.querySelectorAll('.slider__slide');
const btn = document.querySelectorAll('[data-target]');
const slider = document.querySelector('.slider');
let activeSlide = 0

slides.forEach((slide, i) => {
    if (slide.classList.contains('active')) {
        activeSlide = i
    }
})

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', (e) => {
        sliderMove(e.target.getAttribute('data-target'))
    })


}

function sliderMove(btn) {
    if (btn == "next") {
        if (activeSlide < slides.length -1) {
            activeSlide++
        } else {
            activeSlide = 0
        }
    }else{
        if (activeSlide > 0 ) {
            activeSlide--

        }else{
            activeSlide=slides.length -1
        }
    }
    slides.forEach(item=> item.classList.remove('active'))
    slides[activeSlide].classList.add('active')
}
console.log(slides.length);