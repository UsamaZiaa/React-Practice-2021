import { useEffect, useState } from "react"

const Covid = () => {

    const [data, setData] = useState([])

    const getCovidData = async () => {
        try {
            const res = await fetch('https://api.covid19india.org/data.json')
            const actualData = await res.json()
            console.log(actualData.statewise[0])
            setData(actualData.statewise[0])
        } catch(err){
            console.log(err)
        }
    }

    useEffect(() => {
        console.log(data)
        getCovidData()
    }, [])

    return(
        <div>
            <h1>🔴Live</h1>
            <h2>Covid 19 Coronavirus Tracker</h2>
            <ul>
                <li className="card">
                    <div className="card_main">
                        <div className="card_inner">
                            <p className="card_name"><span>OUR</span>COUNTRY</p>
                            <p className="card_total card_small">INDIA {data.active}</p>
                            <p className="card_total card_small">INDIA {data.confirmed}</p>
                            <p className="card_total card_small">INDIA {data.deaths}</p>
                            <p className="card_total card_small">INDIA {data.lastupdatedtime}</p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Covid