import {
  CartButton, VimeoPlayer, PatternSvg, PlayIcon, PromoCarousel, PromoItem,
  ScrollButton, DozProduct, ChevronSvg,
} from './scripts/components';
import './styles/style.css';

customElements.define('vimeo-player', VimeoPlayer);
customElements.define('play-icon', PlayIcon);
customElements.define('promo-carousel', PromoCarousel);
customElements.define('promo-item', PromoItem);
customElements.define('cart-button', CartButton);
customElements.define('pattern-svg', PatternSvg);
customElements.define('scroll-button', ScrollButton);
customElements.define('doz-product', DozProduct);
customElements.define('chevron-svg', ChevronSvg);

const anchorLinks = document.querySelectorAll('a[href^="#"]');
anchorLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const id = link.getAttribute('href');

    const navHeight = link.closest('nav')?.getBoundingClientRect().height ?? 0;

    if (!id) return;

    const targetNode = document.querySelector(id);
    if (!targetNode) return;

    const scrollDistance = (targetNode as HTMLElement).offsetTop - navHeight;

    window.scroll({
      top: scrollDistance,
      behavior: 'smooth',
    });

    window.history.pushState({}, '', id);
  });
});
