const mongoose = require('mongoose');

const MONGO_URI = '';

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'starwars'
})
.then(()=>console.log('Connected to Mongo DB.'))
.catch(err=>console.log(err));

const Schema = mongoose.Schema;

const speciesSchema = new Schema({
  name: String,
  classification: String,
  average_height: String,
  average_lifespan: String,
  hair_colors: String,
  skin_colors: String,
  eye_colors: String,
  language: String,
  homeworld: String,
  homeworld_id: {
    type: Schema.Types.ObjectId,
    ref: 'planet'
  }
});

const Species = mongoose.model('species', speciesSchema);


const planetSchema = new Schema({
  name: String,
  rotation_period: Number,
  orbital_period: Number,
  diameter: Number,
  climate: String,
  gravity: String,
  terrain: String,
  surface_water: String,
  population: Number
});

const Planet = mongoose.model('planet', planetSchema);


const filmSchema = new Schema({
  title: String,
  episode_id: Number,
  opening_crawl: String,
  director: String,
  producer: String,
  release_date: Date
});

const Film = mongoose.model('film', filmSchema);


const personSchema = new Schema({
  name: { type: String, required: true },
  mass: String,
  hair_color: String,
  skin_color: String,
  eye_color: String,
  birth_year: String,
  gender: String,
  species: String,
  species_id: {
    type: Schema.Types.ObjectId,
    ref: 'species'
  },
  homeworld: String,
  homeworld_id: {
    type: Schema.Types.ObjectId,
    ref: 'planet'
  },
  height: Number,
  films: [{
    title: String,
    id: {
      type: Schema.Types.ObjectId,
      ref: 'film'
    }
  }]
});

const Person = mongoose.model('person', personSchema);


module.exports = {
  Species,
  Planet,
  Film,
  Person
}
