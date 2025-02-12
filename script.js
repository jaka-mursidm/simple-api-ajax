// You can use this public API
function searchMovies(){
    const valueInput = $('#search-input').val() || 'movie';
    $.ajax({
        url : 'https://www.omdbapi.com/?apikey=42c0770b',
        method : 'GET',
        data :  {
            s : valueInput
        },
        success: function (result) {
            let movies = result.Search;
            if(result.Response == "True"){
                $('#search-movie-container').html(' ');
                let movies = result.Search;        
                $.each(movies, function (i,data) {
                $('#search-movie-container').append(`
                    <div class="col-md-4 mb-3">
                        <div class="card bg-dark text-white">
                            <img style="height:300px; width:100%; object-fit:cover;" src="`+ data.Poster +`" class="card-img-top" alt="`+ data.Title+`">
                            <div class="card-body">
                                <h5 class="card-title">`+ data.Title+`</h5>
                                <p class="card-text">`+data.Year+`</p>
                                <a href="#" class="btn btn-secondary">See Detail</a>
                            </div>
                        </div>
                    </div>`);   
                } );
            }else{
                $('#search-movie-container').html(`<div class="alert alert-danger" role="alert">
                Movie not Found!
                </div>`)

            }
        },
        error: function(error) {
            console.error('Request failed:', error);
        }
    })
}
function showMovies(){
    $.ajax({
        url : 'https://www.omdbapi.com/?apikey=42c0770b',
        method : 'GET',
        data :  {
            s : 'movie'
        },
        success: function (result) {
            let movies = result.Search;
            if(result.Response == "True"){
                $('#search-movie-container').html(' ');
                let movies = result.Search;      
                $.each(movies, function (i,data) {
                $('#search-movie-container').append(`
                    <div class="col-md-4 mb-3">
                        <div class="card bg-dark text-white">
                            <img style="height:300px; width:100%; object-fit:cover;" src="`+ data.Poster +`" class="card-img-top" alt="`+ data.Title+`">
                            <div class="card-body">
                                <h5 class="card-title">`+ data.Title+`</h5>
                                <p class="card-text">`+data.Year+`</p>
                                <a href="#" class="btn btn-secondary">See Detail</a>
                            </div>
                        </div>
                    </div>`);   
                } );
            }else{
                $('#search-movie-container').html(`<div class="alert alert-danger" role="alert">
                Movie not Found!
                </div>`)

            }
        },
        error: function(error) {
            console.error('Request failed:', error);
        }
    })
}

function showRecentMovies() {
    const currentYear = new Date().getFullYear();
    $.ajax({
        url : 'https://www.omdbapi.com/?apikey=42c0770b',
        method : 'GET',
        data :  {
            s : 'movie',
            y : currentYear
        },
        success: function (result) {
            let movies = result.Search;
            if(result.Response == "True"){
                let movies = result.Search;                
                $.each(movies, function (i,data) {
                $('#latest-movie-container').append(`
                    <div class="col-md-4 mb-3">
                        <div class="card bg-dark text-white">
                            <img style="height:300px; width:100%; object-fit:cover;" src="`+ data.Poster +`" class="card-img-top" alt="`+ data.Title+`">
                            <div class="card-body">
                                <h5 class="card-title">`+ data.Title+`</h5>
                                <p class="card-text">`+data.Year+`</p>
                                <a href="#" class="btn btn-secondary">See Detail</a>
                            </div>
                        </div>
                    </div>`);   
                } );
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

$(document).ready(function() {
    $('#btn-search').on('click',function () {
        searchMovies();
    });
    $('#search-input').on('keydown', function(event) {
        if (event.which === 13 || event.keyCode === 13) { 
            event.preventDefault(); // Mencegah submit default
            searchMovies();
        }
    });
    showRecentMovies();
    showMovies();
});