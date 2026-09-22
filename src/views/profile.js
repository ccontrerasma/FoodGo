import { getOrders } from "../services/cartService.js";

export function profileView() {

    const orders = getOrders();

    return `
        <section class="section profile-view">

            <div class="profile-header">

                <div class="profile-avatar">
                    👤
                </div>

                <h1>
                    Mi perfil
                </h1>

                <p>
                    Usuario FoodGo
                </p>

            </div>

            <div class="profile-card">

                <div>
                    <span>👤</span>
                    <strong>Información personal</strong>
                </div>

                <p>
                    Nombre: Usuario FoodGo
                </p>

                <p>
                    Correo: usuario@foodgo.com
                </p>

            </div>

            <div class="profile-card">

                <div>
                    <span>📦</span>
                    <strong>Mis pedidos</strong>
                </div>

                ${
                    orders.length === 0
                    ? `
                        <p>
                            Aún no tienes pedidos realizados.
                        </p>
                    `
                    : `
                        <div class="orders-list">

                            ${
                                orders
                                    .slice()
                                    .reverse()
                                    .map(order => `

                                        <div class="order-card">

                                            <div class="order-header">

                                                <strong>
                                                    Pedido #${order.id}
                                                </strong>

                                                <span class="order-status">
                                                    ${order.status}
                                                </span>

                                            </div>

                                            <div class="order-info">

                                                <span>
                                                    📅 ${order.date}
                                                </span>

                                                <span>
                                                    🛍️ ${
                                                        order.products
                                                            .map(product =>
                                                                `${product.name} x${product.quantity}`
                                                            )
                                                            .join(", ")
                                                    }
                                                </span>

                                                <strong>
                                                    Total: S/ ${order.total.toFixed(2)}
                                                </strong>

                                            </div>

                                        </div>

                                    `)
                                    .join("")
                            }

                        </div>
                    `
                }

            </div>

            <div class="profile-card">

                <div>
                    <span>⚙️</span>
                    <strong>Configuración</strong>
                </div>

                <p>
                    Preferencias de la aplicación
                </p>

            </div>

        </section>
    `;
}