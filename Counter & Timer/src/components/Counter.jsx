import {useState} from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)
    return(
        <>
        <h1>My Counter</h1>
        <h1 style={{fontSize: '100px'}}>{count}</h1>
        <div style={{display: 'flex'}}>
          <button onClick={() => setCount(count+1)}>Increment</button>
          <button onClick={() => setCount(count-1)}>Decrement</button>
        </div>
        </>
    )
}

export default Counter