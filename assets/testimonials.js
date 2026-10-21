(() => {
  const track = document.querySelector('#testimonials-track');
  const viewport = document.querySelector('.testimonials-window');
  const carousel = document.querySelector('.testimonials-carousel');
  if (!track || !viewport || !carousel) return;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  const mobile = window.matchMedia('(max-width: 720px)');
  const original = [...track.children];
  const count = original.length;
  if (count < 3) return;
  const clone = index => {
    const card = original[index].cloneNode(true);
    card.setAttribute('aria-hidden', 'true');
    card.dataset.carouselClone = 'true';
    return card;
  };
  track.prepend(clone(count - 2), clone(count - 1));
  track.append(clone(0), clone(1));
  let position = 1;
  let step = 0;
  let timer;
  let fallback;
  let paused = false;
  let moving = false;
  const stop = () => { clearTimeout(timer); };
  const schedule = () => {
    stop();
    if (!reduced.matches && !paused && !moving) timer = setTimeout(() => move(1), 1500);
  };
  const render = instant => {
    if (instant) track.style.transition = 'none';
    const offset = position + (mobile.matches ? 1 : 0);
    track.style.transform = 'translate3d(' + (-offset * step) + 'px,0,0)';
    [...track.children].forEach((card, index) => card.classList.toggle('is-center', index === position + 1));
    if (instant) { track.getBoundingClientRect(); track.style.transition = ''; }
  };
  const normalize = () => {
    if (position === 0) { position = count; return true; }
    if (position === count + 1) { position = 1; return true; }
    return false;
  };
  const finish = () => {
    if (!moving) return;
    clearTimeout(fallback);
    if (normalize()) render(true);
    moving = false;
    schedule();
  };
  function move(direction) {
    if (moving) return;
    stop();
    position += direction;
    moving = true;
    if (reduced.matches) { render(true); finish(); return; }
    render(false);
    fallback = setTimeout(finish, 820);
  }
  function size() {
    stop(); clearTimeout(fallback);
    moving = false;
    normalize();
    const gap = parseFloat(getComputedStyle(track).gap) || 0;
    const visible = mobile.matches ? 1 : 3;
    const width = (viewport.clientWidth - gap * (visible - 1)) / visible;
    step = width + gap;
    [...track.children].forEach(card => { card.style.width = width + 'px'; });
    render(true);
    schedule();
  }
  track.addEventListener('transitionend', event => { if (event.target === track && event.propertyName === 'transform') finish(); });
  carousel.querySelectorAll('[data-testimonial-direction]').forEach(button => {
    button.addEventListener('click', () => move(Number(button.dataset.testimonialDirection)));
  });
  carousel.addEventListener('pointerenter', event => {
    if (event.pointerType === 'mouse' && window.matchMedia('(hover: hover)').matches) { paused = true; stop(); }
  });
  carousel.addEventListener('pointerleave', () => { paused = false; schedule(); });
  carousel.addEventListener('focusin', () => { paused = true; stop(); });
  carousel.addEventListener('focusout', event => {
    if (!carousel.contains(event.relatedTarget)) { paused = false; schedule(); }
  });
  window.addEventListener('resize', size);
  reduced.addEventListener('change', size);
  size();
})();
