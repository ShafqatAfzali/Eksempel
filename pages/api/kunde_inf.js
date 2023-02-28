import mysql from "mysql";

async function behandle_kunde_inf(req, res) {
    try {
        if (req.method === "POST") {
            var connection = mysql.createConnection({
                host: "localhost",
                user: "root",
                password: "",
                db: "saffron"
            })
            connection.query("SELECT * FROM produkter", (error, results) => {
                console.log(req.body)
                res.status(200).json({ Accept: "ja" })
            })
        }
    } catch (err) {
        console.log(err, "\nnoe gikk galt med behandling av kunde api")
    }
}


export default behandle_kunde_inf