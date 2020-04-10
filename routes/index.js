"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * GET home page.
 */
const express = require("express");
const router = express.Router();
router.get('/', (req, res) => {
    res.render('index', { title: 'Express' });
});
router.get('/home', function (req, res) {
    res.send("Hello World from Home!");
});
router.get('/test', function (req, res) {
    res.send("Test [ok]!");
});
router.post('/pedidos', function (req, res) {
    res.send("pedidos from  Home!");
});
exports.default = router;
//# sourceMappingURL=index.js.map