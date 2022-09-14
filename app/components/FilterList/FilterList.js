const React = require('react');

const FilterList = () => {
    return (
        <div>
            <h1>FilterList</h1>

            <ul className='list-filtros'>
                <li>Televisores</li>
                <button className="elimiar">x</button>
            </ul>

            <form>
                <fieldset className='container-feedback'>
                    <legend>Feedback</legend>
                    <input type="text" placeholder='¿Qué dificulatad tuviste, resumidamente' />
                    <textarea cols="30" rows="10" placeholder="Si necesitas, escribe aquí sus observaciones"></textarea>
                    <button type='submit'>Dar Feedback</button>
                </fieldset>
            </form>
        </div>
    )
}

module.exports = FilterList;