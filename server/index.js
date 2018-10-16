const express = require("express");
const { json } = require("body-parser");
const massive = require("massive");
require("dotenv").config();
const cors = require("cors");
// const nodemailer = require('nodemailer');
const { getProfiles, newProfile } = require("./controllers/profileController");
const { getFiles, newFile } = require("./controllers/fileController");
const { getMatched, newMatched } = require("./controllers/matchedController");
const {
  getHospitals,
  newHospital
} = require("./controllers/hospitalController");

//create server
const app = express();
app.use(json());
app.use(cors());

//connected to DB //
massive({ connectionString: process.env.CONNECTION_STRING })
  .then(db => app.set("db", db))
  .catch(err => console.log(err));

// profile //
app.get("/api/profile", getProfiles);
app.post("/api/profile", newProfile);

// files //
app.get("/api/files", getFiles);
app.post("/api/files", newFile);

// matched profiles info //
app.get("/api/matched", getMatched);
app.post("/api/matched", newMatched);

// hospitals info //
app.get("/api/hospitals", getHospitals);
app.post("/api/hospitals", newHospital);

// port set and listen //
const port = 3001;
app.listen(port, () => {
  console.log(`Server listening on port ${port} ^___^!`);
});
