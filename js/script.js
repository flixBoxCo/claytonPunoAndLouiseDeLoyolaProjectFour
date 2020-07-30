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
    
    // Create a variable to hold the first promise
    movieSearchApp.getMovies = $.ajax({
        url: ''
        dataType: 'json',
        method: 'GET'
    });
    // Create a variable to hold the second promise
    movieSearchApp.getPoster = $.ajax({
        url: ''
        dataType: 'json',
        method: 'GET'
    });

    // Create a variable to hold third promise
    movieSearchApp.moreInfo = $.ajax({
        url: ''
        dataType: 'json',
        method: 'GET'
    });

    // Listen to fulfillment or rejection of multiple promises:
    // When we get ALL three promises
    $.when(movieSearchApp.getMovies, movieSearchApp.getPoster, movieSearchApp.moreInfo)
    // Use the results of those promises
    .then((resultOne, resultTwo, resultThree) => {
        // And show them to us
        console.log(resultOne, resultTwo, resultThree);
    })
    // If we don't get anything back, show us an error
    .fail((err1, err2, err3) => {
        console.log(err1, err2, err3);
    })
    

    // Display data on the page
    movieSearchApp.displayInfo = function () { };



});



