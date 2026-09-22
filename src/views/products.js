import { products } from "../data/products.js";
import { createProductCard } from "../components/productCard.js";

export function productsView() {

    return `
        <section class="section">

            <div class="section-title">

                <h1>Todos los productos</h1>

            </div>

            <div class="search-box">

                <span>🔍</span>

                <input
                    id="products-search"
                    type="text"
                    placeholder="Buscar producto..."
                >

            </div>

            <div
                id="products-list"
                class="products-grid"
            >
                ${products
                    .map(createProductCard)
                    .join("")}
            </div>

        </section>
    `;

    
}
