const React = require('react');
const { useEffect, useState, useContext } = React;
const PropTypes = require('prop-types');
const Head = require('nordic/head');
const Script = require('nordic/script');
const Style = require('nordic/style');
const serialize = require('serialize-javascript');
const { injectI18n } = require('nordic/i18n');
const Product = require('../../components/Product');
const { CartContext } = require('../../context/CartContext');
const restClient = require('nordic/restclient')({
  timeout: 10000,
  baseURL: '/api'
});

function View(props) {
  const { i18n, translations, imagesPrefix } = props;
  const preloadedState = {
    i18n,
    translations,
    imagesPrefix,
  };

  const [products, setProducts] = useState([]);

  const { selectedProducts } = useContext(CartContext);

  useEffect(() => {
    restClient.get('/getProducts', {
      params: {
        name: 'celular',
      }
    })
      .then(data => {
        setProducts(data.data);
      });
  }, []);

  return (
    <section className="demo">

      <Head>
        <title>
          Product List Page
        </title>
      </Head>

      <Style href="productList.css" />
      <Script>
        {`
           window.__PRELOADED_STATE__ = ${serialize(preloadedState, { isJSON: true })};
           console.log('Product List page is loaded!');
        `}
      </Script>
      <Script src="vendor.js" />
      <Script src="productList.js" />

      <h2>Productos Carrito</h2>
      <hr />

      {
        selectedProducts?.length ?
          selectedProducts.map((cartproduct, id) => (
            <li key={id}>
              <p>Cantidad: {cartproduct.quantity}</p>
              <p>{cartproduct.product.title}</p>
            </li>
          ))
          : <p>Aun no hay nada en el carrito</p>
      }
      <br />

      <h1>Product List</h1>
      <hr />
      <ol>
        {
          products?.length
            ? products.map(p => (
              <Product
                key={p.id}
                i18n={i18n}
                id={p.id}
                title={p.title}
                thumbnail={p.thumbnail}
                price={p.price}
                description={p.description}
              />
            ))
            : <h4>{i18n.gettext('No se encontraron productos. bye')}</h4>
        }
      </ol>
    </section>
  );
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