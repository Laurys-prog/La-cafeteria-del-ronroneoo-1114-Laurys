import { calculateTotal, getProductById, products } from './products.mjs';

const cart = [];
const formatter = new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 });
const productList = document.querySelector('#product-list');
const cartList = document.querySelector('#cart-list');
const cartCount = document.querySelector('#cart-count');
const cartTotal = document.querySelector('#cart-total');

function addProduct(productId) {
  const item = cart.find((cartItem) => cartItem.productId === productId);
  if (item) item.quantity += 1;
  else cart.push({ productId, quantity: 1 });
  renderCart();
}

function changeQuantity(productId, change) {
  const item = cart.find((cartItem) => cartItem.productId === productId);
  if (!item) return;
  item.quantity += change;
  if (item.quantity <= 0) cart.splice(cart.indexOf(item), 1);
  renderCart();
}

function renderProducts() {
  productList.innerHTML = products.map((product) => `
    <article class="product-card">
      <p class="category">${product.category}</p>
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <div class="product-footer"><strong>${formatter.format(product.price)}</strong><button data-add="${product.id}" type="button">Agregar</button></div>
    </article>`).join('');
}

function renderCart() {
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartCount.textContent = String(count);
  cartTotal.textContent = formatter.format(calculateTotal(cart));
  cartList.innerHTML = cart.length ? cart.map((item) => {
    const product = getProductById(item.productId);
    return `<li><span>${product.name}</span><div class="quantity"><button type="button" data-change="-1" data-id="${product.id}" aria-label="Quitar una unidad de ${product.name}">−</button><b>${item.quantity}</b><button type="button" data-change="1" data-id="${product.id}" aria-label="Agregar una unidad de ${product.name}">+</button></div></li>`;
  }).join('') : '<li class="empty-cart">Aún no hay productos en la comanda.</li>';
}

productList.addEventListener('click', (event) => {
  const productId = event.target.dataset.add;
  if (productId) addProduct(productId);
});

cartList.addEventListener('click', (event) => {
  const { id, change } = event.target.dataset;
  if (id && change) changeQuantity(id, Number(change));
});

renderProducts();
renderCart();
