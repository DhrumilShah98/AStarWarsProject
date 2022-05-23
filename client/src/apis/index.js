import axios from "axios";

// Server status code - 200 (Success).
export const SC200_OK = 200;

// Server status code - 404 (Resource Not Found).
export const SC404_NOT_FOUND = 404;

// Axios object with Base URL configured.
const API = axios.create({ baseURL: "https://astarwarsprojectbackend.vercel.app" });

/**
 * API to fetch a Star Wars character by id.
 * @param {Number} id - Id of a Star Wars character.
 * @returns JSON data of that Star Wars character.
 */
export const getStarWarsCharacterById = (id) => API.get(`/people/${id}`);