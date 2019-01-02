function mostrarTabla(req, res) {
    req.getConnection((err, conn) => {
        if (err) res.status(500).send(`${err}`)
        conn.query('select * from news', (err, result) => {
            res.render('index', { result })

        })
    })

}

function enviarDatos(req, res) {
    const data = req.body
    req.getConnection((err, conn) => {
        if (err) res.status(500).send(`${err}`)
        conn.query('INSERT INTO news set ?', [data], (err, result) => {
            res.redirect('/news')
        })

    })
}

function borrarId(req, res) {
    let id = req.params.id
    console.log(id)
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM news WHERE id = ?', [id], (err, result) => {

            res.redirect('/news')
        })
    })
}




module.exports = {
    mostrarTabla,
    enviarDatos,
    borrarId
}