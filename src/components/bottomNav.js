export function createBottomNav() {

    return `
        <nav class="bottom-nav">

            <button
                class="nav-item"
                data-view="home"
            >
                <span>🏠</span>
                <small>Inicio</small>
            </button>

            <button
                class="nav-item"
                data-view="products"
            >
                <span>🍔</span>
                <small>Productos</small>
            </button>

            <button
                class="nav-item"
                data-view="cart"
            >
                <span>🛒</span>
                <small>Carrito</small>
            </button>

            <button
                class="nav-item"
                data-view="profile"
            >
                <span>👤</span>
                <small>Perfil</small>
            </button>

        </nav>
    `;
}