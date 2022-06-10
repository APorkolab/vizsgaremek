const fsp = require('fs').promises;
const movie = require('../models/movie');
const director = require('../models/director');
const FamilyMember = require('../models/family-member');
const MainActor = require('../models/main-actor');
const WatchedMovies = require('../models/watched-movies');


const seedCollection = async (model, fileName) => {
    try {
        const exists = await model.find().count();
        if (!exists) {
            throw new Error();
        }
    } catch (e) {
        const source = await fsp.readFile(
            `./src/seed/${fileName}.json`,
            'utf8'
        );
        const list = JSON.parse(source);
        if (model && model.insertMany) {
            await model.insertMany(list, {
                limit: 100
            });
        }
    }
};

(async () => {

    seedCollection(movie, 'plannedMovies');
    seedCollection(director, 'directors');
    seedCollection(FamilyMember, 'familyMembers');
    seedCollection(MainActor, 'mainActors');
    seedCollection(WatchedMovies, 'watchedMovies');

})();