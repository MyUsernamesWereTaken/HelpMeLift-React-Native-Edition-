require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");

const workoutRoutes = require("./Routes/workoutRoutes")

// MIDDLEWARE
app.use(express.json());

// ROUTES
app.use("/muscle/exercise", workoutRoutes)


var databaseName = "USERS";
var database;

// Function to connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => {

    // Start the server and connect to MongoDB
    app.listen(process.env.PORT, async () => {
      console.log(`Server listening on port ${process.env.PORT}... `);
    });

  }).catch((error) =>{
    console.log(error)

  });

