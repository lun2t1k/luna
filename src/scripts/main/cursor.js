let cursor = document.querySelector('.cursor')
let a = document.querySelectorAll('a')

document.addEventListener('mousemove', e => {
  let x = e.clientX
  let y = e.clientY
  cursor.style.left = x + 'px'
  cursor.style.top = y + 'px'
})

document.addEventListener('mousedown', () => {
  cursor.classList.add('cursorclick')
})

document.addEventListener('mouseup', () => {
  cursor.classList.remove('cursorclick')
})

a.forEach(item => {
  item.addEventListener('mouseover', () => {
    cursor.style.display = 'none'
  })

  item.addEventListener('mouseleave', () => {
    cursor.style.display = ''
  })
})