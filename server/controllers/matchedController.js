module.exports = {
    getMatched: (req, res, next) => {
        const db = req.app.get('db')
        db.get_matched()
        .then(response => res.status(200).send(response))
        .catch(err => res.status(500).send(err))
    },
    getUnfinishedMatched: (req, res, next) => {
        const db = req.app.get('db')
        db.get_unfinished_matches()
        .then(response => res.status(200).send(response))
        .catch(err => res.status(500).send(err))
    },
    newMatched: (req, res, next) => {
        console.log(req.body)
        const db = req.app.get('db')
        db.new_matched([req.body.profiles, req.body.hospital, req.body.date])
        .then(response => res.status(200).send(response))
        .catch(response => res.status(500).send(response))
    },
    deleteMatched: (req, res, next) => {
        const db = req.app.get('db')
        db.delete_matched([req.params.id])
        .then(response => res.status(200).send(response))
        .catch(response => res.status(500).send(response))
    },
    setFinished: (req, res, next) => {
        const db = req.app.get('db')
        db.set_finished([req.params.id])
        .then(response => res.status(200).send(response))
        .catch(response => res.status(500).send(response))
    }
}