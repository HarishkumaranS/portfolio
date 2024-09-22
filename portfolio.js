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
  window.onload = function() {
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
}
  document.addEventListener("dblclick", toggleFullscreen);
  
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
    const colors=['#FF0000','#00FF00','#0000FF','#FFFFFF','orange'];
    const random_color=colors[Math.floor(Math.random()*colors.length)];
    ctx.strokeStyle = random_color;
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
// background Particle about
  particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 200,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });
  // project background canvas star
  const backgroundCanvas = document.getElementById('backgroundCanvas');
  const canvasContext = backgroundCanvas.getContext('2d');

  // Adjust canvas size
  function resizeCanvas() {
      backgroundCanvas.width = window.innerWidth;
      backgroundCanvas.height = window.innerHeight;
  }

  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  // Function to generate a random color
  function getRandomColor() {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
  }

  // Function to draw a star
  function drawStar(x, y, radius, points, inset, color) {
      canvasContext.beginPath();
      canvasContext.moveTo(x, y - radius);
      for (let i = 0; i < points; i++) {
          const angle = (i * Math.PI * 2) / points;
          const xOuter = x + Math.cos(angle) * radius;
          const yOuter = y - Math.sin(angle) * radius;
          canvasContext.lineTo(xOuter, yOuter);
          const xInner = x + Math.cos(angle + Math.PI / points) * radius * inset;
          const yInner = y - Math.sin(angle + Math.PI / points) * radius * inset;
          canvasContext.lineTo(xInner, yInner);
      }
      canvasContext.closePath();
      canvasContext.fillStyle = color;
      canvasContext.fill();
  }

  // Create an array of stars with random colors
  let stars = [];
  function createStars() {
      for (let i = 0; i < 100; i++) {
          stars.push({
              x: Math.random() * backgroundCanvas.width,
              y: Math.random() * backgroundCanvas.height,
              radius: Math.random() * 5 + 2,
              points: 5,
              inset: 0.5,
              color: getRandomColor(), // Assign random color
              dx: (Math.random() - 0.5) * 2,
              dy: (Math.random() - 0.5) * 2,
              blinkSpeed: Math.random() * 0.05 + 0.01 // Random blink speed
          });
      }
  }

  // Animate the stars with blinking effect
  function animateStars() {
      canvasContext.clearRect(0, 0, backgroundCanvas.width, backgroundCanvas.height);

      stars.forEach(star => {
          // Randomly change star color to create a blinking effect
          if (Math.random() < star.blinkSpeed) {
              star.color = getRandomColor(); // Change to random color
          }

          // Draw the star with the current color
          drawStar(star.x, star.y, star.radius, star.points, star.inset, star.color);

          // Move stars
          star.x += star.dx;
          star.y += star.dy;

          // Bounce off the edges
          if (star.x + star.radius > backgroundCanvas.width || star.x - star.radius < 0) {
              star.dx = -star.dx;
          }
          if (star.y + star.radius > backgroundCanvas.height || star.y - star.radius < 0) {
              star.dy = -star.dy;
          }
      });

      requestAnimationFrame(animateStars); // Loop the animation
  }

  createStars();
  animateStars(); // Start the animation