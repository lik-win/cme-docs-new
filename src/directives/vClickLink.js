import { useGlobal } from "../store";
const store = useGlobal();

const vClickLink = {
  mounted(el) {
    const outerEL = document.querySelector('.cme-layout');
    const headEl = document.querySelector('.page-head');
    el.addEventListener('click', e => {
      const href = el.getAttribute('data-href');
      if (!href) return;
      const id = `#${href}`.replace(/##/g, '#');
      const anchorEl = document.querySelector(id);
      if (!anchorEl) return;
      store.setCurrentKey(id);
      outerEL.scrollTop = headEl.offsetHeight;
      setTimeout(() => {
        anchorEl.scrollIntoView({ behavior: 'smooth' });
      }, 400);
    });
  }
};

export { vClickLink };
