!function(){
    let specialTags = document.querySelectorAll('[data-x]')
    for (let i = 0; i < specialTags.length; i++) {
        specialTags[i].classList.add('offset')
    }
    setTimeout(function () {
        findClosestAndRemoveOffset()
    }, 200)
    window.addEventListener('scroll', function(){
        findClosestAndRemoveOffset()
    }) 

    /* helper */
    function findClosestAndRemoveOffset() {
        let specialTags = document.querySelectorAll('[data-x]')
        let minIndex = 0
        for (let i = 1; i < specialTags.length; i++) { //屏幕顶部到元素的距离近的那个元素，则高亮导航栏
            if (Math.abs(specialTags[i].offsetTop - window.scrollY) < Math.abs(specialTags[minIndex].offsetTop - window.scrollY)) {
                minIndex = i
            }
        }
        specialTags[minIndex].classList.remove('offset')
        let id = specialTags[minIndex].id
        let a = document.querySelector('a[href="#' + id + '"]') //('a[href=#'+ id +']')会出错，要"#siteAbout"才不出错
        let li = a.parentNode //<a>的父级
        let bortherAndMe = li.parentNode.children //li的父级的子元素，即<li>的兄弟元素包括<li>
        for (let i = 0; i < bortherAndMe.length; i++) {
            bortherAndMe[i].classList.remove('highlight')
        }
        li.classList.add('highlight')
    }
}.call()
