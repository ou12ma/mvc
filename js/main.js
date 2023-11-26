import Controller from './controler.js';
// define the dictionary
$.i18n().load( {
    'fr' : {
      'key' : 'value',
    },
    'en': {
    }
})

// set the locale
$.i18n( {
    locale: 'en'
    //locale : navigator.language
} );


// Create an instance of the Model
let model = new Model();

// Create an instance of the View and pass the model to it
let view = new View(model);

let controller = new Controller(model, view);
