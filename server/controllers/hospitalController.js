module.exports = {
    getHospitals: (req, res, next) => {
        const db = req.app.get('db')
        db.get_hospitals()
        .then(response => res.status(200).send(response))
        .catch(err => res.status(500).send(err))
    },
    newHospital: (req, res, next) => {
        const db = req.app.get('db')
        db.new_hospital([req.body.name, req.body.phone, req.body.address])
        .then(response => res.status(200).send('Hospital added!'))
        .catch(response => res.status(500).send('Error has occurred'))
    },
    modifyHospital: (req, res, next) => {
        const db = req.app.get('db')
        db.modify_hospital([req.body.name, req.body.phone, req.body.address, req.body.hospital_id])
        .then(response => res.status(200).send('Hospital updated!'))
        .catch(response => res.status(500).send('Error has occurred'))
    },
    deleteHospital: (req, res, next) => {
        const db = req.app.get('db')
        db.delete_hospital(req.params.hospital_id)
        .then(response => res.status(200).send('Hospital deleted!'))
        .catch(response => res.status(500).send('Error has occurred'))
    }
}