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

  // Cancel rightxlick menu
  document.addEventListener('contextmenu', (event) => {
    event.preventDefault();
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

// Contact Form Submission
function handleFormSubmit(e) {
  e.preventDefault();
  
  const form = e.target;
  const btn = form.querySelector('button[type="submit"]');
  const originalText = btn.textContent;

  const formData = new FormData(form);
  formData.append("access_key", "6adb6f0e-4781-41d3-b303-a5932aa7d78e");
  
  btn.textContent = "Sending...";
  btn.disabled = true;
  btn.classList.add("opacity-70", "cursor-not-allowed");

  fetch("https://api.web3forms.com/submit", {
    method: "POST",
    body: formData
  })
  .then(response => response.json())
  .then(data => {
    if (data.success) {
      btn.textContent = "Message Sent!";
      btn.classList.remove("bg-red-600", "hover:bg-red-700");
      btn.classList.add("bg-green-600", "hover:bg-green-700");
      
      // Reset form
      form.reset();
      setTimeout(() => {
        btn.textContent = originalText;
        btn.classList.remove("bg-green-600", "hover:bg-green-700", "opacity-70", "cursor-not-allowed");
        btn.classList.add("bg-red-600", "hover:bg-red-700");
        btn.disabled = false;
      }, 3000);
    } else {
      throw new Error(data.message || "Submission failed");
    }
  })
  .catch(error => {
    alert("Something went wrong. Please try again.");
    console.error("Form submission error:", error);
    
    // Reset button
    btn.textContent = originalText;
    btn.classList.remove("opacity-70", "cursor-not-allowed");
    btn.disabled = false;
  });
}
