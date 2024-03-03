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
}
