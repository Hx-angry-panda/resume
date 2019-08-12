!function () {
    var view = document.querySelectorAll('nav.menu > ul > li')
    var controller = {
        view: null,
        init: function(view){
            this.view = view
            this.navMenu(view)
        },
        navMenu: function (view) {
            for (let i = 0; i < view.length; i++) {
                view[i].onmouseenter = function (x) {
                    x.currentTarget.classList.add('active')
                }
                view[i].onmouseleave = function (x) {
                    x.currentTarget.classList.remove('active')
                }
            }
        }
    }
    controller.init.call(controller,view)
}.call()
