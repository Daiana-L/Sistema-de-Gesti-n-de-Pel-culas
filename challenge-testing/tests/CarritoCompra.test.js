const CarritoCompra = require ("../index.js");

describe('CarritoCompra', () => {
let carrito;

beforeEach(() => {
    carrito = new CarritoCompra();
});

test('inicia con un carrito vacío', () => {
    expect(carrito.carrito).toEqual([]);
});

test('agrega productos al carrito', () => {
    const producto = { nombre: 'Camiseta', precio: 20 };
    carrito.agregarProducto(producto);
    expect(carrito.carrito).toContain(producto);
});

test('calcula el total correctamente', () => {
    carrito.agregarProducto({ nombre: 'Camiseta', precio: 20 });
    carrito.agregarProducto({ nombre: 'Pantalón', precio: 30 });
    expect(carrito.calcularTotal()).toBe(50);
});

test('aplica descuento correctamente', () => {
    carrito.agregarProducto({ nombre: 'Zapatos', precio: 100 });
    const totalConDescuento = carrito.aplicarDescuento(20);
    expect(totalConDescuento).toBe(80);
});


test('maneja carrito vacío al calcular total', () => {
    expect(carrito.calcularTotal()).toBe(0);
});


});
