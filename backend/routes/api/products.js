const express = require('express');
const asyncHandler = require('express-async-handler');
const {check, validationResult} = require('express-validator');
const {Product} = require('../../db/models');
const {Op} = require('sequelize');

const ProductRepository = require('../../db/products-repository');

const router = express.Router();

router.get('/', asyncHandler(async function(req, res) {
    const products = await ProductRepository.getProducts();
    return res.json({products});
}));

router.get('/:productId', asyncHandler(async function(req, res) {
  const productId = await ProductRepository.getOneProduct(req.params.productId);
  return res.json({productId});
}));

router.get(
    "/search/:searchTerm",
    asyncHandler(async (req, res) => {
      const input = req.params.searchTerm;

      const results = await Product.findAll({
        where: {
          title: {
            [Op.iLike]: `%${input}%`,
          },
        },
        limit: 10,
      });
      res.json({
        results
      });
    })
  );


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
