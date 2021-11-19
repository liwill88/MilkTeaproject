// Import mongoose
const mongoose = require('mongoose');

// Established a connection to MongoDB database
mongoose.connect('mongodb://localhost/milktea_schema', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Established a connection to the database'))  //Successful
    .catch(err => console.log('Something went wrong when connecting to the database ', err));  //Unsuccessful
    