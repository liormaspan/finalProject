const  {db}  = require('../config/db.js');

const _getAll = async () => {
return db('amharic_phrases').select('*')
};

const _getNumbers = async () => {
    return db('amharic_phrases').select('numbers')
    };

const _getColors = async () => {
    return db('amharic_phrases').select('colors')
    };
    

const _getAnimals = async (ani) => {
    return db('amharic_phrases').select('animals')
    };
        

module.exports = {
    _getNumbers,
    _getColors,
    _getAnimals
};
