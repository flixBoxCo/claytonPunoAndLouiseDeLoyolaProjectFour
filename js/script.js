
// Create app namespace to hold all methods
const flixBoxApp = {};

flixBoxApp.apikey = 'e4c618b1';

// When the page loads focus on the input field
$('input').focus();
$(".resetButton").hide();

//Event listeners
flixBoxApp.eventListener = function () {

    // Collect user input using a form to fill in search text
    $("form").on('submit', (e) => {
        e.preventDefault();
        let searchText = $('input').val();
        flixBoxApp.getMovieName(searchText);
        flixBoxApp.scroll(".section");
    })

    // Triggers search button when enter key is pressed
    $(".submit").keyup(function (event) {
        if (event.keyCode === 13) {
            $(".submit").click();
        }
    });

    // Refreshes page and search field and scrolls back to top
    $('.resetButton').on('click', function () {
        $('form').trigger("reset");
        location.reload();
        $(".resetButton").hide();
        $('form').scrollTop(0);
    });

}


// AJAX call to get movie name
flixBoxApp.getMovieName = function (search) {
        $.ajax({
        url: `http://www.omdbapi.com/?`,
        method: 'GET',
        dataType: 'json',
        data: {
            apikey: flixBoxApp.apikey,
            s: `${search}`,
        }
    }).then((result) => {
        console.log(result);
        const Search = result.Search;
        flixBoxApp.displayMovie(Search);
    }).catch(error => {
        alert("Could not find movie. Please enter a valid movie name.")
        console.log(error);
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
    <a onclick="selectedMovie" href= "#">
        <img src="${movies.Poster}">
        <h3>${movies.Title}</h3>
        <h3>${movies.Year}</h3>
        <button class="openButton"('${movies.imdbID}'>Movie Details</button>
    </a>
    </div>
    `

    $('.section').append(movieAll);
    $(".resetButton").show();
    console.log(movies);
    })
}


//slow scroll 
flixBoxApp.scroll = function (element) {
    $('html').animate(
        {
            scrollTop: $(element).offset().top
        }, 1000
    );
};


flixBoxApp.init = function () {
    // flixBoxApp.collectInfo();
    flixBoxApp.eventListener();
}

//Document ready
$(function () {
    flixBoxApp.init();
});
