const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Lista de usuarios')
});

router.post('/', (req, res) => {
    res.send('Usuarios creado');
});

router.get('/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`Deralles del usuarios ${userId}`)
})

router.put('/:id', (req, res) => {
    const idUser = req.params.id;
    
})

module.exports = router;