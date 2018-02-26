$(document).ready(function() {
    let id = ``;
    idOfCategories = `MPE1747`;

    function handleResponse(data) {
        console.log('the ajax request has finished!');
        console.log(data);
    }
    
    $.ajax({
        url: `https://api.mercadolibre.com/sites/MPE/categories`
    }).done(handleResponse);

    $.ajax({
        url: `https://api.mercadolibre.com/categories/${idOfCategories}`
    }).done(handleResponse);

})
