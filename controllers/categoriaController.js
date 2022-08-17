const db = require('../database/connection');

const getCategorias = async (req, res) => {
    try {
        const query = `SELECT * FROM categoria;`;
        const result = await db.query(query);
        res.json(result.rows);
    }
    catch (error) {
        console.log(error);
    }
}

const getCategoriaByNombre = async (req, res) => {
    try {
        const { nombre } = req.params;
        const query = `SELECT * FROM categoria WHERE nombre = $1;`;
        const result = await db.query(query, [nombre]);
        res.json(result.rows[0]);
    }
    catch (error) {
        console.log(error);
    }
}

module.exports = {
    getCategorias,
    getCategoriaByNombre,
}