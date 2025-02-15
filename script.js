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
                                <button type="button" data-id="`+data.imdbID+`" id="btnDetail" class="btn btn-light" data-bs-toggle="modal" data-bs-target="#detailModal">
                                    See detail
                                    </button>
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
function detailMovies(id){
    $.ajax({
        url : 'https://www.omdbapi.com/?apikey=42c0770b',
        method : 'GET',
        data :  {
            i : id
        },
        success: function (result) {
            let movies = result.Search;
            if(result.Response == "True"){
                $('#detailModal .modal-body').html(' ');
                let movies = result.Search;        
                $('#detailModal .modal-body').html(`
                    <div class="row">
                        <div class="col-md-4">
                           <img style="height:300px; width:100%; object-fit:contain;" src="`+ result.Poster +`" class="card-img-top" alt="`+ result.Title+`">
                        </div>
                        <div class="col-md-8">
                            <div class="information">
                                <h5 class="card-title">`+ result.Title+`</h5>
                                <p class="card-text mb-1"> <span class="fw-bold">Year : </span>`+result.Year+`</p>
                                <p class="card-text mb-1"> <span class="fw-bold">Genre : </span>`+result.Genre+`</p>
                                <p class="card-text mb-1"> <span class="fw-bold">Runtime : </span>`+result.Runtime+`</p>
                                <p class="card-text mb-1"> <span class="fw-bold">Director : </span>`+result.Director+`</p>
                                <p class="card-text mb-1"> <span class="fw-bold">Actors : </span>`+result.Actors+`</p>
                                <p class="card-text mb-1"> <span class="fw-bold">Plot : </span>`+result.Plot+`</p>

                            </div>
                        </div>
                    </div>
                    `
                );   
              
            }else{
               console.log('error');
               

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
                                <input type="hidden" id="id" value="`+data.imdbID+`"/>
                                <h5 class="card-title">`+ data.Title+`</h5>
                                <p class="card-text">`+data.Year+`</p>
                                <button type="button" data-id="`+data.imdbID+`" id="btnDetail" class="btn btn-light" data-bs-toggle="modal" data-bs-target="#detailModal">
                                    See detail
                                    </button>
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
                               <button type="button" data-id="`+data.imdbID+`" id="btnDetail" class="btn btn-light" data-bs-toggle="modal" data-bs-target="#detailModal">
                                    See detail
                                    </button>
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
    $('#search-movie-container').on('click','#btnDetail',function () {
        const id = $(this).data('id');
        $('#detailModal .modal-body').html(' ');

        detailMovies(id);
    });
    $('#latest-movie-container').on('click','#btnDetail',function () {
        const id = $(this).data('id');
        $('#detailModal .modal-body').html(' ');

        detailMovies(id);
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