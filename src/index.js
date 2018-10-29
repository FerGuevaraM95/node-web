const express = require('express');
const app = express();
const path = require('path');

// Settings
app.set('port', 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')

// Midlewares

// Routes
app.get('/', (req, res) => {
    res.render('index', {title: "Node Website"});
})

// Static files

// Listening the server
app.listen(app.get('port'), _=> {
    console.log('server on port', app.get('port'));
});