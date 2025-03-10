const express = require('express')
const app = express();

app.use((req, res, next) => {
    console.log('Middleware ejecutado');
    next();
})

app.use('/carb', (req, res, next) => {
    console.log("Middleware solo para prpgramadores");
    next()
});

app.get('/', (req, res) => {
    res.send("Hola middleware")
})

app.listen(3000, () => {
    console.log("Servidor en http:// localhost:3000")
})