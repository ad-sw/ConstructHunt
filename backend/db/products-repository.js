const { Product } = require("./models");

async function getProducts() {
    return await Product.findAll();
}

async function addProduct(payload) {
    const product = await Product.create(payload);
    return product;
}

async function updateProduct(payload) {
    const product = await Product.findByPk(payload.productId);
    await product.update({title: payload.title, imageUrl: payload.imageURL, upvotes: payload.upvotes, link: payload.link, description: payload.description});
    return product;
}

async function deleteProduct(productId) {
    const product = await Product.findByPk(productId);
    if (!product) throw new Error('Cannot find item');

    await product.destroy();
    return productId;
}

module.exports = {
    getProducts,
    addProduct,
    deleteProduct,
    updateProduct
};
