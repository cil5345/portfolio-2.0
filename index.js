const img = document.querySelectorAll('img')


const observer  = new IntersectionObserver((e)=>  {
    e.forEach((e) => {
        if(e.isIntersecting) {
            console.log(e)
            e.target.classList.add('animate__bounce')
            e.target.nextElementSibling.childNodes[1].classList.add('animate__fadeInLeft')
            e.target.nextElementSibling.classList.add('animate__fadeInRight')

        }
    })
})

img.forEach((el) => {
    observer.observe(el)
})
