const ApiService = {

  
  getPopularMovies: async () => {
      const apiKey = '81e6d61bad7ef827da76f59171e33c7c';
      const apiUrl = 'https://api.themoviedb.org/3/movie/popular';

      try {
          const response = await fetch(`${apiUrl}?api_key=${apiKey}`);
          const data = await response.json();
          return data.results;
      } catch (error) {
          console.error(`Error fetching popular movies: ${error.message}`);
          throw error;
      }
  },

  getTopMovies: async () => {
    const apiKey = '81e6d61bad7ef827da76f59171e33c7c';
    const apiUrl = 'https://api.themoviedb.org/3/movie/top_rated';

    try {
        const response = await fetch(`${apiUrl}?api_key=${apiKey}`);
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error(`Error fetching popular movies: ${error.message}`);
        throw error;
    }
  },

  getTrendingMovies: async () => {
    const apiKey = '81e6d61bad7ef827da76f59171e33c7c';
    const apiUrl = `https://api.themoviedb.org/3/trending/all/week`;

    try {
        const response = await fetch(`${apiUrl}?api_key=${apiKey}`);
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error(`Error fetching popular movies: ${error.message}`);
        throw error;
    }
  },
  getMovieDetails: async (movieId) => {
    const apiKey = '81e6d61bad7ef827da76f59171e33c7c';
    const apiUrl = `https://api.themoviedb.org/3/movie/${movieId}?append_to_response=credits&api_key=${apiKey}`;

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(`Error fetching movie details: ${error.message}`);
      throw error;
    }
  },

  searchMovies: async (query) => {
      const apiKey = '81e6d61bad7ef827da76f59171e33c7c';
      const apiUrl = 'https://api.themoviedb.org/3/search/movie';

      try {
          const response = await fetch(`${apiUrl}?api_key=${apiKey}&query=${query}`);
          const data = await response.json();
          return data.results;
      } catch (error) {
          console.error(`Error searching movies: ${error.message}`);
          throw error;
      }
  }
}
