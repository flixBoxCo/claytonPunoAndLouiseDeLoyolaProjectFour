$(document).ready(() => {
    //Doc Ready
    $(function () {
        console.log('doc is ready');
        movieSearchApp.init();
    });
    // Create app namespace to hold all methods
    const movieSearchApp = {};

    // Start app
    movieSearchApp.init = function () {
        movieSearchApp.collectInfo();
     };

    // Collect user input using a form to fill in search text 
    
    movieSearchApp.collectInfo = function () {
        $("form").on('submit', (e) => {
            e.preventDefault();
            let searchText = $('#search').val();
            movieSearchApp.getInfo(searchText);
        });
    };
    
    // Make AJAX request using by using user input + search parameters
    movieSearchApp.getInfo = function (searchText) {
        console.log(searchText);
     };
    // Make second AJAX request when clicking "more info" by ID or Title parameters
    movieSearchApp.moreInfo = function () { };
    // Display data on the page
    movieSearchApp.displayInfo = function () { };



});



