import { products } from "../data/products.js";

export function detailView(productId) {

    const product = products.find(
        item => item.id === productId
    );

    if (!product) {
        return `
            <section class="section">
                <h2>Producto no encontrado</h2>
                <button data-view="products">
                    Volver a productos
                </button>
            </section>
        `;
    }

    return `
        <section class="section detail-view">

            <button
                class="back-button"
                data-view="products"
            >
                ← Volver
            </button>

            <div class="detail-image">
                ${product.emoji}
            </div>

            <span class="product-category">
                ${product.category}
            </span>

            <h1>
                ${product.name}
            </h1>

            <p>
                ${product.description}
            </p>

            <h2>
                S/ ${product.price.toFixed(2)}
            </h2>

            <button
                class="primary-button"
                data-add-product="${product.id}"
            >
                Agregar al carrito
            </button>

        </section>
    `;
}