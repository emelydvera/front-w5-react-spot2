const React = require('react');
const PropTypes = require('prop-types');
const Script = require('nordic/script');
const Style = require('nordic/style');
const serialize = require('serialize-javascript');
const { injectI18n } = require('nordic/i18n');
const Image = require('nordic/image');
const FilterList = require('../../components/FilterList/FilterList');
const AddFilter = require('../../components/AddFilter/__tests__/AddFilter');


function View(props) {
    const { i18n, translations, imagesPrefix } = props;
    const preloadedState = {
        i18n,
        translations,
        imagesPrefix,
    };

    return (
        <>
            <Style href="forms.css" />
            <Script>
                {`
        window.__PRELOADED_STATE__ = ${serialize(preloadedState, { isJSON: true })};
        console.log('Demo page is loaded!');
      `}
            </Script>
            <Script src="vendor.js" />
            <Script src="forms.js" />

            <div className='container'>
                <AddFilter />
                <FilterList />
            </div>
        </>

    )
}

module.exports = injectI18n(View);