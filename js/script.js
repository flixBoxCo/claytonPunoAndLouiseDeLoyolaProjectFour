
// Create app namespace to hold all methods
const flixBoxApp = {};

flixBoxApp.apikey = 'e4c618b1';

// When the page loads focus on the input field
$('input').focus();

// Collect user input using a form to fill in search text
flixBoxApp.collectInfo = function() {
    $("form").on('submit', (e) => {
        e.preventDefault();
        let searchText = $('input').val();
        flixBoxApp.getMovieName(searchText);
    })
}


// AJAX call
flixBoxApp.getMovieName = function (searchText) {
    $.ajax({
        url: `http://www.omdbapi.com/?s=${searchText}`,
        method: 'GET',
        dataType: 'json',
        data: {
            apikey: flixBoxApp.apikey,
        }
        })
        .then(function (result) {
            // const movieTitle = result.movieTitle;
            // flixBoxApp.displayMovie(movieTitle)
            console.log(result);
        })
}


flixBoxApp.init = function() {
    flixBoxApp.collectInfo();
}

//Document ready
$(function () {
    flixBoxApp.init();
})