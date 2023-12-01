document.addEventListener('DOMContentLoaded', () => {
  fetchPopularMovies();
});

function addMovie(){
  window.location.href = 'addFilm.html';
}
function gotoMain(){
 window.location.href = 'index.html'
}
function yourMovies(){
  window.location.href = 'yourMovies.php'
 }
async function fetchPopularMovies() {
  try {
    const movies = await ApiService.getPopularMovies();
    displayMovies(movies);
  } catch (error) {
    console.error(`Error fetching popular movies: ${error.message}`);
  }
}

async function fetchTopMovies() {
  try {
    const movies = await ApiService.getTopMovies();
    displayMovies(movies);
  } catch (error) {
    console.error(`Error fetching popular movies: ${error.message}`);
  }
}

async function fetchTrendingMovies() {
  try {
    const movies = await ApiService.getTrendingMovies();
    displayMovies(movies);
  } catch (error) {
    console.error(`Error fetching popular movies: ${error.message}`);
  }
}


function searchMovies() {
  const searchInput = document.getElementById('searchInput').value;

  if (searchInput.trim() !== '') {
    ApiService.searchMovies(searchInput)
      .then((searchResults) => {
        displayMovies(searchResults);
      })
      .catch((error) => {
        console.error(`Error fetching search results: ${error.message}`);
      });
  } else {
    fetchPopularMovies();
  }
}

async function displayDetailedMovieInfo(movieId) {
  try {
    const movieDetails = await ApiService.getMovieDetails(movieId);
    console.log("Movie Details:", movieDetails);
  } catch (error) {
    console.error(`Error fetching detailed movie information: ${error.message}`);
  }
}

function displayMovies(movies) {
  const movieListContainer = document.getElementById('movieList');
  movieListContainer.innerHTML = '';

  for (let i = 0; i < movies.length; i += 3) {
    const movieRow = createMovieRow();

    for (let j = i; j < i + 3 && j < movies.length; j++) {
      const movieCard = createMovieCard(movies[j]);

      movieRow.appendChild(movieCard);
    }

    movieListContainer.appendChild(movieRow);
  }
}

function createMovieRow() {
  const movieRow = document.createElement('div');
  movieRow.classList.add('movie-row');
  return movieRow;
}

function createMovieCard(movie) {
  const movieCard = document.createElement('div');
  movieCard.classList.add('movie-card');
  movieCard.setAttribute('data-movie-id', movie.id);

  const elements = [
    createMovieElement('img', null, movie.poster_path, 'movie-poster'),
    createMovieElement('h2', movie.title),
    createMovieElement('p', `Release Date: ${movie.release_date || 'N/A'}`),
    createMovieElement('p', movie.overview || 'No description available'),
    createMovieElement('p', `Rating: ${movie.vote_average || 'N/A'} (${movie.vote_count || 'N/A'} votes)`),
    createMovieLink('TMDB Page', `https://www.themoviedb.org/movie/${movie.id}`),
    createMovieLink('View Gallery', `https://www.themoviedb.org/movie/${movie.id}/images/backdrops`),
    createMovieLink('View Trailers', `https://www.themoviedb.org/movie/${movie.id}/videos`),
    
    createDetailedInfoButton(movie.id),
  ];

  elements.forEach((element) => movieCard.appendChild(element));

  return movieCard;
}

function createMovieElement(tag, text, src, className) {
  const element = document.createElement(tag);
  if (text) element.textContent = text;
  if (src) element.src = `https://image.tmdb.org/t/p/w500/${src}`;
  if (className) element.classList.add(className);
  return element;
}

function createMovieLink(text, href) {
  const link = document.createElement('a');
  link.textContent = text;
  link.href = href;
  link.target = '_blank';
  return link;
}

function createDetailedInfoButton(movieId) {
  const button = document.createElement('button');
  button.textContent = 'Show more details';
  button.addEventListener('click', () => displayDetailedMovieInfo(movieId));
  button.id = 'button';
  return button;
}


function sortMovies() {
  const sortOptions = document.getElementById('sortOptions');
  const selectedOption = sortOptions.value;

  switch (selectedOption) {
    case 'az':
      sortMoviesByTitleAZ();
      break;
    case 'za':
      sortMoviesByTitleZA();
      break;
    case 'oldest':
      sortMoviesByReleaseDateOldest();
      break;
    case 'newest':
      sortMoviesByReleaseDateNewest();
      break;
    default:
      // Domyślna akcja - np. sortowanie alfabetyczne (A-Z)
      sortMoviesByTitleAZ();
  }
}

async function sortMoviesByTitleAZ() {
  try {
    const movies = await ApiService.getPopularMovies();
    movies.sort((a, b) => a.title.localeCompare(b.title));
    displayMovies(movies);
  } catch (error) {
    console.error(`Error sorting movies by title (A-Z): ${error.message}`);
  }
}

async function sortMoviesByTitleZA() {
  try {
    const movies = await ApiService.getPopularMovies();
    movies.sort((a, b) => b.title.localeCompare(a.title));
    displayMovies(movies);
  } catch (error) {
    console.error(`Error sorting movies by title (Z-A): ${error.message}`);
  }
}

async function sortMoviesByReleaseDateOldest() {
  try {
    const movies = await ApiService.getPopularMovies();
    movies.sort((a, b) => new Date(a.release_date) - new Date(b.release_date));
    displayMovies(movies);
  } catch (error) {
    console.error(`Error sorting movies by release date (oldest first): ${error.message}`);
  }
}

async function sortMoviesByReleaseDateNewest() {
  try {
    const movies = await ApiService.getPopularMovies();
    movies.sort((a, b) => new Date(b.release_date) - new Date(a.release_date));
    displayMovies(movies);
  } catch (error) {
    console.error(`Error sorting movies by release date (newest first): ${error.message}`);
  }
}
