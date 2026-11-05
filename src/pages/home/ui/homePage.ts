import { getCatalog, productCard, products } from '../../../modules/products';
import { hero } from '../../hero.ui';
import { initMotion } from '../../motion';
import type { CatalogState, Product } from '../../../modules/products';

const editorialRow = (
  title: string,
  eyebrow: string,
  items: Product[],
  className = '',
) => {
  const layoutClass =
    className.includes('new-arrivals') && items.length <= 2
      ? 'new-arrivals--duo'
      : '';

  return `<section class="editorial-products ${className} ${layoutClass}"><div class="section-heading"><div><p class="eyebrow">${eyebrow}</p><h2>${title}</h2></div></div><div class="product-grid">${items.map(productCard).join('')}</div></section>`;
};

export function homePage() {
  const arrivals = products
    .filter((product) => product.badge === 'New season')
    .slice(0, 2);
  const highlightedIds = arrivals.map((product) => product.id).join(',');

  return `${hero()}
    <section class="benefits reveal" aria-label="MARIGOLD benefits">
      <article><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3 5.5 7.2v9.6L12 21l6.5-4.2V7.2z"></path><path d="m5.5 7.2 6.5 4.1 6.5-4.1M12 11.3V21"></path></svg><div><h2>Italian leather</h2><p>Premium, responsibly sourced</p></div></article>
      <article><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v18M4.5 7.5h15M5.5 16.5h13"></path><path d="M7 3c0 2.5 2.2 4.5 5 4.5S17 5.5 17 3"></path></svg><div><h2>Small-batch crafted</h2><p>Thoughtfully made in limited runs</p></div></article>
      <article><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 6.5h11v10H3z"></path><path d="M14 10h3.7l2.3 2.8v3.7H14z"></path><circle cx="7" cy="18" r="1.5"></circle><circle cx="17" cy="18" r="1.5"></circle></svg><div><h2>Complimentary delivery</h2><p>On all orders</p></div></article>
      <article><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 8h16v12H4z"></path><path d="M12 8v12M4 12h16"></path><path d="M8 8C6 8 5.5 5 7.5 5 10 5 12 8 12 8Zm8 0c2 0 2.5-3 .5-3C14 5 12 8 12 8Z"></path></svg><div><h2>Gift wrapping</h2><p>For a more personal touch</p></div></article>
    </section>
    <section class="category-edit"><p class="eyebrow">A considered wardrobe</p><h2>Curated collections</h2><div class="category-grid"><a href="#/shop" class="category-tile tote" data-category-link="Totes"><span>Totes <b>&rarr;</b></span></a><a href="#/shop" class="category-tile shoulder" data-category-link="Shoulder Bags"><span>Shoulder bags <b>&rarr;</b></span></a><a href="#/shop" class="category-tile travel" data-category-link="Clutches"><span>Evening <b>&rarr;</b></span></a></div></section>
    <section class="intro reveal"><p class="eyebrow">Designed to last</p><h2>Beautiful things,<br>made <em>useful.</em></h2><p>Each MARIGOLD piece balances soft structure, considered function and materials selected to become more personal over time.</p></section>
    <section class="catalog featured-products" id="shop"><div class="section-heading"><div><p class="eyebrow">The collection</p><h2>Featured pieces</h2></div><a href="#/shop" class="view-all">View all products <span>&rarr;</span></a></div><div class="product-grid" data-exclude-products="${highlightedIds}"></div></section>
    <section class="campaign"><div><p class="eyebrow">MARIGOLD journal / No. 04</p><h2>For every<br>way forward.</h2><p>Meet the soft leather pieces designed around a life in motion.</p><a href="#/shop" class="button button-light">Discover the story <span>&rarr;</span></a></div><div class="campaign-image" role="img" aria-label="MARIGOLD leather handbag campaign"></div></section>
    ${editorialRow('New arrivals', 'Just arrived', arrivals, 'new-arrivals')}
    <section class="newsletter reveal"><p class="eyebrow">A note from MARIGOLD</p><h2>Keep in touch.</h2><p>Private previews, new arrivals, and stories from our studio.</p><form id="newsletter-form"><label class="sr-only" for="newsletter-email">Email address</label><input id="newsletter-email" type="email" placeholder="Email address" required><button class="button" type="submit">Subscribe <span>&rarr;</span></button></form><p class="newsletter-message" aria-live="polite"></p></section>`;
}

export function renderFeaturedCatalog() {
  const grid = document.querySelector<HTMLElement>(
    '.featured-products .product-grid',
  );
  if (!grid) return;

  const excludeIds = (grid.dataset.excludeProducts ?? '')
    .split(',')
    .filter(Boolean);
  const catalog = getCatalog({ excludeIds }).slice(0, 8);
  grid.innerHTML = catalog.map(productCard).join('');
  initMotion();
}

export function renderCatalog(state: CatalogState) {
  const grid = document.querySelector<HTMLElement>(
    '.shop-catalog .product-grid',
  );
  if (!grid) return;

  const catalog = getCatalog(state);
  grid.innerHTML = catalog.length
    ? catalog.map(productCard).join('')
    : '<p class="empty">No products match your search.</p>';
  initMotion();
}
