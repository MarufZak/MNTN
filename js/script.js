document.addEventListener('DOMContentLoaded',function () {  
    let swiper = new Swiper('.page',{
        wrapperClass: 'page__wrapper',
        slideClass: "page__slide",
        direction: 'vertical',
        mousewheel: {
            sensitivity: 1
        },
        speed: 1000,
        pagination: {
            el: ".page__pagination",
            type: 'bullets',
            bulletClass: "page__bullet",
            bulletActiveClass: "page__bullet-active",
            // renderBullet: function (index, className) {
            //     let i = 01;
            //     return `<span class="page__bullet">0${index}</span>`;
            //   },
            clickable: true        
        },
        parallax: true
        
    })

    var header = document.querySelector('.header');
    
    
    var width = window.innerWidth
    if (width > 842) {
        var scene = document.querySelector('.parallax__body');
        var parallaxInstance = new Parallax(scene);
       
            setInterval(() => {
                if (swiper.realIndex == 0) {
                    parallaxInstance.enable()
                    header.classList.remove('active')
                    
                } else {
                    parallaxInstance.disable()
                    header.classList.add('active')
                }
            }, 100);
            
        
    }

    
    const burger = document.querySelector('.header__burger');
    const burgerWrapper = document.querySelector('.burger-wrapper');
    
    burger.addEventListener('click',function () {  
        burger.classList.toggle('clicked')
        if (burger.classList.contains('clicked')) {
            burgerWrapper.style.top = 0
        } else {
            burgerWrapper.style.top = '-100%'
        }
    })
        console.log(swiper.realIndex);
        
})
