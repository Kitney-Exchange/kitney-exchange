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
        .then(response => res.status(200).alert('Hospital added!'))
        .catch(response => res.status(500).alert('Error has occurred'))
    }
}