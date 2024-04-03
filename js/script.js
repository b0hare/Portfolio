let hire_btn = document.getElementById('hire_btn');

hire_btn.addEventListener("click", function () {
    window.location.href = "form.html";
})

    // Active button 

document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
  
    navLinks.forEach(function(link) {
      link.addEventListener("click", function() {
        // Remove 'active' class from all links
        navLinks.forEach(function(link) {
          link.classList.remove("clicked");
        });
  
        // Add 'active' class to the clicked link
        this.classList.add("clicked");
      });
    });
  });
  