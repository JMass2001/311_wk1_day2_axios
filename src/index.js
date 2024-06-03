const axios = require("axios");
const API_KEY = "d771b19ef336ed8381def3a60b574464";
const API_BASE_URL = "https://api.themoviedb.org/3";

const discoverMovie = async () => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/discover/movie?api_key=${API_KEY}`
    );

    if (response.data && response.data.results) {
      return {
        data: response.data,
        status: response.status,
        headers: response.headers,
      };
    } else {
      throw new Error("No results property found in the response data");
    }
  } catch (error) {
    console.error("Error fetching movies:", error);
    throw error;
  }
};

const getMovieById = async (id) => {
  const response = await axios.get(
    `${API_BASE_URL}/movie/${id}?api_key=${API_KEY}`
  );
  return response.data;
};

const getMovieByIdFailure = async () => {
  const fakeId = 0;
  try {
    const response = await axios.get(
      `${API_BASE_URL}/movie/${fakeId}?api_key=${API_KEY}`
    );
    return response.status;
  } catch (error) {
    if (error.response) {
      return error.response.status;
    }
    throw error;
  }
};

module.exports = {
  discoverMovie,
  getMovieById,
  getMovieByIdFailure,
};