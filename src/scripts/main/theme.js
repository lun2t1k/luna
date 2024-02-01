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