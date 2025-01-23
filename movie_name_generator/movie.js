const searchInput = document.getElementById("searchInput");
const genreFilter = document.getElementById("genreFilter");
const searchButton = document.getElementById("searchButton");
const movieList = document.getElementById("movieList");

const apiKey = "1155689d"; // Replace with your OMDb API key

// Function to render movies
// Function to fetch movies from OMDb API
async function fetchMovies(searchTerm) {
    const url = `https://www.omdbapi.com/?s=${encodeURIComponent(searchTerm)}&apikey=${1155689d}`;
    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.Response === "True" && data.Search) {
            const filteredMovies = data.Search.filter(movie =>
                genreFilter.value === "" || (movie.Genre && movie.Genre.includes(genreFilter.value))
            );
            renderMovies(filteredMovies);
        } else {
            renderMovies([]);
        }
    } catch (error) {
        console.error("Error fetching movies:", error);
        movieList.innerHTML = `<p>Something went wrong. Error: ${error.message}</p>`;
    }
}

// Search button event listener
searchButton.addEventListener("click", () => {
    const searchTerm = searchInput.value.trim();
    if (searchTerm) {
        fetchMovies(searchTerm);
    } else {
        alert("Please enter a movie title to search.");
    }
});

// Enter key event listener
searchInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        searchButton.click();
    }
});


// Function to fetch movies from OMDb API
async function fetchMovies(searchTerm) {
    const url = `https://www.omdbapi.com/?s=${encodeURIComponent(searchTerm)}&apikey=${1155689d}`;
    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.Response === "True" && data.Search) {
            renderMovies(data.Search);
        } else {
            renderMovies([]);
        }
    } catch (error) {
        console.error("Error fetching movies:", error);
        movieList.innerHTML = "<p>Something went wrong. Please try again later.</p>";
    }
}

