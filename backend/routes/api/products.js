const express = require('express');
const asyncHandler = require('express-async-handler');
const { check, validationResult } = require('express-validator');
// const {Product} = require('../../db/models');

const ProductRepository = require('../../db/products-repository');

const router = express.Router();

router.get('/', asyncHandler(async function(req, res) {
    const products = await ProductRepository.getProducts();
    return res.json({products});
}));

router.post('/', asyncHandler(async function(req, res) {
    const product = await ProductRepository.addProduct(req.body);
    return res.json({product});
}));

router.put("/:productId", asyncHandler(async function (req, res) {
      const product = await ProductRepository.updateProduct(req.body);
      return res.json({product});
}));

router.delete("/:productId", asyncHandler(async function (req, res) {
    const productId = await ProductRepository.deleteProduct(req.params.productId);
    return res.json({productId});
}));

module.exports = router;