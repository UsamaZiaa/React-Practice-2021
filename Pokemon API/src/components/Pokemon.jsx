import { useEffect, useState } from "react"
import axios from 'axios'

const Pokemon = () => {
    const [num, setNum] = useState()
    const [name, setName] = useState()
    const [moves, setMoves] = useState()

    const fetchData = async () => {
        const rawData = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)
        const pokemon = rawData.data
        setName(pokemon.name)
        setMoves(pokemon.moves.length)
    }

    useEffect(()=>{
        if(num){
            fetchData()
        }
    }, [num])
    return(
        <div>
            <h1>Pokemon Game</h1>
            <h4>You Select Number: {num}</h4>
            <h2>Selected Pokemon: {name}</h2>
            <h3>{} has {moves} moves</h3>
            <select value={num} onChange={(event) => setNum(event.target.value)}>
                <option value='1'>1</option>
                <option value='25'>25</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
            </select>
        </div>
    )
}

export default Pokemon