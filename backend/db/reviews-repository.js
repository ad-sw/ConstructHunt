const { Review } = require("./models");

async function getReviews() {
    return await Review.findAll();
}

async function addReview(payload) {
    const review = await Review.create(payload);
    return review;
}

async function updateReview(payload) {
    const review = await Review.findByPk(payload.reviewId);
    await review.update({review: payload.review});
    return review;
}

async function deleteReview(reviewId) {
    const review = await Review.findByPk(reviewId);
    if (!review) throw new Error('Cannot find item');

    await review.destroy();
    return reviewId;
}

module.exports = {
    getReviews,
    addReview,
    updateReview,
    deleteReview
};
