function mostrarTabla(req, res) {
    req.getConnection((err, conn) => {
        if (err) res.status(500).send(`${err}`)
        conn.query('select * from news order by "Nombre"', (err, result) => {
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

    req.getConnection((err, conn) => {
        conn.query('DELETE FROM news WHERE id = ?', [id], (err, result) => {
            console.log(result)
            res.redirect('/news')
        })
    })
}

function edit(req, res) {
    let id = req.params.id

    req.getConnection((err, conn) => {
        conn.query('select * from news where id = ?', [id], (err, result) => {
            res.render('update', { data: result[0] })
        })

    })
}

function update(req, res) {
    let id = req.params.id
    let cuerpo2 = req.body
    req.getConnection((err, conn) => {
        conn.query('update news set ? where id = ?', [cuerpo2, id], (err, result) => {

            res.redirect('/news')

        })

    })
}


module.exports = {
    mostrarTabla,
    enviarDatos,
    borrarId,
    edit,
    update
}