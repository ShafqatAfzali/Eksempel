import { useState } from "react"


function Hele() {
    const [navn, setnavn] = useState("")
    const [email, setemail] = useState("")
    const [country, setcountry] = useState("")
    const [Bekreftet, setBekreftet] = useState(false)


    async function settinn(e) {
        e.preventDefault();
        if (navn && email && country) {

            const kunde = JSON.stringify({ navn: navn, email: email, country: country })

            const response = await fetch("/api/kunde_inf", {
                method: "POST",
                header: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: kunde
            })
            const bekreft = await response.json()
            console.log(bekreft, typeof bekreft)
            if (bekreft.Accept === "ja") {
                setBekreftet(true)
                console.log("gjort")
            }
        }
    }

    return <div>
        <h1>Kasse</h1>
        <div className="viser-bought">

        </div>

        <form action="" onSubmit={settinn}>
            <input type="text" id="navn" name="navn" placeholder="name" value={navn} onChange={(e) => { setnavn(e.target.value) }} />
            <input type="text" id="email" name="email" placeholder="email" value={email} onChange={(e) => { setemail(e.target.value) }} />
            <input type="text" id="country" name="country" value={country} placeholder="country" onChange={(e) => { setcountry(e.target.value) }} />
            <button id="btn" type="submit">bekreft</button>
        </form>

        <div className="sende-metode" style={{ backgroundColor: "black", height: "50vh", width: "100vw" }}></div>

        <div className="total-betaling" style={{ backgroundColor: "grey", height: "10vh", width: "100vw" }}></div>

        <div className="betaling">
            <button className="betaling-btn" style={{ backgroundColor: "orange", height: "10vh", width: "20vw" }} >betal</button>
        </div>

    </div>
}

export default Hele