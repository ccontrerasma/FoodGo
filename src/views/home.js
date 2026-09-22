import { products } from "../data/products.js";
import { createProductCard } from "../components/productCard.js";

export function homeView() {

    const recommended = products.slice(0, 4);

    return `
        <section class="section">

            <div class="welcome">

                <p>¡Hola! 👋</p>

                <h1>
                    ¿Qué deseas comer hoy?
                </h1>

                <span>
                    Encuentra tus comidas favoritas.
                </span>

            </div>

            <div class="search-box">

                <span>🔍</span>

                <input
                    id="home-search"
                    type="text"
                    placeholder="Buscar comida..."
                >

            </div>

            <div class="section-title">

                <h2>Categorías</h2>

            </div>

            <div class="categories">

                <button
                    class="category"
                    data-category="Hamburguesas"
                >
                    <span>🍔</span>
                    <small>Hamburguesas</small>
                </button>

                <button
                    class="category"
                    data-category="Pizzas"
                >
                    <span>🍕</span>
                    <small>Pizzas</small>
                </button>

                <button
                    class="category"
                    data-category="Pollo"
                >
                    <span>🍗</span>
                    <small>Pollo</small>
                </button>

                <button
                    class="category"
                    data-category="Saludable"
                >
                    <span>🥗</span>
                    <small>Saludable</small>
                </button>

            </div>

            <div class="section-title">

                <h2>Recomendados</h2>

                <button data-view="products">
                    Ver todos
                </button>

            </div>

            <div class="products-grid">

                ${recommended
                    .map(createProductCard)
                    .join("")}

            </div>

        </section>
    `;
}