require('dotenv').config();
const express = require('express');
const cors = require('cors');
const passport = require('passport');
const cookieSession = require('cookie-session');
const passportSetup = require('./passport');
const authRoute = require('./routes/auth');
const app = express();

app.use(
    cookieSession({
         name:"session",
         keys:["cyberwolve"],
         maxAge:24*50*60*100
        })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(
    cors({
        origin:'http://localhost:3000/',
        methods:"GET,POST,PUT,DELETE",
        credentials:true,
    })
);

app.use('/auth',authRoute);

const port = process.env.PORT || 5000;
app.listen(port,()=>console.log(`Listening on PORT ${port}...`));