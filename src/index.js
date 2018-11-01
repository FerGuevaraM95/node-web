const express = require('express');
const app = express();
const path = require('path');

const indexRoute = require('./routes')

// Settings
app.set('port', 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs')

// Midlewares

// Routes
app.use(indexRoute);

// Static files

// Listening the server
app.listen(app.get('port'), _=> {
    console.log('server on port', app.get('port'));
});