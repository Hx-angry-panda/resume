!function(){
    var view = document.querySelector('#mySlides')
    var controller = {
        view: null,
        swiper: null,
        options: { loop: true, navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }},
        init: function(view){
            this.view = view
            this.initSwiper()
        },
        initSwiper: function(){
            this.swiper = new Swiper(
                this.view.querySelector('.swiper-container'), 
                this.options
            )
        }
    }
    controller.init.call(controller,view)
}.call()
