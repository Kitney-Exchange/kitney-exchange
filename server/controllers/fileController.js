module.exports = {
    getFiles: (req, res, next) => {
        const db = req.app.get('db')
        db.get_files()
        .then(response => res.status(200).send(response))
        .catch(err => res.status(500).send(err))
    },
    newFile: (req, res, next) => {
        const db = req.app.get('db')
        db.new_file([req.body.pair_id, req.body.file_url])
        .then(response => res.status(200).send(response))
        .catch(response => res.status(500).send(response))
    }
}