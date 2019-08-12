!function(){
    var view = document.querySelector('#topNavBar')
    var controller = {
        view: null,
        init: function(){
            this.view = view
            this.bindEvents()
        },
        bindEvents: function(){
            var view = this.view
            window.addEventListener('scroll',  ()=> {  /* 箭头函数没有this */
                if (scrollY > 0) {                     /* 如果用function(){} 的话 */
                    this.active()                      /* this.active() 或 this.deactive() 中的 this 是 bindEvents,会出错 */
                } else {                               /* 我们这里需要的是 this 是 controller，所以用箭头函数 */
                    this.deactive()
                }
            })
        },
        active: function(){
            this.view.classList.add('sticky')
        },
        deactive: function(){
            this.view.classList.remove('sticky')
        }
    }

    controller.init(view)
}.call()

