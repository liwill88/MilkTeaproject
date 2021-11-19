// 1.import Express and create an instance of Experss server
const express = require('express');
const cors = require('cors');
const app = express();
const port = 8000;


// 1.5 connect Mongoose to MongoDB
// This will fire our mongoose.connect statement to initialize our database connection
require('./server/config/mongoose.config');


// 2.configure our Express server to accept the POST requests
app.use( cors() );
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );


// 3.connect my Express server to my routes
const AllRoutes = require('./server/routes/milktea.routes');
AllRoutes(app)

// 4.run our express server 
app.listen( port, () => console.log(`Listening on port: ${port}`) );


// Now, in our controller, we can add a new method to handle the creation