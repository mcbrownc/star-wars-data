const models = require('../models/starWarsModels');

const starWarsController = {};

starWarsController.getCharacters = (req, res, next) => {
  models.Person.find({}).exec()
    .then(peopleDocs => {
      res.locals.characters = peopleDocs;
      next();
    })
    .catch(err => {
      next({
        log: `starWarsController.getCharacters: ERROR: ${err}`,
        message: { err: 'Error occurred in starWarsController.getCharacters. Check server logs for more details.' }
      });
    });
}

starWarsController.getSpecies = (req, res, next) => {
  const _id = req.query.id;
  models.Species.findOne({_id})
    .then(speciesDoc => {
      res.locals.species = speciesDoc;
      next();
    })
    .catch(err => {
      next({
        log: `starWarsController.getSpecies: ERROR: ${err}`,
        message: { err: 'Error occurred in starWarsController.getSpecies. Check server logs for more details.' }
      });
    });
}

starWarsController.getHomeworld = (req, res, next) => {
  const _id = req.query.id;
  models.Planet.findOne({_id})
  .then(planetDoc => {
    res.locals.homeworld = planetDoc;
    next();
  })
  .catch(err => {
    next({
      log: `starWarsController.getHomeworld: ERROR: ${err}`,
      message: { err: 'Error occurred in starWarsController.getHomeworld Check server logs for more details.' }
    });
  })
}

starWarsController.getFilm = (req, res, next) => {
  const _id = req.query.id;
  models.Film.findOne({_id})
    .then(filmDoc => {
      res.locals.film = filmDoc;
      next();
    })
    .catch(err => {
      next({
        log: `starWarsController.getFilm: ERROR: ${err}`,
        message: { err: 'Error occurred in starWarsController.getFilm Check server logs for more details.' }
      });
    });
}

starWarsController.addCharacter = (req, res, next) => {
  const { name, gender, species, species_id, birth_year, eye_color, skin_color, hair_color, mass, height, homeworld, homeworld_id, films } = req.body;
  models.Person.create({
    name, gender, species, species_id, birth_year, eye_color, skin_color, hair_color, mass, height, homeworld, homeworld_id, films
  })
    .then(charDoc => {
      res.locals.character = charDoc;
      next();
    })
    .catch(err => {
      next({
        log: `starWarsController.addCharacter: ERROR: ${err}`,
        message: { err: 'Error occurred in starWarsController.addCharacter Check server logs for more details.' }
      });
    });
}

module.exports = starWarsController;
