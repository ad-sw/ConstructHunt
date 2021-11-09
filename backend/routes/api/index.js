const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const productsRouter = require('./products.js');
const reviewsRouter = require('./reviews.js');


router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use("/products", productsRouter);

router.use("/reviews", reviewsRouter)


module.exports = router;
