import mysql from "mysql";

async function produkter(req, res) {
    try {
        if (req.method === "GET") {
            var connection = mysql.createConnection({
                host: "localhost",
                user: "root",
                password: "",
                database: "saffron"
            })

            connection.query(`SELECT * FROM produkter`, (err, results, fields) => {
                if (err) throw err;
                const data = JSON.stringify(results)
                res.status(200).json(data)
            })
            connection.end();
        }
    } catch (err) {
        console.log("noe galt med mysql")
    }


}

export default produkter