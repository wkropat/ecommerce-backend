// Dependencies
const express = require("express");
const routes = require("./routes");
const sequelize = require("./config/connection");
const app = express();
// Heroku-friendly port
const PORT = process.env.PORT || 3000;
// Middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(routes);


// Listen in
sequelize.sync({ force: false }).then(function() {
    app.listen(PORT, function() {
    console.log('Listening in on https://localhost/' + PORT);
    });
});