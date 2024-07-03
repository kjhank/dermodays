import { getProduct } from '../../api';

export class DozProduct extends HTMLElement {
  private product: Array<{
    id: number;
    name: string;
    price: string;
    price_value: number;
    price_lowest: number;
    url: string;
    add_to_cart_url: string;
    brand: string;
    type: string;
    own_brand: boolean;
    images: Record<'220x220' | '220x220_transparent', Record<'id' | 'url', string>>;
  }> = [];

  async connectedCallback() {
    this.innerHTML = 'Ładowanie...';
    this.product = await this.fetchProduct();
    this.render();
    this.role = 'article';
  }

  get productId() {
    return this.getAttribute('productid');
  }

  get imagesrc() {
    return this.getAttribute('imagesrc');
  }

  get imagedimensions() {
    return this.getAttribute('imagedimensions')?.split('x') ?? [0, 0];
  }

  async fetchProduct() {
    if (this.productId) {
      try {
        const product = await getProduct(this.productId);
        return product;
      } catch (error) {
        this.innerHTML = 'Wystąpił błąd podczas pobierania danych';
      }
    }

    return [];
  }

  render() {
    const [product] = this.product;
    const [width, height] = this.imagedimensions;

    this.innerHTML = `
      <picture>
        <img alt="opakowanie ${product.name}" width="${width}" height="${height}" src="${this.imagesrc}"/>
      </picture>
      <p class="dermodays-description">${product.name}</p>
      <p class="dermodays-price">Cena: ${product.price}</p>
      ${product.price_lowest ? `<p class="dermodays-brand">Cena z ostatnich 30 dni: ${product.price_lowest}</p>` : ''}
      <a href="${product.add_to_cart_url}" class="product__add-to-cart-js dermodays-widget" data-add-url="/koszyk/dodaj-produkt" data-id="${product.id}">Dodaj do koszyka</a>
    `;
  }
}
