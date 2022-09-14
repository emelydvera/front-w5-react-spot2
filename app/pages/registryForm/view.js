const React = require("react");
const { useState, useEffect } = React;
const Script = require('nordic/script');
const Style = require('nordic/style');
const serialize = require('serialize-javascript');
const { injectI18n } = require('nordic/i18n');
const Button = require('@andes/button');
const Form = require('@andes/form');
const TextField = require('@andes/textfield');
const Dropdown = require('@andes/dropdown');
const CheckboxList = require('@andes/checkbox-list');

const { ListItem } = require('@andes/list');

const Thumbnail = require('@andes/thumbnail');

const AmountField = require('@andes/amount-field');
const { DropdownItem, DropdownGroup } = Dropdown;
const { CodeInput } = require('@andes/textfield');
const { ButtonText, DropdownButton, ProgressButton } = Button;
const { InputDatePicker } = require('@andes/datepicker');

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

    const [formValue, setFormValue] = useState({});
    const [value, setValue] = useState('');
    const [data, setData] = useState(null)

    const handleChangeName = (e) => {
        const { value, id } = e.target;


    }
    const handleChange = (e) => {
        const { value, id } = e.target;
        // setValue(value)


    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setValue(e.target[1].value);
    }


    async function getP(value) {
        try {

            const data = await restClient.get('/getProducts', {
                params: {
                    name: value,
                }
            })
            return setData(data.data)
        } catch (error) {
            console.log(error);
            console.log('Salio error');
        }
    }
    useEffect(() => {
        getP()
    }, [value]);

    console.log(data);

    console.log(value);

    // const [data, setData] = useState({});
    // const [errors, setErrors] = useState({});

    // const PHONE_LENGTH = "El teléfono debe tener al menos 10 números";
    // const NOT_MAIL = "Debe ingresar un mail valido";

    // const validateData = (id, value) => {
    //     const myErrors = errors;
    //     switch (id) {
    //         case "phone":
    //             if (value < 10000) {

    //                 if (!myErrors[id]) {

    //                     myErrors[id] = [PHONE_LENGTH];
    //                 } 
    //                 else if (myErrors[id].indexOf(PHONE_LENGTH) === -1) {

    //                     myErrors[id] = [...myErrors[id], PHONE_LENGTH];
    //                 }
    //             } else {
    //                 {
    //                     /** Remover un error, tu código ... */
    //                 }
    //             }
    //         case "email":
    //             {
    //                 /** case ‘email’, tu código ... */
    //                 // setError((prevState) => {
    //                 //     return {
    //                 //         …prevState,
    //                 //         [id]: value
    //                 //     }
    //                 // }
    //             }
    //             setErrors(myErrors);
    //             return true;
    //     }
    // };

    // const handleBlur = (e) => {
    //     const { value, id } = e.target;

    //     if (validateData(id, value)) {
    //         setData({ ...data, [id]: [value] });
    //     }
    // };

    // const handleChange = (e) => {
    //     const { value, id } = e.target;


    // }

    // console.log(errors);
    return (
        <>
            <Style href="registryForm.css" />
            <Script>
                {`
           window.__PRELOADED_STATE__ = ${serialize(preloadedState, { isJSON: true })};
           console.log('Product List page is loaded!');
        `}
            </Script>
            <Script src="vendor.js" />
            <Script src="registryForm.js" />

            <div>

                {/* <form>
                <div>
                    <label htmlFor="phone">
                        Celular:
                        <input
                            id="phone"
                            placeholder="Ingresa tu telefono"
                            type="number"
                            onBlur={handleBlur}
                        />
                      
                    </label>
                </div>
                <br />
                <label htmlFor="email">
                    Email
                    <input
                        id="email"
                        placeholder="Ingresa tu email"
                        type="email"
                        onChange={handleChange}
                    />

                </label>

            </form> */}

                {/* { errors.name && <span>{errors.name}</span>} */}
            </div>
            <div>
                {/*  Botones
                <Button>
                    <ButtonText>Log out</ButtonText>
                </Button>
                <br />
                <hr />
                <DropdownButton
                    hierarchy='quiet'
                    buttonText="Pagar"
                    listContent={[
                        {
                            title: "Action 1",
                            href: "google.com",

                        },
                        {
                            title: "Action 2",
                            href: "www.mercadolibre.com.ar",

                        },
                        {
                            title: "Action 3",
                            href: "",

                        }
                    ]}
                    side="bottom" />
                <br />
                <hr />

                <ProgressButton
                    hierarchy="quiet"
                    onClick={function noRefCheck() { }}
                    progressLabel="Procesando pago"
                    style={{
                        width: '200px'
                    }}
                    timeout={5000}
                >
                    <ButtonText>
                        Pagar $ 15.200
                    </ButtonText>
                </ProgressButton>
            </div>
            <br />
            <hr />
            <div>
                Badge

            </div>

            <div>
                DatePicker
                <InputDatePicker
                fromMonth= {new Date()}
                    selectionType="single"
                    label="Label date"
                    message="Please pick a day"
                    
                />*/}
            </div>
            <div className="contenedor">

                {/* <Form className="formulario" id='productForm'>

                    <TextField
                        label="Nombre del producto"
                        id="name"
                        onChange={(e) => handleChangeName(e)}
                    />
                    <TextField
                        label="Descripcion del producto"
                        id="description" />

                    <Dropdown
                        label='Selecciona un pais'
                        type="form"
                        helper="Selecciona un pais"
                    >
                        {
                            ['Colombia', 'Chile', 'Mexico', 'Argentina', 'Basil'].map(p => {
                                return (
                                    <DropdownItem key={p} primary={p}
                                        value={p} />
                                )
                            })
                        }
                    </Dropdown>

                    <Dropdown
                        label='Selecciona una categoria'
                        type="form"
                    >
                        {
                            ['Celulares', 'Tv', 'Audifonos', 'Parlantes', 'Juguetes'].map(c => {
                                return (
                                    <DropdownItem key={c} primary={c}
                                        value={c} />
                                )
                            })
                        }
                    </Dropdown>

                    <TextField
                        label="Precio"
                        id="price"
                    />
                    <TextField
                        label="Marca"
                        id="marca"
                    />

                    <TextField
                        label="Ingrese URL imagen"
                        id="img"
                    />


                    <CheckboxList
                        aria-label="Elija el Retiro"
                        id="retiro"
                    >

                        {
                            ['Retiro en tienda', 'Envío a domicilio', 'Retiro en sucursal'].map(r => {
                                return (
                                    <ListItem
                                        primary={r}
                                        value={r}
                                        key={r}
                                    />
                                )
                            })
                        }

                    </CheckboxList>

                    <Button type='submit'>
                        Siguiente
                    </Button>

                </Form>
                <section>
                    producto
                </section> */}
            </div>

            <Form className="formulario" id='productForm'
                onSubmit={handleSubmit}>


                <TextField
                    id="search"
                    onChange={handleChange}
                />
                <Button
                    type='submit'
                >
                    Buscar
                </Button>

            </Form>

            <div>
                <h1>Los produttos que buscaste </h1>

                {
                    data && data.map(p => {
                        <p>{p.id}</p>
                    })
                }
            </div>




        </>

    );
};
module.exports = injectI18n(View);