   // Function to toggle between fullscreen and normal screen
   function toggleFullscreen() {
      if (!document.fullscreenElement &&    // Standard method
          !document.mozFullScreenElement && // Firefox
          !document.webkitFullscreenElement && // Chrome, Safari, Opera
          !document.msFullscreenElement) {  // IE/Edge
          // Enter fullscreen
          const element = document.documentElement;
          if (element.requestFullscreen) {
              element.requestFullscreen();
          } else if (element.mozRequestFullScreen) { // Firefox
              element.mozRequestFullScreen();
          } else if (element.webkitRequestFullscreen) { // Chrome, Safari, Opera
              element.webkitRequestFullscreen();
          } else if (element.msRequestFullscreen) { // IE/Edge
              element.msRequestFullscreen();
          }
      } else {
          // Exit fullscreen
          if (document.exitFullscreen) {
              document.exitFullscreen();
          } else if (document.mozCancelFullScreen) { // Firefox
              document.mozCancelFullScreen();
          } else if (document.webkitExitFullscreen) { // Chrome, Safari, Opera
              document.webkitExitFullscreen();
          } else if (document.msExitFullscreen) { // IE/Edge
              document.msExitFullscreen();
          }
      }
  }

  // Add a double-click event listener to the entire page
  document.addEventListener("dblclick", toggleFullscreen);
  window.onload = function() {
      toggleFullscreen();
  }
// SHOW MENU
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
          nav = document.getElementById(navId)

    if(toggle && nav){
          toggle.addEventListener('click', () =>{
                nav.classList.toggle('show')
          });
    }
}

showMenu('nav_toggle','nav_menu')

// ACTIVE & REMOVE ACTIVE
const navLink = document.querySelectorAll('.nav_link')
navLink.forEach(n => n.classList.remove('active'))

function linkAction(){
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')

    const navMenu = document.getElementById('nav_menu')
    navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction))
// background particales

  
const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particlesArray = [];
const numberOfParticles = 100;

class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 5 + 1;
    this.speedX = Math.random() * 3 - 1.5;
    this.speedY = Math.random() * 3 - 1.5;
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    // Reverse direction if particle moves out of bounds
    if (this.x < 0 || this.x > canvas.width) this.speedX = -this.speedX;
    if (this.y < 0 || this.y > canvas.height) this.speedY = -this.speedY;

    // Reduce size over time
    if (this.size > 0.2) this.size -= 0.1;
  }

  draw() {
    ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
    ctx.strokeStyle = 'white';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
  }
}

function init() {
  particlesArray.length = 0; // Clear array before initializing new particles
  for (let i = 0; i < numberOfParticles; i++) {
    particlesArray.push(new Particle());
  }
}

function handleParticles() {
  for (let i = 0; i < particlesArray.length; i++) {
    particlesArray[i].update();
    particlesArray[i].draw();

    // Check distance between particles and draw a line if they are close
    for (let j = i + 1; j < particlesArray.length; j++) {
      const dx = particlesArray[i].x - particlesArray[j].x;
      const dy = particlesArray[i].y - particlesArray[j].y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < 100) {
        ctx.beginPath();
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
        ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
        ctx.lineTo(particlesArray[j].x, particlesArray[j].y);
        ctx.stroke();
      }
    }

    // Remove particles that are too small
    if (particlesArray[i].size <= 0.3) {
      particlesArray.splice(i, 1);
      i--; // Adjust index after removal to avoid skipping particles
    }
  }

  // Refill particles to maintain constant flow
  if (particlesArray.length < numberOfParticles) {
    particlesArray.push(new Particle());
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  handleParticles();
  requestAnimationFrame(animate);
}

// Resize canvas when window size changes
window.addEventListener('resize', function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  init(); // Reinitialize particles on resize
});

init();
animate();
