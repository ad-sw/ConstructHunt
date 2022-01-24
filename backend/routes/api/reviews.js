const express = require('express');
const asyncHandler = require('express-async-handler');
const { check, validationResult } = require('express-validator');
const { User, Product, Review } = require("../../db/models");

const ReviewRepository = require('../../db/reviews-repository');

const router = express.Router();

router.get('/', asyncHandler(async function(req, res) {
    const reviews = await Review.findAll({
        order: [["createdAt", "DESC"]],
        include: [{model: Product}, {model: User}],
    });
    return res.json(reviews);
}));

router.get('/:productId', asyncHandler(async function(req, res) {
    const reviews = await ReviewRepository.getReviews(req.params.productId);
    return res.json({reviews});
}));

router.post('/:productId', asyncHandler(async function(req, res) {
    const review = await ReviewRepository.addReview(req.body);
    return res.json({review});
}));

router.put("/:reviewId", asyncHandler(async function (req, res) {
      const review = await ReviewRepository.updateReview(req.body);
      return res.json({review});
}));

router.delete("/:reviewId", asyncHandler(async function (req, res) {
    const reviewId = await ReviewRepository.deleteReview(req.params.reviewId);
    return res.json({reviewId});
}));

module.exports = router;
