import mysql from "mysql"

async function fått_send_bought(req, res) {
    try {
        if (req.method === "POST") {
            const js_kjøpt = req.body
            const kjøpt = JSON.parse(js_kjøpt)

            var connection = mysql.createConnection({
                host: "localhost",
                user: "root",
                password: "",
                database: "saffron"
            })

            const q = "INSERT INTO midlertidig_bought (id,amount) VALUES ?";
            connection.query(q, [kjøpt.map(i => [i.id, i.amount])], (err, result) => {
                if (err) {
                    console.log("noe gikk galt")
                }
            })
            connection.end()
            res.status(200).json({ recieved: "recieved" })
        }
    } catch (err) {
        console.log(err, "noe gikk galt med data overføring fra hoved til kassen")

    }

}


export default fått_send_bought