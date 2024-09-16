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
