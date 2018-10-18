module.exports = {
    getProfiles: (req, res, next) => {
        const db = req.app.get('db')
        db.get_profiles()
        .then(response => res.status(200).send(response))
        .catch(err => res.status(500).send(err))
    },
    newProfile: (req, res, next) => {
        const db = req.app.get('db')
        console.log(req.body)
        db.new_profile(
            [req.body.hospital_1, 
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
            req.body.recipient_email])
        .then(response => res.status(200).send(response))
        .catch(response => res.status(500).send(response))
    },
    modifyProfile: (req, res, next) => {
        const db = req.app.get('db');
        db.modify_profile([req.body.hospital1, 
            req.body.hospital2,
            req.body.hospital3,
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
            req.body.recipient_email])
            .then(response => res.status(200).send('Profile Updated!'))
            .catch(response => res.status(500).send('An error has occurred'))
    },
    deleteProfile: (req, res, next) => {
        const db = req.app.get('db');
        db.delete_profile(req.params.pair_id)
        .then(response => res.status(200).send('Profile deleted!'))
        .catch(response => res.status(500).send('Error has occurred'))
    }
}