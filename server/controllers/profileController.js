module.exports = {
    getProfiles: (req, res, next) => {
        const db = req.app.get('db')
        db.get_profiles()
        .then(response => res.status(200).send(response))
        .catch(err => res.status(500).send(err))
    },
    newProfile: (req, res, next) => {
        const db = req.app.get('db')
        db.new_profile(
            [req.body.hospital1, 
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
            req.body.donor_blood_type])
        .then(response => res.status(200).alert('Profile created!'))
        .catch(response => res.status(500).alert('Error has occurred'))
    }
}