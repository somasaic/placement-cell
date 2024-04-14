const mongoose = require('mongoose');

//mongoose.connect('mongodb://127.0.0.1/placement_cell');
mongoose.connect("mongodb+srv://mallireddy1999916:HfDKCaxbDaJZhvxm@cluster0.9tn9rqp.mongodb.net/placement_cell");

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error in database connection!!!'));

db.once('open', () => {
    console.log('Connection to database is succesfull.');
});

module.exports = db;
