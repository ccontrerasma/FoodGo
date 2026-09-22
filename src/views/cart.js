import {
    getCart,
    getCartTotal,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    saveOrder
} from "../services/cartService.js";

export function cartView() {

    const cart = getCart();

    if (cart.length === 0) {

        return `
            <section class="section empty-cart">

                <div class="empty-icon">
                    🛒
                </div>

                <h1>
                    Tu carrito está vacío
                </h1>

                <p>
                    Agrega algunos productos para continuar.
                </p>

                <button
                    class="primary-button"
                    data-view="products"
                >
                    Ver productos
                </button>

            </section>
        `;
    }

    return `
        <section class="section">

            <h1>Mi carrito</h1>

            <div class="cart-list">

                ${cart.map(item => `

                    <article class="cart-item">

                        <div class="cart-item-image">
                            ${item.emoji}
                        </div>

                        <div class="cart-item-info">

                            <h3>
                                ${item.name}
                            </h3>

                            <strong>
                                S/ ${item.price.toFixed(2)}
                            </strong>

                            <div class="quantity-controls">

                                <button
                                    data-decrease="${item.id}"
                                >
                                    −
                                </button>

                                <span>
                                    ${item.quantity}
                                </span>

                                <button
                                    data-increase="${item.id}"
                                >
                                    +
                                </button>

                            </div>

                            <button
                                class="remove-button"
                                data-remove="${item.id}"
                            >
                                Eliminar
                            </button>

                        </div>

                    </article>

                `).join("")}

            </div>

            <div class="cart-summary">

                <h2>
                    Total:
                    S/ ${getCartTotal().toFixed(2)}
                </h2>

                <button
    class="primary-button"
    id="checkout-button"
>
    Realizar pedido
</button>

            </div>

        </section>
    `;
}