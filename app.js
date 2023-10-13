import express from 'express'
import usuarioRoute from './routes/usuarioRoute.js'

//Crear app
const app = express()

//Habilitar PUG
app.set('view engine', 'pug');
app.set('views','./views')

//carpeta publica
app.use( express.static('public') )

//routes 
app.use('/auth',usuarioRoute)

//definir puerto
const port = 4000;
app.listen(port, () => {
    console.log(`El servidor funciona en el puerto ${port}`);
});
