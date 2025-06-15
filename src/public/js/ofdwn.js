let mainAct = () => {
  const webMenuHTML = document.createElement('div')
const webMenuCSS = document.createElement('style')
//const webMenuJS = document.createElement('script')
webMenuHTML.setAttribute('class', 'fab-container')
webMenuHTML.setAttribute('id', 'draggableFab')

const webMenuHTMLinner = `
    <button class="fabBtn"><b><svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.163 2.819C9 3.139 9 3.559 9 4.4V11H7.803c-.883 0-1.325 0-1.534.176a.75.75 0 0 0-.266.62c.017.274.322.593.931 1.232l4.198 4.401c.302.318.453.476.63.535a.749.749 0 0 0 .476 0c.177-.059.328-.217.63-.535l4.198-4.4c.61-.64.914-.96.93-1.233a.75.75 0 0 0-.265-.62C17.522 11 17.081 11 16.197 11H15V4.4c0-.84 0-1.26-.164-1.581a1.5 1.5 0 0 0-.655-.656C13.861 2 13.441 2 12.6 2h-1.2c-.84 0-1.26 0-1.581.163a1.5 1.5 0 0 0-.656.656zM5 21a1 1 0 0 0 1 1h12a1 1 0 1 0 0-2H6a1 1 0 0 0-1 1z" fill="#ffffff"></path></g></svg></b></button>
     <div class="fab-menu" id="fabWMenu" style="text-align: center;">
    <p style="color: #fff; font-size: 9px; border-bottom: 1px solid #333; padding: 5px 0;"><b>Img:</b> <b id="vSt" style= "color: rgb(0, 175, 240);">0</b></p>
    <div class="postList"></div>
    </div>
    `
    
webMenuHTML.innerHTML = webMenuHTMLinner
document.body.append(webMenuHTML)

const webMenuCSSinner = `
.fab-container {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 999999999999999;
}

.fabBtn {
  backdrop-filter: blur(3px);
  background-color: rgba(0, 175, 240, 0.7);
  color: rgb(255, 255, 255);
  border: none;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  font-size: 15px;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0,0,0,0.3);
}

.fab-menu {
  color: #fff;
  display: none;
  flex-direction: column;
  position: absolute;
  right: 70px;
  bottom: 0;
  backdrop-filter: blur(3px);
  //background: url() no-repeat center center;
  //background-size: 100% 100%;
  //background-color: rgba(98, 0, 238, 0.3);
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.2);
  font-size: 10px;
  height: 200px;
  overflow: hidden;
  overflow-y: auto;
  opacity: .8;
  width: 200px;
}

.fab-menu.show {
  display: flex;
}

.fab-menu .mdEl {
  display: flex;
  width: 100%;
}
`
webMenuCSS.innerHTML = webMenuCSSinner
document.body.append(webMenuCSS)

function toggleMenu() {
  const menu = document.getElementById('fabWMenu');
  menu.classList.toggle('show');
  menu.style.background = `url(${document.querySelector('.g-avatar__img-wrapper img').src}) no-repeat center center`
  menu.style.backgroundSize = '100% 100%'
}

const draggable = document.getElementById('draggableFab');
let offsetX, offsetY, isDragging = false;

function setPosition(x, y) {
  draggable.style.left = `${x - offsetX}px`;
  draggable.style.top = `${y - offsetY}px`;
  draggable.style.bottom = 'auto';
  draggable.style.right = 'auto';
}

// Mouse events
draggable.addEventListener('mousedown', (e) => {
  offsetX = e.clientX - draggable.offsetLeft;
  offsetY = e.clientY - draggable.offsetTop;
  isDragging = true;
  draggable.style.cursor = 'grabbing';
  document.body.style.overflow = 'hidden';
});

document.addEventListener('mousemove', (e) => {
  if (isDragging) setPosition(e.clientX, e.clientY);
});

document.addEventListener('mouseup', () => {
  isDragging = false;
  draggable.style.cursor = 'grab';
  document.body.style.overflow = '';
});

// Touch events
draggable.addEventListener('touchstart', (e) => {
  const touch = e.touches[0];
  document.body.style.overflow = 'hidden';
  offsetX = touch.clientX - draggable.offsetLeft;
  offsetY = touch.clientY - draggable.offsetTop;
  isDragging = true;
}, { passive: false });

document.addEventListener('touchmove', (e) => {
  if (!isDragging) return;
  const touch = e.touches[0];
  setPosition(touch.clientX, touch.clientY);
}, { passive: false });

document.addEventListener('touchend', () => {
  isDragging = false;
  document.body.style.overflow = '';
});

document.querySelector('.fabBtn').addEventListener('click', () => {
  const post = document.querySelectorAll('.pswp__img img')
  if (!post.length) {
    return alert('No hay posts!')
  } else {
    toggleMenu()
    document.querySelector('#vSt').innerHTML = post.length
    post.forEach((img) => {
      const elm = document.createElement('div')
      elm.classList.add('mdEl')
      const menu = document.querySelector('.fab-menu')
      menu.appendChild(elm)
      const link = document.createElement('a')
      link.setAttribute('download', '')
      link.href = img.src
      link.innerHTML = 'Descargar'
      const prVw = document.createElement('iframe')
      prVw.classList.add('prVw')
      prVw.src = img.src
      prVw.style.width = '50px'
      elm.appendChild(prVw)
      elm.appendChild(link)
    })
    //location.href = post[1].src
  }
})
}