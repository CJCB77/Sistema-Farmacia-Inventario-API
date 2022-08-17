const express = require('express');
const db = require('./database/connection');
const cors = require('cors');

const medicinasRoutes = require('./routes/medicina');
const categoriaRoutes = require('./routes/categorias');
const clientesRoutes = require('./routes/clientes');

require("dotenv").config();


const app = express();
app.use(express.json());
app.use(cors());

app.use('/api/medicinas', medicinasRoutes);
app.use('/api/categorias', categoriaRoutes);
app.use('/api/clientes', clientesRoutes);

app.get("/",(req,res) => {
    res.json({"Message":"API de Farmacia para la Fundacion Tacita Caliente"})
})

const startApp = async () => {
    try {
        await db.connect()
        .then(() => {
            console.log("Database connected");
        })
        .then(() => {
            app.listen(process.env.PORT,() => {
                console.log(`Server running on port ${process.env.PORT}`)
            })
        })
        .catch(err => {
            console.log(err);
        })
    }
    catch (error) {
        console.log(error);
    }
}

startApp();
