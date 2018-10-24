const express = require("express");
const { json } = require("body-parser");
const massive = require("massive");
require("dotenv").config();
const cors = require("cors");
const { sendWelcomeEmail, sendSuccessStory} = require('./nodeMailerTests/NodeMailer');
const { getProfiles, newProfile, modifyProfile, deleteProfile, confirmMatch } = require("./controllers/profileController");
const { getFiles, newFile } = require("./controllers/fileController");
const { getMatched, newMatched } = require("./controllers/matchedController");
const { getHospitals, newHospital, modifyHospital, deleteHospital } = require("./controllers/hospitalController");

//create server
const app = express();
app.use(json());
app.use(cors());

//connected to DB //
massive({ connectionString: process.env.CONNECTION_STRING })
  .then(db => app.set("db", db))
  .catch(err => console.log(err));

// ENDPOINT NODMAILER
app.post("/api/post", sendWelcomeEmail)
app.post("/api/successstory", sendSuccessStory)

// profile //
app.get("/api/profile", getProfiles);
app.post("/api/profile", newProfile);
app.put("/api/profile", modifyProfile);
app.delete("/api/profile/:pair_id", deleteProfile);
app.put("/api/confirm", confirmMatch);

// files //
app.get("/api/files", getFiles);
app.post("/api/files", newFile);

// matched profiles info //
app.get("/api/matched", getMatched);
app.post("/api/matched", newMatched);

// hospitals info //
app.get("/api/hospitals", getHospitals);
app.post("/api/hospitals", newHospital);
app.put("/api/hospitals", modifyHospital);
app.delete("/api/hospitals/:hospital_id", deleteHospital);

// port set and listen //
const port = 3001;
app.listen(port, () => {
  console.log(`Server listening on port ${port} ^___^!`);
});
