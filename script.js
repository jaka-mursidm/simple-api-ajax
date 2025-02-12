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
                console.log(result);   
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
showMovies();