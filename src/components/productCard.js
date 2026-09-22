export function createProductCard(product) {

    return `
        <article class="product-card">

            <div class="product-image">
                ${product.emoji}
            </div>

            <div class="product-info">

                <span class="product-category">
                    ${product.category}
                </span>

                <h3>
                    ${product.name}
                </h3>

                <p>
                    ${product.description}
                </p>

                <div class="product-bottom">

                    <strong>
                        S/ ${product.price.toFixed(2)}
                    </strong>

                    <button
                        class="add-button"
                        data-product-id="${product.id}"
                    >
                        +
                    </button>

                </div>

            </div>

        </article>
    `;
}