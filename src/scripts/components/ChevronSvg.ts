export class ChevronSvg extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="200" height="200" viewBox="0 0 511.949 511.949"><path d="M386.235 248.308 140.902 2.975c-4.267-4.053-10.987-3.947-15.04.213a10.763 10.763 0 0 0 0 14.827l237.76 237.76-237.76 237.867c-4.267 4.053-4.373 10.88-.213 15.04 4.053 4.267 10.88 4.373 15.04.213l.213-.213 245.333-245.333a10.624 10.624 0 0 0 0-15.041z" fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-width="10px" /></svg>
    `;
  }
}
