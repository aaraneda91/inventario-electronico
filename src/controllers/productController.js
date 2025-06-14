// src/controllers/productController.js
const { getDb } = require('../database/connection'); // Importa la función para obtener el pool de DB
const ProductModel = require('../models/Product');

const getAllProducts = async (req, res) => {
    try {
        const products = await ProductModel.findAll();
        res.json(products);
    } catch (error) {
        console.error('Error al obtener los productos:', error);
        res.status(500).json({ message: 'Error interno del servidor al obtener productos.' });
    }
};

const createProduct = async (req, res) => {
    try {
        const newProduct = await ProductModel.create(req.body);
        // --- 1. Validación (MUY RECOMENDADO para POST/PUT) ---
        // Aquí podrías añadir validaciones más robustas (ej. con express-validator)
        const { nombre, precio_neto, precio_bruto, stock, id_categoria } = req.body;

        if (!nombre || precio_neto === undefined || precio_bruto === undefined || stock === undefined) {
            // Ejemplo de validación básica: campos obligatorios
            return res.status(400).json({ message: 'Todos los campos obligatorios (nombre, precio_neto, precio_bruto, stock) deben ser proporcionados.' });
        }
        if (isNaN(precio_neto) || isNaN(precio_bruto) || isNaN(stock) || precio_neto < 0 || precio_bruto < 0 || stock < 0) {
            return res.status(400).json({ message: 'Precio neto, precio bruto y stock deben ser números positivos.' });
        }
        // Si usas id_categoria, asegúrate de que sea un número válido.
        if (id_categoria !== undefined && isNaN(id_categoria)) {
            return res.status(400).json({ message: 'La categoría ID debe ser un número.' });
        }
        // --- Fin de Validación ---

        res.status(201).json({ message: 'Producto creado exitosamente', product: newProduct});
    } catch (error) {
        res.status(500).json({ message: 'Error interno del servidor al crear el producto.' });
    }
}

const updateProduct = async (req, res) => {
    try {
        const updatedProduct = await ProductModel.update(req.params.id, req.body);
        // --- 1. Validación (MUY RECOMENDADO para POST/PUT) ---
        // Aquí podrías añadir validaciones más robustas (ej. con express-validator)
        const { nombre, precio_neto, precio_bruto, stock, id_categoria } = req.body;

        if (!nombre || precio_neto === undefined || precio_bruto === undefined || stock === undefined) {
            // Ejemplo de validación básica: campos obligatorios
            return res.status(400).json({ message: 'Todos los campos obligatorios (nombre, precio_neto, precio_bruto, stock) deben ser proporcionados.' });
        }
        if (isNaN(precio_neto) || isNaN(precio_bruto) || isNaN(stock) || precio_neto < 0 || precio_bruto < 0 || stock < 0) {
            return res.status(400).json({ message: 'Precio neto, precio bruto y stock deben ser números positivos.' });
        }
        // Si usas id_categoria, asegúrate de que sea un número válido.
        if (id_categoria !== undefined && isNaN(id_categoria)) {
            return res.status(400).json({ message: 'La categoría ID debe ser un número.' });
        }
        // --- Fin de Validación ---
        res.status(201).json({ message: 'Producto actualizado exitosamente', product: updatedProduct});
    } catch (error) {
        res.status(500).json({ message: 'Error interno del servidor al actualizar el producto.' });
    }
}

module.exports = {
    getAllProducts,
    createProduct,
    updateProduct
};