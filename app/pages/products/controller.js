const React = require('react');
const config = require('nordic/config');
const ImageProvider = require('nordic/image/provider');
const I18nProvider = require('nordic/i18n/I18nProvider');
const ProductsService = require('../../../services/productsService');
const View = require('../products/view');

const imagesPrefix = config.assets.prefix;

exports.fetchProducts = function fetchProducts(req, res, next) {

    const { siteId } = req.platform;
    const { q, limit } = req.query;

    ProductsService.getProducts (siteId, q, limit)
        .then(data => {
            res.locals.products = data;
            res.locals.q = q;
            res.locals.limit = limit;
            next();

        })
        .catch(err => next(err))
}


exports.render = function render(req, res) {

    const Products = props => (
        <I18nProvider i18n={req.i18n}>
            <ImageProvider prefix={imagesPrefix}>
                <View {...props} />
            </ImageProvider>
        </I18nProvider>
    )

    res.render(Products,
        {
            imagesPrefix,
            translations: req.translations,
            products: res.locals.products,
            q: res.locals.q,
            limit: res.locals.limit,

        }, 
        {
            navigationOptions: {
                type: "lite",
            },
        }
        )


}