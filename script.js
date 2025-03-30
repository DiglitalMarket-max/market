const products = [
    { id: 1, name: "Smartphone", price: 299 },
    { id: 2, name: "Laptop", price: 799 },
    { id: 3, name: "Cuffie Bluetooth", price: 49 },
];

const cart = [];

function displayProducts() {
    const productsContainer = document.getElementById("products");
    productsContainer.innerHTML = "";

    products.slice(0, 3).forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.className = "product";
        productDiv.innerHTML = `
            <h3>${product.name}</h3>
            <p>Prezzo: €${product.price}</p>
            <button onclick="addToCart(${product.id})">Aggiungi al carrello</button>
        `;
        productsContainer.appendChild(productDiv);
    });
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    document.getElementById("cart-count").textContent = cart.length;
}

function showCart() {
    const cartContainer = document.getElementById("cart");
    const cartItems = document.getElementById("cart-items");
    cartItems.innerHTML = "";

    cart.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - €${item.price}`;
        cartItems.appendChild(li);
    });

    cartContainer.style.display = "block";
}

function closeCart() {
    document.getElementById("cart").style.display = "none";
}

document.addEventListener("DOMContentLoaded", displayProducts);
