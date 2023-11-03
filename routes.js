const express = require('express');
const router = express.Router();
const { findAll , cadastraProduto, atualizaProduto, deletaProduto } = require('./src/controllers/productController');

//rotas dos produtos
router.post("/product", cadastraProduto);
router.put("/product", atualizaProduto);
router.delete("/product", deletaProduto);
router.get("/product", findAll);





module.exports = router;