
const React = require('react');

const AddFilter = () => {
    return (
        <div>
            <h1>AddFilter</h1>

            <form>

                <fieldset className="container-precio">
                    <legend>Rango de Precios</legend>
                    <input type="number" for='min' placeholder='min 0-100' />
                    <input type="number" placeholder='max 0-100' />
                    <button>Agregar rango de precio</button>
                </fieldset>

                <fieldset className="container-filtro">
                    <legend>Categoria</legend>
                    <input type="text" placeholder='filtros' />
                    <button>Agregar filtro por categoria</button>
                </fieldset>

            </form>
        </div>
    )
}

module.exports = AddFilter;
