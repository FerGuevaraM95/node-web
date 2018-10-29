const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', { title: "Node Website" });
});

router.get('/contact', (req, res) => {
    res.render('contact', { title: "Contact Page" });
});

module.exports = router;