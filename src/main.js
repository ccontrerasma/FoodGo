import "./styles/main.css";
import "./styles/header.css";
import "./styles/navigation.css";
import "./styles/products.css";
import "./styles/responsive.css";

import { createHeader } from "./components/header.js";
import { createBottomNav } from "./components/bottomNav.js";

import { products } from "./data/products.js";
import { homeView } from "./views/home.js";
import { productsView } from "./views/products.js";
import { detailView } from "./views/detail.js";
import { cartView } from "./views/cart.js";
import { profileView } from "./views/profile.js";

import {
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    saveOrder,
    getCartCount
} from "./services/cartService.js";

const app = document.querySelector("#app");

let currentView = "home";
let selectedProductId = null;

function render() {

    let content = "";

    if (currentView === "home") {
        content = homeView();
    }

    if (currentView === "products") {
        content = productsView();
    }

    if (currentView === "detail") {
        content = detailView(selectedProductId);
    }

    if (currentView === "cart") {
        content = cartView();
    }

    if (currentView === "profile") {
        content = profileView();
    }

    app.innerHTML = `
        <div class="app">

            ${createHeader()}

            <main>
                ${content}
            </main>

            ${createBottomNav()}

        </div>
    `;

    updateActiveNavigation();
}

function navigate(view) {

    currentView = view;

    render();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

function updateActiveNavigation() {

    document
        .querySelectorAll(".nav-item")
        .forEach(button => {

            button.classList.remove("active");

            if (
                button.dataset.view === currentView
            ) {
                button.classList.add("active");
            }

        });
}

document.addEventListener("click", event => {

    const viewButton =
        event.target.closest("[data-view]");

    if (viewButton) {

        navigate(
            viewButton.dataset.view
        );

        return;
    }

    const productCard =
        event.target.closest(".product-card");

    if (
        productCard &&
        !event.target.closest(".add-button")
    ) {

        const button =
            productCard.querySelector(
                ".add-button"
            );

        selectedProductId =
            Number(button.dataset.productId);

        navigate("detail");

        return;
    }

    const addButton =
        event.target.closest(".add-button");

    if (addButton) {

    const productId =
        Number(addButton.dataset.productId);

    const product =
        products.find(
            item => item.id === productId
        );

        addToCart(product);

        alert(
            `${product.name} agregado al carrito 🛒`
        );

        return;
    }

    const detailAdd =
        event.target.closest(
            "[data-add-product]"
        );

   if (detailAdd) {

    const productId =
        Number(
            detailAdd.dataset.addProduct
        );

    const product =
        products.find(
            item => item.id === productId
        );

        addToCart(product);

        alert(
            `${product.name} agregado al carrito 🛒`
        );

        navigate("cart");

        return;
    }

    const increase =
        event.target.closest(
            "[data-increase]"
        );

    if (increase) {

        increaseQuantity(
            Number(increase.dataset.increase)
        );

        render();

        return;
    }

    const decrease =
        event.target.closest(
            "[data-decrease]"
        );

    if (decrease) {

        decreaseQuantity(
            Number(decrease.dataset.decrease)
        );

        render();

        return;
    }

    const remove =
        event.target.closest(
            "[data-remove]"
        );

    if (remove) {

        removeFromCart(
            Number(remove.dataset.remove)
        );

        render();

        return;
    }
        const checkoutButton =
        event.target.closest("#checkout-button");

    if (checkoutButton) {

        const order = saveOrder();

        alert(
            `¡Pedido realizado correctamente! 🎉\n\n` +
            `Pedido #${order.id}\n` +
            `Total: S/ ${order.total.toFixed(2)}`
        );

        navigate("profile");

        return;
    }



});

document.addEventListener("input", event => {

    if (
        event.target.id === "products-search"
    ) {

        const text =
            event.target.value.toLowerCase();

        const cards =
            document.querySelectorAll(
                ".product-card"
            );

        cards.forEach(card => {

            const name =
                card
                    .querySelector("h3")
                    .textContent
                    .toLowerCase();

            card.style.display =
                name.includes(text)
                    ? ""
                    : "none";
        });
    }
});

render();