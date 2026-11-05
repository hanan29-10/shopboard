import { categories } from '../../../modules/products';
import type { CatalogState } from '../../../modules/products';

export function shopPage(state: CatalogState) {
  const categoryFilters = categories
    .map(
      (category) =>
        `<button type="button" data-category="${category}" class="${category === state.category ? 'active' : ''}">${category}</button>`,
    )
    .join('');

  return `<section class="catalog shop-catalog" id="shop"><div class="section-heading"><div><p class="eyebrow">The collection</p><h1>All pieces</h1></div></div><div class="catalog-controls"><label>Search products<input id="search" type="search" placeholder="Search the collection"></label><label>Sort products<select id="sort"><option value="featured">Featured</option><option value="price-low">Price: low to high</option><option value="price-high">Price: high to low</option><option value="name">Name: A–Z</option></select></label></div><div class="filters" aria-label="Product categories">${categoryFilters}</div><div class="product-grid"></div></section>`;
}
