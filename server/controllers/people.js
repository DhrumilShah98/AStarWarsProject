import swapi from "swapi-node";
import { SC200_OK, SC404_NOT_FOUND, SC_500_INTERNAL_SERVER_ERROR, preparePayload } from "../utils/constants.js";

/**
 * Prepares the character to return in the response body.
 * @param {Object} - Destructured character object returned by swapi-node.
 * @returns character object.
 */
const prepareCharacter = ({ name, height, mass, hair_color, skin_color, gender, birth_year }) => {
  const _character = {
    name,
    height,
    mass,
    hair_color,
    skin_color,
    gender,
    birth_year,
  };
  return _character;
};

/**
 * Prepares the character's homeworld to return in the response body.
 * @param {Object} - Destructured character's homeworld object returned by swapi-node.
 * @returns character's homeworld object.
 */
const prepareHomeWorld = ({ name, terrain, population }) => {
  const _homeWorld = {
    name,
    terrain,
    population,
  };
  return _homeWorld;
};

/**
 * Prepares the character's species to return in the response body.
 * @param {Object} species - Character's species array returned by swapi-node.
 * @returns character's species array.
 */
const prepareSpecies = (species) => {
  const _species = [];
  species.forEach((s) => {
    _species.push({
      name: s.name,
      average_lifespan: s.average_lifespan,
      classification: s.classification,
      language: s.language,
    });
  });
  return _species;
};

/**
 * Prepares the character's films to return in the response body.
 * @param {Object} films - Character's films array returned by swapi-node. 
 * @returns character's films array.
 */
const prepareFilms = (films) => {
  const _films = [];
  films.forEach((f) => {
    _films.push({
      title: f.title,
      director: f.director,
      producer: f.producer,
      release_date: f.release_date,
      episode_id: f.episode_id,
    });
  });
  return _films;
};

/**
 * Prepares and return the character from Star Wars universe. The getPerson() and getPersonAsync() methods returns the 
 * same response body. The difference is with the response time. Time taken by this method is more than the getPersonAsync() 
 * method as it calls different APIs SYNCHRONOUSLY and wait for the previous one to complete.
 * I am NOT using this method. I am using getPersonAsync(). I have added this method just to check the response time difference.
 * @param {Object} req - Request body received.
 * @param {Object} res - Response body to send.
 * @returns response body.
 */
export const getPerson = async (req, res) => {
  const { id: _id } = req.params;
  try {
    const character = await swapi.people({ id: _id });
    const _character = prepareCharacter(character);

    const homeWorld = await character.getHomeworld();
    const _homeWorld = prepareHomeWorld(homeWorld);
    _character["home_world"] = _homeWorld;

    const species = await character.getSpecies();
    const _species = prepareSpecies(species);
    _character["species"] = _species;

    const films = await character.getFilms();
    const _films = prepareFilms(films);
    _character["films"] = _films;

    const payLoad = preparePayload(SC200_OK, _character, "Character found.");
    return res.status(SC200_OK).json(payLoad);
  } catch (error) {
    if (error.message == SC404_NOT_FOUND) {
      const payLoad = preparePayload(SC404_NOT_FOUND, null, "No character found for this id.");
      return res.status(SC404_NOT_FOUND).json(payLoad);
    } else {
      const payLoad = preparePayload(SC_500_INTERNAL_SERVER_ERROR, null, "Something went wrong. Please try again.");
      return res.status(SC_500_INTERNAL_SERVER_ERROR).json(payLoad);
    }
  }
};

/**
 * Prepares and return the character from Star Wars universe. The getPersonAsync() and getPerson() methods returns the 
 * same response body. The difference is with the response time. Time taken by this method is less than the getPerson() 
 * method as it calls different APIs ASYNCHRONOUSLY and wait for all of them to complete. 
 * @param {Object} req - Request body received.
 * @param {Object} res - Response body to send.
 * @returns response body.
 */
export const getPersonAsync = async (req, res) => {
  const { id: _id } = req.params;
  try {
    const character = await swapi.people({ id: _id });
    const _character = prepareCharacter(character);

    // The line of code below does all the MAGIC.
    const [homeWorld, species, films] = await Promise.all([character.getHomeworld(), character.getSpecies(), character.getFilms()]);

    const _homeWorld = prepareHomeWorld(homeWorld);
    _character["home_world"] = _homeWorld;

    const _species = prepareSpecies(species);
    _character["species"] = _species;

    const _films = prepareFilms(films);
    _character["films"] = _films;

    const payLoad = preparePayload(SC200_OK, _character, "Character found.");
    return res.status(SC200_OK).json(payLoad);
  } catch (error) {
    if (error.message == SC404_NOT_FOUND) {
      const payLoad = preparePayload(SC404_NOT_FOUND, null, "No character found for this id.");
      return res.status(SC404_NOT_FOUND).json(payLoad);
    } else {
      const payLoad = preparePayload(SC_500_INTERNAL_SERVER_ERROR, null, "Something went wrong. Please try again.");
      return res.status(SC_500_INTERNAL_SERVER_ERROR).json(payLoad);
    }
  }
};