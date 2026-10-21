(() => {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Mobile navigation is portaled outside the filtered sticky header.
  const menuButton = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('#nav-links');
  if (menuButton && navigation) {
    const mobile = window.matchMedia('(max-width: 720px)');
    const anchor = document.createComment('navigation position');
    navigation.before(anchor);
    const backdrop = document.createElement('div');
    backdrop.className = 'mobile-menu-backdrop';
    backdrop.setAttribute('aria-hidden', 'true');
    const heading = document.createElement('div');
    heading.className = 'mobile-menu-heading';
    const title = document.createElement('span');
    title.textContent = 'منوی میکل';
    const closeButton = document.createElement('button');
    closeButton.type = 'button';
    closeButton.className = 'mobile-menu-close';
    closeButton.setAttribute('aria-label', 'بستن منو');
    closeButton.innerHTML = '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18"/></svg>';
    heading.append(title, closeButton);
    navigation.prepend(heading);
    document.body.append(backdrop);
    let opened = false;
    let previousOverflow = '';
    const setOpen = (value, returnFocus = true) => {
      const next = Boolean(value && mobile.matches);
      if (opened === next) return;
      opened = next;
      navigation.classList.toggle('open', opened);
      backdrop.classList.toggle('open', opened);
      menuButton.setAttribute('aria-expanded', String(opened));
      menuButton.setAttribute('aria-label', opened ? 'بستن منو' : 'باز کردن منو');
      navigation.inert = mobile.matches && !opened;
      if (opened) {
        previousOverflow = document.documentElement.style.overflow;
        document.documentElement.style.overflow = 'hidden';
        navigation.setAttribute('aria-modal', 'true');
        closeButton.focus({preventScroll:true});
      } else {
        document.documentElement.style.overflow = previousOverflow;
        navigation.removeAttribute('aria-modal');
        navigation.querySelectorAll('.nav-tools').forEach(group => {
          group.dataset.open = 'false';
          group.querySelector('.tools-menu').getAnimations().forEach(animation => animation.cancel());
          group.querySelector('.tools-menu').style.height = '0px';
          group.querySelector('.tools-menu').inert = true;
          group.querySelector('.nav-tools-trigger').setAttribute('aria-expanded','false');
        });
        if (returnFocus) menuButton.focus({preventScroll:true});
      }
    };
    const sync = () => {
      setOpen(false, false);
      if (mobile.matches) {
        document.body.append(navigation);
        navigation.classList.add('mobile-drawer');
        navigation.setAttribute('role','dialog');
        navigation.setAttribute('aria-label','منوی اصلی');
        navigation.inert = true;
      } else {
        anchor.after(navigation);
        navigation.classList.remove('mobile-drawer');
        navigation.removeAttribute('role');
        navigation.removeAttribute('aria-label');
        navigation.inert = false;
      }
    };
    menuButton.addEventListener('click', () => setOpen(!opened));
    closeButton.addEventListener('click', () => setOpen(false));
    backdrop.addEventListener('click', () => setOpen(false));
    navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setOpen(false)));
    document.addEventListener('keydown', event => {
      if (!opened) return;
      if (event.key === 'Escape') { event.preventDefault(); setOpen(false); }
      if (event.key === 'Tab') {
        const items = [...navigation.querySelectorAll('a,button')].filter(el => el.getClientRects().length && !el.disabled);
        const first = items[0], last = items[items.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
      }
    });
    mobile.addEventListener('change', sync);
    sync();
  }

  document.querySelectorAll('.nav-tools').forEach(group => {
    const trigger = group.querySelector('.nav-tools-trigger');
    let timer;
    let slide;
    const submenu = group.querySelector('.tools-menu');
    const mobileTools = window.matchMedia('(max-width:720px)');
    const syncSubmenu = () => {
      slide?.cancel();
      submenu.style.height = mobileTools.matches ? (group.dataset.open === 'true' ? 'auto' : '0px') : '';
      submenu.inert = mobileTools.matches && group.dataset.open !== 'true';
    };
    mobileTools.addEventListener('change', syncSubmenu);
    syncSubmenu();
    const setOpen = open => {
      clearTimeout(timer);
      const from = submenu.getBoundingClientRect().height;
      const changed = group.dataset.open !== String(open);
      group.dataset.open = String(open);
      trigger.setAttribute('aria-expanded', String(open));
      if (mobileTools.matches) {
        submenu.inert = !open;
        if (!changed) return;
        slide?.cancel();
        submenu.style.height = open ? 'auto' : '0px';
        const to = open ? submenu.scrollHeight : 0;
        if (!reduced) {
          const current = submenu.animate([{height:from + 'px'}, {height:to + 'px'}], {duration:320,easing:'cubic-bezier(.22,.8,.25,1)'});
          slide = current;
          current.onfinish = () => { if (slide === current) slide = null; };
        }
      }
    };
    group.addEventListener('pointerenter', event => {
      if (event.pointerType !== 'touch' && window.matchMedia('(hover: hover) and (min-width: 721px)').matches) setOpen(true);
    });
    group.addEventListener('pointerleave', () => { if (!mobileTools.matches) timer = setTimeout(() => setOpen(false), 160); });
    trigger.addEventListener('click', () => setOpen(trigger.getAttribute('aria-expanded') !== 'true'));
    group.addEventListener('focusin', event => { if (event.target !== trigger) setOpen(true); });
    group.addEventListener('focusout', event => { if (!group.contains(event.relatedTarget)) setOpen(false); });
    group.addEventListener('keydown', event => {
      if (event.key === 'ArrowDown' && event.target === trigger) {
        event.preventDefault(); setOpen(true); group.querySelector('a')?.focus();
      }
      if (event.key === 'Escape') { setOpen(false); trigger.focus(); }
    });
    document.addEventListener('click', event => { if (!group.contains(event.target)) setOpen(false); });
    document.querySelector('.menu-toggle')?.addEventListener('click', () => setOpen(false));
  });

  document.querySelectorAll('.faq-item').forEach((item, index) => {
    const summary = item.querySelector('summary');
    const answer = item.querySelector('.faq-answer');
    const inner = answer?.querySelector('.faq-answer-inner');
    if (!summary || !inner) return;
    answer.id = answer.id || 'faq-answer-' + (index + 1);
    summary.setAttribute('aria-controls', answer.id);
    summary.setAttribute('aria-expanded', String(item.open));
    let animation = null;
    let requestedOpen = item.open;
    summary.addEventListener('click', event => {
      event.preventDefault();
      const from = item.open ? answer.getBoundingClientRect().height : 0;
      requestedOpen = !requestedOpen;
      animation?.cancel();
      animation = null;
      summary.setAttribute('aria-expanded', String(requestedOpen));
      item.classList.toggle('is-closing', !requestedOpen);
      if (reduced || !answer.animate) {
        item.open = requestedOpen;
        item.classList.remove('is-closing');
        return;
      }
      item.open = true;
      const to = requestedOpen ? inner.scrollHeight : 0;
      const targetOpen = requestedOpen;
      animation = answer.animate([
        {height:from + 'px',opacity:from > 0 ? 1 : 0},
        {height:to + 'px',opacity:targetOpen ? 1 : 0}
      ], {duration:480,easing:'cubic-bezier(.22,.8,.25,1)',fill:'both'});
      animation.onfinish = () => {
        item.open = targetOpen;
        item.classList.remove('is-closing');
        animation.cancel();
        animation = null;
      };
    });
  });

  const triggers = [...document.querySelectorAll('.addon-info')];
  if (!triggers.length) return;
  const popup = document.createElement('div');
  popup.className = 'feature-popover';
  popup.id = 'feature-popover';
  popup.hidden = true;
  popup.setAttribute('role', 'dialog');
  popup.innerHTML = '<p><span>لورم ایپسوم متن ساختگی است.</span><span>با تولید سادگی نامفهوم از صنعت چاپ،</span><span>و با استفاده از طراحان گرافیک.</span></p><a href="#">مشاهده بیشتر...</a>';
  document.body.append(popup);
  let current = null;
  let closeTimer;
  const position = () => {
    if (!current || popup.hidden) return;
    const rect = current.getBoundingClientRect();
    const width = popup.offsetWidth;
    const height = popup.offsetHeight;
    const left = Math.max(16, Math.min(rect.right - width, window.innerWidth - width - 16));
    let top = rect.bottom + 9;
    if (top + height > window.innerHeight - 16) top = Math.max(16, rect.top - height - 9);
    popup.style.left = left + 'px';
    popup.style.top = top + 'px';
  };
  const close = () => {
    clearTimeout(closeTimer);
    current?.setAttribute('aria-expanded', 'false');
    popup.hidden = true;
    current = null;
  };
  const open = trigger => {
    clearTimeout(closeTimer);
    if (current !== trigger) current?.setAttribute('aria-expanded', 'false');
    current = trigger;
    trigger.setAttribute('aria-expanded', 'true');
    popup.setAttribute('aria-label', trigger.getAttribute('aria-label'));
    popup.querySelector('a').href = trigger.dataset.feature;
    popup.hidden = false;
    position();
  };
  const delayedClose = () => { clearTimeout(closeTimer); closeTimer = setTimeout(close, 200); };
  triggers.forEach(trigger => {
    trigger.addEventListener('pointerenter', () => open(trigger));
    trigger.addEventListener('pointerleave', delayedClose);
    trigger.addEventListener('focus', () => open(trigger));
    trigger.addEventListener('click', event => { event.stopPropagation(); open(trigger); });
    trigger.addEventListener('blur', event => { if (!popup.contains(event.relatedTarget)) delayedClose(); });
  });
  popup.addEventListener('pointerenter', () => clearTimeout(closeTimer));
  popup.addEventListener('pointerleave', delayedClose);
  popup.addEventListener('focusin', () => clearTimeout(closeTimer));
  popup.addEventListener('focusout', event => { if (event.relatedTarget !== current) delayedClose(); });
  document.addEventListener('click', event => { if (!popup.contains(event.target) && !event.target.closest('.addon-info')) close(); });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && current) { const previous = current; close(); previous.focus(); close(); }
  });
  window.addEventListener('resize', position);
  window.addEventListener('scroll', position, {passive:true});
})();
