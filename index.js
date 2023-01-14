const express = require('express');
const helmet = require('helmet');
const category = require('./routes/category');
const users = require('./routes/Users');
const mongoose = require('mongoose');
const registerUser = require('./routes/RegisterUser');
const loginUser = require('./routes/loginUser');
const loginRestaurant = require('./routes/loginRestaurants');
const registerRestaurant = require('./routes/RegisterRestaurant');
const app = express();
const bodyParser=require('body-parser')



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(helmet());
app.use(express.json());


//they both will take token as inputs;
app.use('/api/category', category)

app.use('/api/users', users);

//restaurant data
app.use('/api/restaurants/register', registerRestaurant);
app.use('/api/restaurants/login', loginRestaurant);


//done;
app.use('/api/user/register', registerUser);
app.use('/api/user/login', loginUser);




mongoose.set('strictQuery', true);
mongoose.connect('mongodb://localhost/restaurant')
    .then(() => console.log("Connected to   Database"))
    .catch(err => console.log(err));


app.get('/', (req, res) => {
    res.send("Home");
});



app.listen(3000, () => console.log("Listening on port 3000"));