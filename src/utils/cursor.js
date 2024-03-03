export default function initCursor() {
  let cursor = document.querySelector('.cursor')

  document.addEventListener('mousemove', e => {
    cursor.style.left = e.clientX + 'px'
    cursor.style.top = e.clientY + 'px'
  })

  document.addEventListener('mousedown', () => {
    cursor.classList.add('cursorclick')
  })

  document.addEventListener('mouseup', () => {
    cursor.classList.remove('cursorclick')
  })

  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(navigator.userAgent)) {
    cursor.style.display = 'none'
  }

  if (/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(navigator.userAgent)) {
    cursor.style.display = 'none'
  }
}
