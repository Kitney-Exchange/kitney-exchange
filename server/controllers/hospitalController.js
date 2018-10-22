module.exports = {
    getHospitals: (req, res, next) => {
        const db = req.app.get('db')
        db.get_hospitals()
        .then(response => res.status(200).send(response))
        .catch(err => res.status(500).send(err))
    },
    newHospital: (req, res, next) => {
        const db = req.app.get('db')
        db.new_hospital([req.body.name, req.body.phone, req.body.address, req.body.lat, req.body.long])
        .then(response => res.status(200).send(console.log(response)))
        .catch(response => res.status(500).send(console.log(response)))
    },
    modifyHospital: (req, res, next) => {
        const db = req.app.get('db')
        db.modify_hospital([req.body.name, req.body.phone, req.body.address, req.body.lat, req.body.long, req.body.hospital_id])
        .then(response => res.status(200).send(console.log(response)))
        .catch(response => res.status(500).send(console.log(response)))
    },
    deleteHospital: (req, res, next) => {
        const db = req.app.get('db')
        db.delete_hospital(req.params.hospital_id)
        .then(response => res.status(200).send(console.log(response)))
        .catch(response => res.status(500).send(console.log(response)))
    }
}