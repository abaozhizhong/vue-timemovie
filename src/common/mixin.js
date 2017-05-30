/*
* @Author: wjj
* @Date:   2017-05-30 13:45:37
* @Last Modified by:   wjj
* @Last Modified time: 2017-05-30 16:13:30
*/

export const loadMore = {
    directives: {
        'load-more': {
            bind: (el, binding) => {
                let winheight = window.screen.height
                el.addEventListener('scroll', function () {
                    let elscrolltop = el.scrollTop
                    let elheight = el.scrollHeight
                    if (elscrolltop + winheight + 100 > elheight) {
                        binding.value()
                    }
                }, false)
            }
        }
    }
}