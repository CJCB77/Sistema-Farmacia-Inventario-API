const db = require('../database/connection');

const getClientes = async (req, res) => {
    try {
        const query = `SELECT * FROM cliente;`;
        const result = await db.query(query);
        res.json(result.rows);
    }
    catch (error) {
        console.log(error);
    }
}

const getClienteByNombre = async (req, res) => {
    try {
        const { nombre } = req.params;
        const query = `SELECT * FROM cliente WHERE nombre = $1;`;
        const result = await db.query(query, [nombre]);
        res.json(result.rows[0]);
    }
    catch (error) {
        console.log(error);
    }
}

const addCliente = async (req, res) => {
    try {
        const { nombre, cedula, direccion, celular,correo } = req.body;
        const result = await db.query('INSERT INTO cliente (nombre, cedula, direccion, celular,correo) VALUES ($1, $2, $3, $4, $5) RETURNING *',
            [nombre, cedula, direccion, celular,correo]);
        res.json({"Message": "Cliente agregado", cliente: result.rows[0]});
    }
    catch (error) {
        console.log(error);
    }
}

const updateCliente = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, cedula, direccion, celular,correo } = req.body;
        const result = await db.query('UPDATE cliente SET nombre = $1, cedula = $2, direccion = $3, celular = $4,correo = $5 WHERE id = $6 RETURNING *',
            [nombre, cedula, direccion, celular,correo, id]);
        res.json({"Message": "Cliente actualizado", cliente: result.rows[0]});
    }
    catch (error) {
        console.log(error);
    }
}

const deleteCliente = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await db.query('DELETE FROM cliente WHERE id = $1 ', [id]);
        res.json({"Message": "Cliente eliminado"});
    }
    catch (error) {
        console.log(error);
    }
}



module.exports = {
    getClientes,
    getClienteByNombre,
    addCliente,
    updateCliente,
    deleteCliente,
}