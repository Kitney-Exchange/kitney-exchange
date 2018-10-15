module.exports = {
    getMatched: (req, res, next) => {
        const db = req.app.get('db')
        db.get_matched()
        .then(response => res.status(200).send(response))
        .catch(err => res.status(500).send(err))
    },
    newMatched: (req, res, next) => {
        const db = req.app.get('db')
        db.new_matched([req.body.profiles, req.body.hospital, req.body.date])
        .then(response => res.status(200).alert('Match added!'))
        .catch(response => res.status(500).alert('Error has occurred'))
    }
}