const React = require('react');
const { useRef, useContext } = React;
const PropTypes = require('prop-types');
const Image = require('nordic/image');
const { CartContext } = require('../../context/CartContext');
const restclient = require('nordic/restclient')({
    timeout: 10000,
    baseURL: '/api'
});

const Product = (props) => {

    const { i18n, id, title, thumbnail, price, description } = props

    const { selectedProducts, setSelectedProducts } = useContext(CartContext);

    const quantityRef = useRef();

    const handleSubmit = (e, id) => {
        e.preventDefault();

        restclient.get('/getProduct', {
            params: {
                id: id
            }
        })
            .then(product => {

                let productFind = selectedProducts.find(e => e.product.id === id);

                // let indexProduct = selectedProducts.indexOf(e => e.product.id === id);
                if (!productFind) {

                    setSelectedProducts(products => [...products, {
                        quantity: parseInt(quantityRef.current.value) || 1,
                        product: product.data
                    }]);
                    quantityRef.current.value = '';


                }
                else {
            
                    let indexProduct = selectedProducts.indexOf(productFind);
                    let productos = selectedProducts;
                    let cantidadActual = productos[indexProduct].quantity;
                    setSelectedProducts(
                        productos.map(p =>
                            p.product.id === productFind.product.id
                                ? { ...p, quantity: cantidadActual + 1 } : p
                        )
                    )


                }

            })
            .catch(err => {
                console.log(err)
                alert('No se pudo agregar el producto.');
            });


    }

    return (
        <li className='card' >
            <figure className="img">
                <Image src={thumbnail} alt={i18n.gettext(title)} lazyload="off" />
            </figure>
            <div className="info-products">
                <h4 className='title-product'>{i18n.gettext(title)} </h4>
                <h3 className='price'>${price}</h3>

                <form onSubmit={e => handleSubmit(e, id)}>
                    <label>Cantidad: </label>
                    <input type="number" ref={quantityRef} />
                    <button type="submit">{i18n.gettext('Agregar al carrito')}</button>
                </form>

                <p>{i18n.gettext(description)}</p>
            </div>
        </li>
    )
}

Product.propTypes = {
    i18n: PropTypes.shape({
        gettext: PropTypes.func.isRequired,
    }).isRequired,
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    description: PropTypes.string,
    price: PropTypes.number
}

module.exports = Product;