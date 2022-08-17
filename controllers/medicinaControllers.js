const db = require('../database/connection');

const getMedicinas = async (req, res) => {
    try {
        const query = `SELECT medicina.id,medicina.nombre,categoria.nombre as categoria,
            descripcion,precio,stock,unidades_caja 
            FROM medicina
            JOIN categoria ON categoria.id = categoria_id;`;
        const result = await db.query(query);
        res.json(result.rows);
    }
    catch (error) {
        console.log(error);
    }
}

const addMedicina = async (req, res) => {
    try {
        const { nombre, descripcion, precio, stock, categoria_id, unidades_caja } = req.body;
        const result = await db.query('INSERT INTO medicina (nombre, descripcion, precio, stock, categoria_id, unidades_caja) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *', 
            [nombre, descripcion, precio, stock, categoria_id, unidades_caja]);
        res.json({"Message": "Medicina agregada", medicina: result.rows[0]});
    }
    catch (error) {
        console.log(error);
    }
}

const updateMedicina = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, descripcion, precio, stock, categoria_id, unidades_caja } = req.body;
        const result = await db.query('UPDATE medicina SET nombre = $1, descripcion = $2, precio = $3, stock = $4, categoria_id = $5, unidades_caja = $6 WHERE id = $7 RETURNING *',
            [nombre, descripcion, precio, stock, categoria_id, unidades_caja, id]);
        res.json({"Message": "Medicina actualizada", medicina: result.rows[0]});
    }
    catch (error) {
        console.log(error);
    }
}

const deleteMedicina = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await db.query('DELETE FROM medicina WHERE id = $1 ', [id]);
        res.json({"Message": "Medicina eliminada"});
    }
    catch (error) {
        console.log(error);
    }
}



module.exports = {
    getMedicinas,
    addMedicina,
    updateMedicina,
    deleteMedicina,
}