/**
 * Module dependencies
 */
const router = require('nordic/ragnar').router();
const config = require('nordic/config');
const { layoutMiddleware } = require('nordic/layout');
const i18nMiddleware = require('nordic/i18n/middleware');
const polyfillsMiddleware = require('nordic/script/polyfills-middleware');

/**
 * Set up mocks
 */
require('../../mocks');

/**
 * Routers
 */

const formsRouter = require('../pages/forms');
const productListRoute = require('../pages/productList');
const registryFormRoute = require('../pages/registryForm');
const productsRoute = require('../pages/products');


/**
 * Use global middlewares
 */
router.use(layoutMiddleware());
router.use(i18nMiddleware(config.i18n));
router.use(polyfillsMiddleware(config.polyfillLimits));

/**
 * Redirect
 */
// router.get('/', (req, res) => res.redirect(`${config.ragnar.basePath}forms`));

/**
 * Mount routers
 */

router.use('/forms', formsRouter);
router.use('/productList', productListRoute);
router.use('/registryForm', registryFormRoute);
router.use('/products', productsRoute);
/**
 * Expose router
 */
module.exports = router;
