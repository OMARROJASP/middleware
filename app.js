const express = require('express')
const app = express();


// app.use('/error', (req, res, next) => {
//     const error = new Error('Este es un error de prueba');
//     next(error);
// })

// app.use((err, req, res, next) => {
//     console.error(err, stack);
//     res.status(500).send('Algo salio mal');
// })
// error con try-catch
// app.get('/async-error', async(req, res, next) => {
//     try{
//         throw new Error('Error asincronico');
//     }catch(error){
//         next(error)
//     }
// })

app.use((err, req, res, next) => {
    console.log(err.stack);

    if(err.message === 'No encontrado'){
        return res.status(404).json({
            massage: 'Recurso no encontrad',
            error: err.message,
        })
    }

    res.status(500).json({
        message: 'Algo salió mal',
        error: err.message,
    })
})





app.listen(3000, () => {
    console.log("Servidor en http:// localhost:3000")
})