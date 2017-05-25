(function (doc, win) {
  let docele = doc.documentElement
  let resizeevent = 'orientationchange' in win ? 'orientationchange' : 'resize'
  let resizefunc = function () {
    let clientwidth = docele.clientWidth
    if (!clientwidth) return
    docele.style.fontSize = clientwidth / 7.5 + 'px'
  }
  if (!doc.addEventListener) return
  win.addEventListener(resizeevent, resizefunc, false)
  doc.addEventListener('DOMContentLoaded', resizefunc, false)
})(document, window)
