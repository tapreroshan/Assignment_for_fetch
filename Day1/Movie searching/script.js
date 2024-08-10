document.getElementById("btn").addEventListener("click",show_movie)

async function show_movie() {
    let search_input = document.getElementById("search").value
    const api_key = "33f44085"
    const url = `https://www.omdbapi.com/?s=${search_input}&apikey=${api_key}`;

    const response = await fetch(url)
    const data = await response.json();
    if (data.Response === 'True') {
        displayMovies(data.Search);
    } else {
        displayError(data.Error);
    }
    
}

function displayMovies(data){
    const movieList = document.getElementById("movie-container");
    movieList.innerHTML = "";
    data.forEach(movie => {
        const movieDiv = document.createElement('div');
        movieDiv.className = 'movie-card';

        movieDiv.innerHTML = `
            <img src="${movie.Poster}" alt="${movie.Title}">
            <h2>${movie.Title}</h2>
            <p>Year: ${movie.Year}</p>
        `;
        movieList.appendChild(movieDiv);
        
    })
}


function displayError(error) {
    const container = document.getElementById('movie-container');
    container.innerHTML = `<p>${error}</p>`;
}