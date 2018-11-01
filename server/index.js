const express = require("express");
const { json } = require("body-parser");
const massive = require("massive");
require("dotenv").config();
const cors = require("cors");
const {
  sendWelcomeEmail,
  sendConfirmation,
  sendHospitalInfo
} = require("./nodeMailerTests/NodeMailer");
const {
  getProfiles,
  newProfile,
  modifyProfile,
  deleteProfile,
  confirmMatch,
  updateBatched,
  getUnmatchedProfiles,
  hospitalUpdater
} = require("./controllers/profileController");
const { getFiles, newFile } = require("./controllers/fileController");
const {
  getMatched,
  newMatched,
  deleteMatched,
  setFinished,
  getUnfinishedMatched
} = require("./controllers/matchedController");
const {
  getHospitals,
  newHospital,
  modifyHospital,
  deleteHospital
} = require("./controllers/hospitalController");

//create server
const app = express();
app.use(json());
app.use(cors());

//connected to DB //
massive({ connectionString: process.env.CONNECTION_STRING })
  .then(db => app.set("db", db))
  .catch(err => console.log(err));
const path = require("path"); // Usually moved to the start of file

app.use(express.static(path.join(__dirname, "../build")));

//// endpoint nodemailer ////
app.post("/api/welcome", sendWelcomeEmail);
app.post("/api/confirmation", sendConfirmation);
app.post("/api/patientInfo", sendHospitalInfo);

// profile //
app.get("/api/profile", getProfiles);
app.get("/api/getUnmatched", getUnmatchedProfiles);
app.post("/api/profile", newProfile);
app.put("/api/profile", modifyProfile);
app.delete("/api/profile/:pair_id", deleteProfile);
app.put("/api/confirm", confirmMatch);
app.put("/api/updateBatched", updateBatched);
app.put("/api/hospitalUpdater", hospitalUpdater);

// files //
app.get("/api/files", getFiles);
app.post("/api/files", newFile);

// matched profiles info //
app.get("/api/matched", getMatched);
app.post("/api/matched", newMatched);
app.delete("/api/matched/:id", deleteMatched);
app.put("/api/matched/:id", setFinished);
app.get("/api/getUnfinished", getUnfinishedMatched);

// hospitals info //
app.get("/api/hospitals", getHospitals);
app.post("/api/hospitals", newHospital);
app.put("/api/hospitals", modifyHospital);
app.delete("/api/hospitals/:hospital_id", deleteHospital);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build/index.html"));
});
// port set and listen //
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server listening on port ${port} ^___^!`);
});
