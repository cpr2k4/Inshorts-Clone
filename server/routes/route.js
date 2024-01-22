const express = require('express');
const {getNews} = require('../controller/service-controller')

const router = express.Router();

router.get("/news",getNews)

module.exports = router;