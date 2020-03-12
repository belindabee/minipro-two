import axios from "axios";

const baseUrl = "http://yang-keren-gitu-napa.herokuapp.com/api/v1";

export const getAllMovies = (category, movie, page) => {
  return axios({
    method: "GET",
    url: `${baseUrl}/movies`
  });
};
