// You can use this public API
function showMovies(){
    $.ajax({
        url : 'http://www.omdbapi.com/?apikey=42c0770b',
        method : 'GET',
        data :  {
            s : 'movie'
        },
        success: function (result) {
            if(result.Response == "True"){
            }else{
                $('#movie-container').html(`<div class="alert alert-danger" role="alert">
                Movie not Found!
                </div>`)

            }
        },
        error: function(error) {
            console.error('Request failed:', error);
          }
    })
}

function showRecentMovies(content) {
    const currentYear = new Date().getFullYear();
    $.ajax({
        url : 'http://www.omdbapi.com/?apikey=42c0770b',
        method : 'GET',
        data :  {
            s : 'movie',
            y : currentYear
        },
        success: function (result) {
            let movies = result.Search;
            if(result.Response == "True"){
                if(content == "carousel"){
            movies.slice(0, 5).forEach(function (data, i) {
                        let activated = i === 0 ? "active" : ""; 
                        $('#carousel-movie-poster').append(`
                            <div class="carousel-item ` + activated+`">
                           <img src="`+data.Poster +`" class="d-block w-100" alt="Movie Poster">
                       </div>`);  
                        } );
                }
            }else{
                $('#movie-container').html(`<div class="alert alert-danger" role="alert">
                Movie not Found!
                </div>`)

            }
        },
        error: function(error) {
            console.error('Request failed:', error);
          }
    })
}
showRecentMovies(content="carousel");
showRecentMovies(content="latest");
showMovies();