const express = require("express")
const next = require("next")
const path = require("path")
const mysql = require("mysql")
const PORT = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== "production"
const app = next({ dir: ".", dev })

const handle = app.getRequestHandler()


app.prepare().then(() => {
    const server = express();
    server.use(express.urlencoded({ extended: false }))
    server.use(express.json())
    server.use(require("body-parser").json())

    server.get("/api", (req, res) => {
        var connection = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "",
            database: "saffron"
        })

        connection.query(`SELECT * FROM produkter`, (err, results, fields) => {
            if (err) throw err;
            res.json(results)
        })
        connection.end();
    })


    server.post("/kasse", (req, res) => {
        const verdi = req.body
        console.log("her:73    ", verdi);
        //res.status(201).send({ fikk: "true" })
        //res.redirect("/kasse",)
        //res.end()
        res.send({ fikk: "ja", body: req.body })
    })

    /*    server.get("/", (req, res) => {
            app.render(req, res, "/index")
        })*/

    server.get("*", (req, res) => {
        return handle(req, res)
    })

    server.listen(PORT, err => {
        if (err) throw `\tnoe gikk galt\t\n ${err}`;
        console.log(`server er live på localhost:${PORT}`)
    })
}).catch(ex => {
    console.log(ex.stack);
    process.exit(1);
})

