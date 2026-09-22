let cart = [];

export function getCart() {
    return cart;
}

export function addToCart(product) {
    const existingProduct = cart.find(
        item => item.id === product.id
    );

    if (existingProduct) {
        existingProduct.quantity++;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }
}

export function increaseQuantity(productId) {
    const product = cart.find(
        item => item.id === productId
    );

    if (product) {
        product.quantity++;
    }
}

export function decreaseQuantity(productId) {
    const product = cart.find(
        item => item.id === productId
    );

    if (product) {
        product.quantity--;

        if (product.quantity <= 0) {
            removeFromCart(productId);
        }
    }
}

export function removeFromCart(productId) {
    cart = cart.filter(
        item => item.id !== productId
    );
}

export function getCartTotal() {
    return cart.reduce(
        (total, item) =>
            total + item.price * item.quantity,
        0
    );
}

export function getCartCount() {
    return cart.reduce(
        (total, item) =>
            total + item.quantity,
        0
    );
}

export function saveOrder() {

    const orders =
        JSON.parse(
            localStorage.getItem("foodgo_orders")
        ) || [];

    const newOrder = {
        id: Date.now(),
        date: new Date().toLocaleString("es-PE"),
        products: [...cart],
        total: getCartTotal(),
        status: "Pendiente"
    };

    orders.push(newOrder);

    localStorage.setItem(
        "foodgo_orders",
        JSON.stringify(orders)
    );

    cart = [];

    return newOrder;
}

export function getOrders() {

    return JSON.parse(
        localStorage.getItem("foodgo_orders")
    ) || [];
}