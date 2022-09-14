
const router = require('nordic/ragnar').router();
const getProducts = require('./getProducts');
const getProduct = require('./getProduct');
const getProductsList= require('./getProductsList');

router.use('/getProducts', getProducts);
router.use('/getProduct', getProduct);
router.use('/getProductsList', getProductsList);

module.exports = router;