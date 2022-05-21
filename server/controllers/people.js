import swapi from "swapi-node";
import { SC200_OK, SC_500_INTERNAL_SERVER_ERROR, preparePayload } from "../utils/constants.js";

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

const prepareHomeWorld = ({ name, terrain, population }) => {
  const _homeWorld = {
    name,
    terrain,
    population,
  };
  return _homeWorld;
};

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
}

const prepareFilms = (films) => {
  const _films = [];
  films.forEach((f) => {
    _films.push({
      title: f.title,
      director: f.director,
      producer: f.producer,
      release_date: f.release_date,
    });
  });
  return _films;
}

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

    const payLoad = preparePayload(SC200_OK, _character, "success");
    return res.status(SC200_OK).json(payLoad);
  } catch (error) {
    const payLoad = preparePayload(SC_500_INTERNAL_SERVER_ERROR, null, error.message);
    return res.status(SC_500_INTERNAL_SERVER_ERROR).json(payLoad);
  }
};
