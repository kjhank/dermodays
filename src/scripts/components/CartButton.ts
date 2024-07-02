export class CartButton extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  get url() {
    return this.getAttribute('url');
  }

  // p161805-Reme_Kolagenowa_Formula_Piekna_pomarancza_-_marakuja_proszek_150_g
  parseUrl() {
    if (!this.url) return {};

    const [rawId, ...rest] = this.url.split('-');

    const id = rawId.slice(1);
    const href = `a_${id}-${rest.join('-')}`;

    return { id, href };
  }

  render() {
    const { id, href } = this.parseUrl();

    this.innerHTML = `
    <a href="/koszyk/${href}" class="product__add-to-cart-js dermodays-widget" data-add-url="/koszyk/dodaj-produkt" data-id="${id}">Dodaj do koszyka</a>
    `;
  }
}
