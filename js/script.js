$(document).ready(() => {
    //Doc Ready
    $(function () {
        console.log('doc is ready');
    });
    // Create app namespace to hold all methods
    const movieSearchApp = {};
    // Collect user input using a form to fill in search text 
    // $("form").on('submit', (e) => {
    //     console.log($('#search').val());
    //     e.preventDefault();
    // });
    
    movieSearchApp.collectInfo = function () {
        $("form").on('submit', (e) => {
            e.preventDefault();
            console.log($('#search').val());
        });
    };

    movieSearchApp.collectInfo();

    // Make AJAX request using by using user input + search parameters
    movieSearchApp.getInfo = function () { };
    // Make second AJAX request when clicking "more info" by ID or Title parameters
    movieSearchApp.moreInfo = function () { };
    // Display data on the page
    movieSearchApp.displayInfo = function () { };
    // Start app
    movieSearchApp.init = function () { };



});



