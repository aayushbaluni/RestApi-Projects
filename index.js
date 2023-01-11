const express = require('express');
const helmet = require('helmet');
const category = require('./routes/category');
const users = require('./routes/Users');
const mongoose = require('mongoose');
const register = require('./routes/RegisterUser');
const login = require('./routes/login');
const app = express();




app.use(helmet());
app.use(express.json());
app.use('/api/category', category)
app.use('/api/users', users);
app.use('/api/user/register', register);
app.use('/api/user/login', login);




mongoose.set('strictQuery', true);
mongoose.connect('mongodb://localhost/restaurant')
    .then(() => console.log("Connected"))
    .catch(err => console.log(err));



app.get('/', (req, res) => {
    res.send("Home");
});



app.listen(3000, () => console.log("Listening on port 3000"));