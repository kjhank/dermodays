import { getPromos } from '../../api';

export class PromoCarousel extends HTMLElement {
  private promos: {
    products?: Array<{
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
    }>,
    url?: string,
  } = {};

  async connectedCallback() {
    this.innerHTML = 'Ładowanie...';
    this.promos = await this.fetchPromos();
    this.render();
  }

  async fetchPromos() {
    if (this.ids) {
      try {
        const [promos] = await getPromos(this.ids);
        return promos;
      } catch (error) {
        this.innerHTML = 'Wystąpił błąd podczas pobierania danych';
      }
    }

    return [];
  }

  get ids() {
    return this.getAttribute('ids');
  }

  render() {
    const { products } = this.promos;
    if (!products) {
      this.innerHTML = 'Brak danych';
      return;
    }

    this.innerHTML = `
    <div class="dermodays-carousel-wrapper">
      <scroll-button direction="start"></scroll-button>
      <ul>
        ${products.map((product) => `
          <promo-item
            add_to_cart_url="${product.add_to_cart_url}"
            brand="${product.brand}"
            image="${product.images['220x220'].url}"
            own_brand="${product.own_brand}"
            price="${product.price}"
            productId="${product.id}"
            productName="${product.name}"
            type="${product.type}"
            url="${product.url}"
          ></promo-item>`).join('')}
      </ul>
      <scroll-button direction="end"></scroll-button>
    </div>
    <a class="dermodays-widget" href="${this.promos.url}">Zobacz więcej</a>
    `;
  }
}
