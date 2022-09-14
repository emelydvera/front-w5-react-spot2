const React = require('react');
const { hydrate } = require('nordic/hydrate');
const { I18nProvider, I18n } = require('nordic/i18n');
const ImageProvider = require('nordic/image/provider');
const ProductsView = require('../pages/products/view')


const {
    imagesPrefix, translations, products, q, limit
} = window.__PRELOADED_STATE__;

const i18n = new I18n({ translations })

hydrate(
    <I18nProvider i18n={i18n}>
        <ImageProvider prefix={imagesPrefix}>
            <ProductsView
                products={products}
                q={q}
                limit={limit}
            />
        </ImageProvider>
    </I18nProvider>,
    document.getElementById('root-app')
)