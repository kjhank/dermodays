export class PromoItem extends HTMLElement {
  connectedCallback() {
    this.render();
    this.role = 'listitem';
  }

  get addToCartUrl() {
    return this.getAttribute('add_to_cart_url');
  }

  get brand() {
    return this.getAttribute('brand');
  }

  get image() {
    return this.getAttribute('image');
  }

  get ownBrand() {
    return this.getAttribute('own_brand');
  }

  get price() {
    return this.getAttribute('price');
  }

  get productId() {
    return this.getAttribute('productId');
  }

  get productName() {
    return this.getAttribute('productName');
  }

  get type() {
    return this.getAttribute('type');
  }

  get url() {
    return this.getAttribute('url');
  }

  render() {
    this.innerHTML = `
      <p class="dermodays-brow">dermo days</p>
      <figure class="dermodays-image">
        <picture>
          <img src="${this.image}" alt="${this.productName}" width="220" height="220" />
        </picture>
        <figcaption class="dermodays-name">${this.productName}</figcaption>
      </figure>
      <p class="dermodays-price">${this.price}</p>`;
  }
}
