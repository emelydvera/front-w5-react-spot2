const React = require('react');
const { useState, useEffect } = React;
const PropTypes = require('prop-types');
const Script = require('nordic/script');
const serialize = require('serialize-javascript');
const { injectI18n } = require('nordic/i18n');
const { ToUpperCase, Suma, AddToArray } = require('../../helpers/functions');
const restclient = require('nordic/restclient')({
    timeout: 5000,
    baseURL: '/api'
});

const View = (props) => {

    const { i18n, translations, imagesPrefix, products, q, limit } = props;
    const preloadedState = {
        i18n,
        translations,
        imagesPrefix,
        products,
        q,
        limit
    }

    const [data, setData] = useState();
    const [offset, setOffset] = useState(0);


    const handleSig = () => {
        setOffset(offset => offset + 10);

    }

    const handleAnt = () => {
        setOffset(offset => offset - 10)

    }

    const getProducts = async () => {

        try {

            const res = await restclient.get('./getProductslist', {
                params: {
                    q: q,
                    limit,
                    offset
                }
            })
            setData(res.data)
        } catch (error) {

            console.log(error);
        }

    }

    useEffect(() => {

        getProducts()

    }, [offset]);

    return (
        <>
            <Script>
                {`
                    window.__PRELOADED_STATE__ = ${serialize(preloadedState, { isJSON: true })};
                    console.log('Page is loaded!');
                `}
            </Script>
            <Script src='vendor.js' />
            <Script src='products.js' />

            <h1>Productos</h1>

            {
                data && data.map((p, i) => {
                    return (
                        <p key={i}>{p.id}</p>
                    )
                })
            }

            <button onClick={handleAnt}  > Anterior </button>
            <button onClick={handleSig} >Siguiente </button>

            {ToUpperCase('hola amigo mio')}
            {Suma(5,6)}
            {AddToArray}

        </>
    )
}

View.propTypes = {
    i18n: PropTypes.shape({
        gettext: PropTypes.func.isRequired,
    }).isRequired,
    translations: PropTypes.shape({}),
};

View.defaultProps = {
    translations: {},
    imagesPrefix: '/',
};

module.exports = injectI18n(View);
