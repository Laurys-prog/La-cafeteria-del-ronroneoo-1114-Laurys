import assert from 'node:assert/strict';
import { products, calculateTotal } from '../js/products.mjs';

assert.equal(products.length, 6, 'The menu should contain six initial products');
assert.equal(new Set(products.map((product) => product.category)).size, 3, 'The menu should use three categories');
assert.equal(calculateTotal([{ productId: 'cafe-americano', quantity: 2 }]), 14000);
assert.equal(calculateTotal([{ productId: 'croissant', quantity: 1 }, { productId: 'te-frutos-rojos', quantity: 2 }]), 15000);
console.log('catalog.test.mjs: passed');
