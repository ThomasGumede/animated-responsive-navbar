const menu = document.querySelector('.hamburger'),
  navLinks = document.querySelector('.nav-links'),
links = document.querySelectorAll('.nav-links li')

menu.addEventListener('click', () => {
  navLinks.classList.toggle('open')
  links.forEach(link => {
    link.classList.toggle('fade')
  })
})