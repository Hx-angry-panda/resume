!function(){
    var view = document.querySelectorAll('nav.menu > ul > li > a')
    var controller = {
        view: null,
        aTags: null,
        init: function(){
            this.view = view
            this.initAnimation()
            this.bindEvents()
        },
        initAnimation: function () {
            function animate(time) {
                requestAnimationFrame(animate);
                TWEEN.update(time);
            }
            requestAnimationFrame(animate);
        },
        bindEvents: function () {
            var view = this.view
            let aTags = document.querySelectorAll('nav.menu > ul > li > a')
            for (let i = 0; i < aTags.length; i++) {
                aTags[i].onclick = (x) => {     /* 箭头函数没有this */
                    x.preventDefault()
                    let a = x.currentTarget //<a>标签
                    let href = a.getAttribute('href') //#siteAbout
                    let element = document.querySelector(href) //id为siteAbout 的标签
                    this.scrollToElement(element)  /* 我们这里需要的是 this 是 controller，所以用箭头函数 */
                }
            }
        },
        scrollToElement: function (element) {
            let top = element.offsetTop //页面最顶部到id为siteAbout 的标签的高度
            let currentTop = window.scrollY //页面当前的高度
            let targetTop = top - 82 //元素距离页面顶部的高度
            let s = Math.abs(currentTop - targetTop)
            let t = 250 * s / 100 //滑动时间 250ms走100px，则s走的时间
            if (t > 500) {
                t = 500
            }

            var coords = {
                y: currentTop
            };
            var tween = new TWEEN.Tween(coords)
                .to({
                    y: targetTop
                }, t)
                .easing(TWEEN.Easing.Quadratic.InOut)
                .onUpdate(function () {
                    window.scrollTo(0, coords.y);
                })
                .start();
        }
    }
    controller.init(view)
}.call()


        
