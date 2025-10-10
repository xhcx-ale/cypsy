$(document).ready(() => {
window.addEventListener("scroll", function () {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.style = 'background: rgba(0,0,0,.5); backdrop-filter: blur(3px);'
  } else {
   navbar.style = '--bs-bg-opacity: 0;'
  }
})

$('code').text(code)

$('.copyBtn').click(() => navigator.clipboard.writeText(code))

})