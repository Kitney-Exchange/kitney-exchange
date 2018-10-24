module.exports = {
  getProfiles: (req, res, next) => {
    const db = req.app.get("db");
    db.get_profiles()
      .then(response => res.status(200).send(response))
      .catch(err => res.status(500).send(err));
  },
  newProfile: (req, res, next) => {
    const db = req.app.get("db");

    db.new_profile([
      req.body.hospital_1,
      req.body.hospital_2,
      req.body.hospital_3,
      req.body.recipient_name,
      req.body.recipient_dob,
      req.body.recipient_age,
      req.body.recipient_weight,
      req.body.recipient_height,
      req.body.recipient_history,
      req.body.recipient_dialysis,
      req.body.recipient_blood_type,
      req.body.donor_name,
      req.body.donor_dob,
      req.body.donor_age,
      req.body.donor_weight,
      req.body.donor_height,
      req.body.donor_history,
      req.body.donor_blood_type,
      req.body.donor_email,
      req.body.recipient_email
    ])
      .then(response => res.status(200).send(response))
      .catch(response => res.status(500).send(response));
  },
  modifyProfile: (req, res, next) => {
    const db = req.app.get("db");
    console.log(req.body)

    db.modify_profile([
      req.body.hospital_1,
      req.body.hospital_2,
      req.body.hospital_3,
      req.body.recipient_name,
      req.body.recipient_dob,
      req.body.recipient_age,
      req.body.recipient_weight,
      req.body.recipient_height,
      req.body.recipient_history,
      req.body.recipient_dialysis,
      req.body.recipient_blood_type,
      req.body.donor_name,
      req.body.donor_dob,
      req.body.donor_age,
      req.body.donor_weight,
      req.body.donor_height,
      req.body.donor_history,
      req.body.donor_blood_type,
      req.body.pair_id,
      req.body.donor_email,
      req.body.recipient_email
    ])
      .then(response => res.status(200).send(response))
      .catch(response => res.status(500).send(console.log(response)));
  },
  deleteProfile: (req, res, next) => {
    const db = req.app.get("db");
    db.delete_profile(req.params.pair_id)
      .then(response => res.status(200).send(console.log(response)))
      .catch(response => res.status(500).send(console.log(response)));
  },
  confirmMatch: (req, res, next) => {
    const db = req.app.get("db");
    //answer must be true or null
    db.modify_confirmation(req.params.pair_id, req.params.answer)
      .then(response => res.status(200).send(console.log(response)))
      .catch(response => res.status(500).send(console.log(response)));
  },
  hospitalUpdater: (req, res, next) => {
    const db = req.app.get("db");
    //answer must be a number
    db.set_hospitals(req.body.hospital_1, req.body.hospital_2, req.body.hospital_3, req.body.pair_id)
      .then(response => res.status(200).send(console.log(response)))
      .catch(response => res.status(500).send(console.log(response)));
  }
};
