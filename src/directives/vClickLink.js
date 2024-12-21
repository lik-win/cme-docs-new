import { useGlobal } from "../store";

const vClickLink = {
  mounted(el) {
    const store = useGlobal();
    const outerEL = document.querySelector('.cme-layout');
    const headEl = document.querySelector('.page-head');
    const bodyEl = document.querySelector('.page-body');
    el.addEventListener('click', e => {
      const href = el.getAttribute('data-href');
      if (!href) return;
      const id = `#${href}`.replace(/##/g, '#');
      const anchorEl = document.querySelector(id);
      if (!anchorEl) return;
      store.setCurrentKey(id);
      outerEL.scrollTop = headEl.offsetHeight;
      const timer = setInterval(() => {
        if (!bodyEl.classList.contains('sticky')) return;
        clearInterval(timer);
        anchorEl.scrollIntoView({ behavior: 'smooth' });
      }, 30);
    });
  }
};

export { vClickLink };
