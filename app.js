/** EXTERNAL DEPENDENCIES */
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const lowdb = require("lowdb")

/** ROUTERS */
//const apiRouter = require("./routes/api")
const apiRouter = require('./routes/api');
const usersRouter = require('./routes/users');

/** INIT */
const app = express();

/** LOGGING */
app.use(logger('dev'));

/** REQUEST PARSERS */
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

/** STATIC FILES*/
app.use(express.static(path.join(__dirname, 'public')));

/** ROUTES */
app.use('/api', apiRouter);
app.use('/users', usersRouter);
//url
// const port =  process.env.PORT || 7090
// app.listen(port, () => console.log("server started on port:" + port))


/** EXPORT PATH */
module.exports = app;
