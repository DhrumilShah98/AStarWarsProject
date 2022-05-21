import axios from "axios";

// Server status code - 200 (Success).
export const SC200_OK = 200;

// Axios object with Base URL configured.
const API = axios.create({ baseURL: "http://localhost:5000" });

/**
 * API to fetch a Star Wars character by id.
 * @param {Number} id - Id of a Star Wars character.
 * @returns JSON data of that Star Wars character.
 */
export const getStarWarsCharacterById = (id) => API.get(`/people/${id}`);