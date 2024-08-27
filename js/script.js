function navToggle() {
    const menu = document.getElementById('mobile-menu');
    if (menu.classList.contains('hidden')) {
      menu.classList.remove('hidden');
      menu.classList.add('animate__animated', 'animate__fadeInDown');
    } else {
      menu.classList.add('animate__fadeOutUp');
      setTimeout(() => {
        menu.classList.remove('animate__animated', 'animate__fadeOutUp');
        menu.classList.add('hidden');
      }, 300); 
    }
  }

  // Close on scroll
  window.addEventListener('scroll', () => {
    const menu = document.getElementById('mobile-menu');
    if (!menu.classList.contains('hidden')) {
      menu.classList.add('animate__fadeOutUp');
      setTimeout(() => {
        menu.classList.remove('animate__animated', 'animate__fadeOutUp');
        menu.classList.add('hidden');
      }, 300);
    }
  });

  // Close
  document.querySelectorAll('#mobile-menu li a').forEach(item => {
    item.addEventListener('click', () => {
      const menu = document.getElementById('mobile-menu');
      if (!menu.classList.contains('hidden')) {
        menu.classList.add('animate__fadeOutUp');
        setTimeout(() => {
          menu.classList.remove('animate__animated', 'animate__fadeOutUp');
          menu.classList.add('hidden');
        }, 300);
      }
    });
  });