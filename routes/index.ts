/*
 * GET home page.
 */
import express = require('express');
const router = express.Router();

router.get('/', (req: express.Request, res: express.Response) => {
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

export default router;