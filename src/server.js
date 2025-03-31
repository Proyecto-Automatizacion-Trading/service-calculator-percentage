const express = require('express');
const calculateRoutes = require('./routes/calculateRoutes');

const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/api/calculator', calculateRoutes);

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});