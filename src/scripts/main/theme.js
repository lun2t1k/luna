const darkThemeBtn = document.getElementById('darkThemeBtn')
const lightThemeBtn = document.getElementById('lightThemeBtn')
const colorThemeBtn = document.getElementById('colorThemeBtn')
const themeElements = document.querySelectorAll('.theme')

function changeTheme(event) {
  event.preventDefault()

  const btn = event.target
  
  darkThemeBtn.classList.remove('active')
  lightThemeBtn.classList.remove('active')
  colorThemeBtn.classList.remove('active')
  
  btn.classList.add('active')

  themeElements.forEach(i => {
    i.classList.remove('dark')
    i.classList.remove('light')
    i.classList.remove('color')
    i.classList.add(btn.id.replace('ThemeBtn', ''))
  })

  switch (btn.id.replace('ThemeBtn', '')) {
    case 'dark':
      document.querySelector('meta[name="theme-color"]').setAttribute('content',  '#000000');
      break
    case 'light':
      document.querySelector('meta[name="theme-color"]').setAttribute('content',  '#ffffff');
      break
    case 'color':
      document.querySelector('meta[name="theme-color"]').setAttribute('content',  '#6A6A6A');
      break
    default:
      break
  }
  localStorage.setItem('theme', btn.id.replace('ThemeBtn', ''))
}

darkThemeBtn.addEventListener('click', changeTheme)
lightThemeBtn.addEventListener('click', changeTheme)
colorThemeBtn.addEventListener('click', changeTheme)

window.addEventListener('DOMContentLoaded', function () {
  let theme = localStorage.getItem('theme')
  
  if (theme) {
    const btn = document.querySelector(`#${theme}ThemeBtn`)
  
    if (btn) {
      btn.click()
    }
  }
})