const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');

app.use(express.json());

mongoose.connect(process.env.MONGODB_URI).then(
        () => {console.log("Connection to mongodb establised")},
        err => {console.log("Failed to connect to mongo", err)}
    );

const user = require('./roots/user.root')
const userProduct = require('./roots/user.products.roots')

app.use('/api/users', user)
app.use('/api/user-products', userProduct)

app.listen(port, () => {
    console.log('Server is up');
})

