(() => {
  const track = document.querySelector('[data-feature-timeline]');
  if (!track) return;
  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (motion.matches) return;

  const items = [...track.querySelectorAll('.timeline-fallback li')];
  const rings = track.querySelector('.timeline-orbit-rings');
  const orbit = track.querySelector('.timeline-orbit');
  const stage = track.querySelector('.feature-timeline-stage');
  const hub = track.querySelector('.timeline-hub');
  const title = hub.querySelector('h3');
  const copy = hub.querySelector('p');
  const count = hub.querySelector('.timeline-count');
  const symbols = [
    '<path d="M3 3v18h18M7 14l4-4 4 3 5-7"/>',
    '<path d="m12 3 9 5-9 5-9-5 9-5Z"/><path d="m3 12 9 5 9-5M3 16l9 5 9-5"/>',
    '<path d="M4 5h16v14H4zM8 9h8M8 13h5M8 16h3"/><path d="m15 16 2 2 4-5"/>',
    '<path d="M4 19V5m0 14h16M8 16v-4m4 4V8m4 8v-6m4 6V5"/>',
    '<path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 4 11 8 11Z"/><path d="m9 12 2 2 4-4"/>',
    '<path d="M4 4h16v12H4zM8 20h8M12 16v4"/><path d="M8 9h8M8 12h5"/>'
  ];
  const config = [
    {name:'outer',size:100,items:[0,1,2,3,4,5],angles:[0,-60,-120,-180,-240,-300]},
    {name:'middle',size:76,items:[],angles:[]},
    {name:'inner',size:53,items:[],angles:[]},
    {name:'core',size:32,items:[],angles:[]}
  ];
  const ringElements = [];
  const itemButtons = new Map();
  let progressStroke;
  const satellites = [];
  config.forEach((level,levelIndex) => {
    const ring = document.createElement('div');
    ring.className = 'timeline-orbit-ring orbit-' + level.name;
    ring.style.setProperty('--ring-size',level.size + '%');
    ring.style.setProperty('--ring-progress','0turn');
    ring.dataset.level = String(levelIndex);
    if (level.name === 'core') {
      const svg = document.createElementNS('http://www.w3.org/2000/svg','svg');
      svg.setAttribute('class','orbit-progress');
      svg.setAttribute('viewBox','0 0 100 100');
      svg.setAttribute('aria-hidden','true');
      progressStroke = document.createElementNS('http://www.w3.org/2000/svg','circle');
      progressStroke.setAttribute('cx','50');
      progressStroke.setAttribute('cy','50');
      progressStroke.setAttribute('r','49');
      progressStroke.setAttribute('pathLength','100');
      svg.append(progressStroke);
      ring.append(svg);
    }
    level.items.forEach((itemIndex,slot) => {
      const position = document.createElement('span');
      position.className = 'orbit-satellite';
      position.style.setProperty('--start-angle',level.angles[slot] + 'deg');
      satellites.push({position,size:level.size});
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'orbit-icon-button';
      button.setAttribute('aria-label',items[itemIndex].querySelector('h3').textContent);
      button.setAttribute('aria-current','false');
      button.innerHTML = '<svg class="orbit-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + symbols[itemIndex] + '</svg>';
      button.addEventListener('click',() => scrollToItem(itemIndex));
      position.append(button);
      ring.append(position);
      itemButtons.set(itemIndex,button);
    });
    rings.append(ring);
    ringElements.push(ring);
  });

  let active = -1;
  let frame = 0;
  let swap = 0;
  let targetStep = -1;
  let movementFrame = 0;
  let displayedProgress = 0;
  const faDigits = value => String(value).replace(/\d/g,digit => '۰۱۲۳۴۵۶۷۸۹'[Number(digit)]);
  const clamp = value => Math.max(0,Math.min(1,value));
  function layoutSatellites() {
    const diameter = orbit.getBoundingClientRect().width;
    progressStroke.style.strokeWidth = String(400 / (ringElements[3].getBoundingClientRect().width + 2));
    satellites.forEach(satellite => satellite.position.style.setProperty('--satellite-radius',(diameter * satellite.size / 200) + 'px'));
  }
  function show(index) {
    itemButtons.forEach((button,item) => button.setAttribute('aria-current',item === index ? 'step' : 'false'));
    if (index === active) return;
    active = index;
    hub.classList.add('is-changing');
    const current = ++swap;
    window.setTimeout(() => {
      if (current !== swap || index !== targetStep) return;
      title.textContent = items[index].querySelector('h3').textContent;
      copy.textContent = items[index].querySelector('p').textContent;
      count.textContent = faDigits(String(index + 1).padStart(2,'0')) + ' / ' + faDigits(String(items.length).padStart(2,'0'));
      itemButtons.forEach((button,item) => button.setAttribute('aria-current',item === index ? 'step' : 'false'));
      requestAnimationFrame(() => hub.classList.remove('is-changing'));
    },100);
  }
  function renderMovement(progress) {
    displayedProgress = progress;
    ringElements[0].style.setProperty('--outer-rotation',(progress * 300) + 'deg');
    progressStroke.style.strokeDashoffset = String(100 * (1 - progress));
    progressStroke.style.opacity = progress > 0 ? '1' : '0';
  }
  function moveToStep(index,initial) {
    window.cancelAnimationFrame(movementFrame);
    const destination = index / (items.length - 1);
    if (initial || Math.abs(destination - displayedProgress) < .00001) {
      renderMovement(destination);
      show(index);
      return;
    }
    const origin = displayedProgress;
    const started = performance.now();
    const duration = 520;
    const animate = now => {
      const time = clamp((now - started) / duration);
      const eased = 1 - Math.pow(1 - time,3);
      // Both rings use the exact same interpolated value on every frame.
      renderMovement(origin + (destination - origin) * eased);
      if (time < 1) movementFrame = requestAnimationFrame(animate);
      else {
        movementFrame = 0;
        renderMovement(destination);
        show(index);
      }
    };
    movementFrame = requestAnimationFrame(animate);
  }
  function update() {
    frame = 0;
    const stickyTop = parseFloat(getComputedStyle(stage).top) || 0;
    const start = window.scrollY + track.getBoundingClientRect().top - stickyTop;
    const runway = Math.max(1,track.offsetHeight - stage.offsetHeight);
    const progress = clamp((window.scrollY - start) / runway);
    const nextStep = Math.round(progress * (items.length - 1));
    if (nextStep !== targetStep) {
      const initial = targetStep === -1;
      targetStep = nextStep;
      itemButtons.forEach(button => button.setAttribute('aria-current','false'));
      moveToStep(nextStep,initial);
    }
  }
  function requestUpdate() { if (!frame) frame = requestAnimationFrame(update); }
  function scrollToItem(index) {
    const stickyTop = parseFloat(getComputedStyle(stage).top) || 0;
    const start = window.scrollY + track.getBoundingClientRect().top - stickyTop;
    const runway = Math.max(1,track.offsetHeight - stage.offsetHeight);
    const progress = index / (items.length - 1);
    window.scrollTo({top:start + progress * runway,behavior:'smooth'});
  }

  track.classList.add('timeline-enhanced');
  layoutSatellites();
  update();
  window.addEventListener('scroll',requestUpdate,{passive:true});
  window.addEventListener('resize',() => { layoutSatellites(); requestUpdate(); },{passive:true});
  motion.addEventListener('change',() => window.location.reload());
})();
