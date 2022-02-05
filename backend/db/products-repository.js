const { Product } = require("./models");

async function getProducts() {
    return await Product.findAll();
}

async function getOneProduct(productId) {
    const product = await Product.findByPk(productId);
    if (!product) throw new Error('Cannot find item');

    return productId;
}

async function addProduct(payload) {
    const product = await Product.create(payload);
    if (!product) throw new Error('Cannot find item');
    
    return product;
}

async function updateProduct(payload) {
    const product = await Product.findByPk(payload.productId);
    await product.update({title: payload.title, imageUrl: payload.imageURL, link: payload.link, description: payload.description});
    return product;
}

async function deleteProduct(productId) {
    const product = await Product.findByPk(productId);
    if (!product) throw new Error('Cannot find item');
    // await Product.destroy({ where: { id: product.id }});
    await product.destroy()
    const products = await Product.findAll()
    return products;
}

module.exports = {
    getProducts,
    getOneProduct,
    addProduct,
    deleteProduct,
    updateProduct
};
