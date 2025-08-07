


    // Mobile menu toggle
    document.getElementById('hamburger').onclick = () => {
      document.getElementById('navLinks').classList.toggle('show');
    };
    // Scroll animations
    const sections = document.querySelectorAll('section');
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => e.isIntersecting && e.target.classList.add('visible'));
    }, { threshold: 0.2 });
    sections.forEach(s => obs.observe(s));
    // Theme toggle
    const themeBtn = document.getElementById('themeToggle');
    themeBtn.onclick = () => {
      document.documentElement.classList.toggle('light');
      themeBtn.textContent = document.documentElement.classList.contains('light') ? '🌙' : '🌓';
    };
    // Skill bars animation
    window.addEventListener('load', () => {
      document.querySelectorAll('.bar-fill').forEach(el => {
        el.style.width = el.getAttribute('data-fill');
      });
    });
    // Back to top
    const toTop = document.getElementById('toTop');
    window.onscroll = () => {
      toTop.style.display = window.scrollY > 300 ? 'block' : 'none';
    };
    toTop.onclick = () => window.scrollTo({ top:0, behavior:'smooth' });
