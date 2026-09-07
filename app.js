/* Josh Murphy — shared behaviour */
(function () {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const root = document.documentElement;

  /* theme */
  const saved = localStorage.getItem('theme');
  if (saved) root.dataset.theme = saved;
  const btn = document.getElementById('theme');
  if (btn) btn.addEventListener('click', () => {
    const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
    root.dataset.theme = next;
    localStorage.setItem('theme', next);
  });

  /* scroll progress */
  const prog = document.getElementById('prog');
  if (prog) addEventListener('scroll', () => {
    const h = document.body.scrollHeight - innerHeight;
    prog.style.width = (h > 0 ? scrollY / h * 100 : 0) + '%';
  }, { passive: true });

  /* reveal + counters */
  const io = new IntersectionObserver((es) => {
    es.forEach(e => {
      if (!e.isIntersecting) return;
      e.target.classList.add('in');
      io.unobserve(e.target);
      e.target.querySelectorAll('[data-count]').forEach(countUp);
    });
  }, { rootMargin: '0px 0px -10% 0px', threshold: .14 });
  document.querySelectorAll('.rise').forEach(el => io.observe(el));

  function countUp(el) {
    const target = +el.dataset.count, pre = el.dataset.pre || '';
    if (reduce) { el.firstChild.nodeValue = pre + target.toLocaleString() + ' '; return; }
    const dur = 1200, t0 = performance.now();
    (function tick(now) {
      const p = Math.min(1, (now - t0) / dur), e = 1 - Math.pow(1 - p, 3);
      el.firstChild.nodeValue = pre + Math.round(target * e).toLocaleString() + ' ';
      if (p < 1) requestAnimationFrame(tick);
    })(t0);
  }

  /* plate tilt */
  const plate = document.getElementById('plate');
  if (plate && !reduce && matchMedia('(hover: hover)').matches) {
    const m = plate.parentElement;
    m.addEventListener('pointermove', e => {
      const r = plate.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
      plate.style.transition = 'transform .1s linear';
      plate.style.transform = `rotateY(${(x - .5) * 10}deg) rotateX(${(.5 - y) * 10}deg) translateZ(8px)`;
      plate.style.setProperty('--mx', (x * 100) + '%');
      plate.style.setProperty('--my', (y * 100) + '%');
    });
    m.addEventListener('pointerleave', () => {
      plate.style.transition = 'transform .65s var(--ease)';
      plate.style.transform = '';
      plate.style.setProperty('--mx', '28%');
      plate.style.setProperty('--my', '12%');
    });
  }
})();
