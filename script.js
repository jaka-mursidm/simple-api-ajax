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
                console.log("Movie not found!");

            }
        },
        error: function(error) {
            console.error('Request failed:', error);
          }
    })
}
showMovies();