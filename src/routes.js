const express = require('express');

const app = express();

const bodyParser = require('body-parser');

const cors = require('cors');

require('express-async-errors');


const userRoute = require('./routes/user-route.js');



app.use(cors());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Header',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).send({});
    }
    next();
});


app.use('/user', userRoute);


// app.use((req, res, next) => {
//     const erro = new Error('Não encontrado');
//     erro.status = 404;
//     next(erro);
// });


module.exports = app;