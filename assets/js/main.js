document.addEventListener('DOMContentLoaded', () => {
  // Mobile Sidebar Toggle (if needed later)
  const menuBtn = document.getElementById('mobile-menu-btn');
  const sidebar = document.querySelector('.sidebar');
  
  if (menuBtn && sidebar) {
    menuBtn.addEventListener('click', () => {
      sidebar.classList.toggle('open');
    });
  }

  // Active link highlighting based on current URL
  const navLinks = document.querySelectorAll('.nav-item');
  const currentPath = window.location.pathname.split('/').pop();
  
  navLinks.forEach(link => {
    const linkPath = link.getAttribute('href');
    if (linkPath === currentPath || (currentPath === '' && linkPath === 'index.html')) {
      link.classList.add('active');
    }
  });
});
