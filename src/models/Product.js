
// src/models/Product.js
const { getDb } = require('../database/connection'); // Asumo que getDb() es el pool de conexiones

class ProductModel {
    constructor() {
        this.db = getDb(); // Obtiene el pool de conexiones al inicializar el modelo
    }

    async findAll() {
        const [rows] = await this.db.execute('SELECT idproductos, nombre, precio_neto, precio_bruto, stock FROM productos');
        return rows;
    }

    async findById(id) {
        const [rows] = await this.db.execute('SELECT idproductos, nombre, precio_neto, precio_bruto, stock FROM productos WHERE idproductos = ?', [id]);
        return rows[0]; // Devuelve el primer resultado (o undefined si no se encuentra)
    }

    async create(productData) {
        const { nombre, precio_neto, precio_bruto, stock, id_categoria } = productData;
        const query = "INSERT INTO productos (nombre, precio_neto, precio_bruto, stock, id_categoria) VALUES (?, ?, ?, ?, ?)";
        const params = [nombre, precio_neto, precio_bruto, stock, id_categoria];
        const [result] = await this.db.execute(query, params);
        // IMPORTANTE: Devuelve el producto con el ID generado por la base de datos
        return { idproductos: result.insertId, ...productData };
    }

    async update(id, productData) {
        const { nombre, precio_neto, precio_bruto, stock } = productData;
        const [result] = await this.db.execute(
            'UPDATE productos SET nombre = ?, precio_neto = ?, precio_bruto = ?, stock = ? WHERE idproductos = ?',
            [nombre, precio_neto, precio_bruto, stock, id]
        );
        return result.affectedRows > 0; // Devuelve true si se actualizó una fila
    }

    async delete(productData) {
        const { idproduct } = productData;
        const [result] = await this.db.execute('DELETE FROM productos WHERE idproductos = ?', [idproduct]);
        return result.affectedRows > 0; // Devuelve true si se eliminó una fila
    }
}

module.exports = new ProductModel(); // Exporta una instancia del modelo