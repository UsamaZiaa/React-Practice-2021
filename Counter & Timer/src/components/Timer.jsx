import {useState} from 'react'

const Timer = () => {
    const [time, setTime] = useState(new Date().toLocaleTimeString())
    setInterval(() => setTime(new Date().toLocaleTimeString()),1000)
    return(
        <>
            <h1>Timer</h1>
            <h1>{time}</h1>
        </>
    )
}

export default Timer