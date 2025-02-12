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

function showRecentMovies() {
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
                let movies = result.Search;                
                $.each(movies, function (i,data) {
                $('#latest-movie-container').append(`
                    <div class="col-md-4 mb-3">
                        <div class="card">
                            <img style="height:300px; width:100%; object-fit:cover;" src="`+ data.Poster +`" class="card-img-top" alt="`+ data.Title+`">
                            <div class="card-body">
                                <h5 class="card-title">`+ data.Title+`</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                                    the card's content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
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
showRecentMovies();
showMovies();