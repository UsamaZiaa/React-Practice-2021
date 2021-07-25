import {useState} from 'react'

const Time = () => {
    const [time, setTime] = useState(new Date())
    return(
        <>
            <h1>{time.toLocaleTimeString()}</h1>
            <button onClick={() => setTime(new Date())}>Get Current Time</button>
        </>
    )
}

export default Time