// هيدر عند التمرير
window.addEventListener('scroll', () => {
  const header = document.querySelector('.site-header');
  if (window.scrollY > 50) header.classList.add('scrolled');
  else header.classList.remove('scrolled');
});

// قائمة الجوال
const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('.site-nav');
menuToggle?.addEventListener('click', () => siteNav.classList.toggle('active'));
document.querySelectorAll('.site-nav a').forEach(a => {
  a.addEventListener('click', () => siteNav.classList.remove('active'));
});

// Reveal ثنائي الاتجاه
const io = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
    } else {
      entry.target.classList.remove('in-view');
    }
  });
}, { root: null, threshold: 0.2 });

document.querySelectorAll('.reveal').forEach(el => io.observe(el));