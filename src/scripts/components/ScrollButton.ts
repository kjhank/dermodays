export class ScrollButton extends HTMLElement {
  list?: HTMLUListElement | null | undefined;

  connectedCallback() {
    this.render();
    this.role = 'button';
    this.tabIndex = 0;
    this.list = this.parentNode?.querySelector('ul');

    if (this.list) {
      this.addEventListener('click', this.handleEvent);
      this.addEventListener('keydown', this.handleEvent);
    }
  }

  handleEvent(event: MouseEvent | KeyboardEvent) {
    if (event instanceof KeyboardEvent && event.key !== 'Enter') return;

    this.handleScroll();
  }

  handleScroll() {
    const wrapperWidth = (this.parentNode as HTMLElement)?.getBoundingClientRect().width || 0;
    const isWide = window.matchMedia('(width > 800px)').matches;
    const scrollDistance = isWide
      ? Math.floor(wrapperWidth / 3)
      : Math.floor(window.innerWidth / 3);

    // console.log(scrollDistance);

    this.list!.scrollBy({
      left: this.direction === 'end' ? scrollDistance : -scrollDistance,
      behavior: 'smooth',
    });
  }

  get direction() {
    return this.getAttribute('direction');
  }

  render() {
    this.innerHTML = `
      ${this.direction === 'end' ? '<span class="visually-hidden">przewiń do końca</span><chevron-svg></chevron-svg>' : '<span class="visually-hidden">przewiń do początku</span><chevron-svg></chevron-svg>'}
    `;
  }
}
