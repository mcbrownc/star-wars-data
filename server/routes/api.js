const express = require('express');

const starWarsController = require('../controllers/starWarsController');

const router = express.Router();

router.get('/',
  starWarsController.getCharacters,
  (req, res) => res.status(200).json(res.locals.characters)
);

router.get('/species',
  starWarsController.getSpecies,
  (req, res) => res.status(200).json(res.locals.species)
);

router.get('/homeworld',
  starWarsController.getHomeworld,
  (req, res) => res.status(200).json(res.locals.homeworld)
);

router.get('/film',
  starWarsController.getFilm,
  (req, res) => res.status(200).json(res.locals.film)
);

router.post('/character',
  starWarsController.addCharacter,
  (req, res) => res.status(200).json(res.locals.character)
);

module.exports = router;
