export const products = [
  { id: 'cafe-americano', name: 'Café americano', category: 'Cafés', description: 'Café suave de origen colombiano.', price: 7000 },
  { id: 'capuchino', name: 'Capuchino', category: 'Cafés', description: 'Espresso, leche vaporizada y espuma.', price: 9000 },
  { id: 'te-frutos-rojos', name: 'Té de frutos rojos', category: 'Bebidas frías', description: 'Infusión fría con frutas rojas.', price: 4000 },
  { id: 'limonada-hierbabuena', name: 'Limonada de hierbabuena', category: 'Bebidas frías', description: 'Limonada natural y refrescante.', price: 6000 },
  { id: 'croissant', name: 'Croissant de mantequilla', category: 'Repostería', description: 'Hojaldre recién horneado.', price: 7000 },
  { id: 'torta-chocolate', name: 'Torta de chocolate', category: 'Repostería', description: 'Porción de torta con cacao.', price: 10000 }
];

export const getProductById = (productId) => products.find((product) => product.id === productId);

export const calculateTotal = (cart) => cart.reduce((total, item) => {
  const product = getProductById(item.productId);
  return product ? total + product.price * item.quantity : total;
}, 0);
