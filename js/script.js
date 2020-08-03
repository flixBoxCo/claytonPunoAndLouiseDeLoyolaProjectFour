
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

// AJAX call to get movie name and imdbID

flixBoxApp.getMovieName = function (search) {
        $.ajax({
        url: `http://www.omdbapi.com/?`,
        method: 'GET',
        dataType: 'json',
        data: {
            apikey: flixBoxApp.apikey,
            s: `${search}`
        }
    }).then((result) => {
        
        console.log(result);
        const Search = result.Search;
        flixBoxApp.displayMovie(Search);
    }).catch(error => {
        alert("Could not find move. Please try again")
    })
}

// Append the movies on DOM 
flixBoxApp.displayMovie = function(data){
    
    // look through each object in the array
    // get the title, poster and imdbID
    // display these on the page in html elements
    // forEach 
    data.forEach(function(movies) {
        const movieAll = 
    `
    <div class="movieAll">
        <img src="${movies.Poster}">
        <h3>${movies.Title}</h3>
        <a onclick="selectedMovie"('${movies.imdbID}')" href="#">Movie Details</a>
    </div>
    `
    $('.section').append(movieAll);
    console.log(movies);

    })
}


flixBoxApp.init = function() {
    flixBoxApp.collectInfo();
}

//Document ready
$(function () {
    flixBoxApp.init();
})

