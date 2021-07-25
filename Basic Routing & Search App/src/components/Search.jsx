import { useState } from 'react'
import SearchResult from './SearchResult'

const Search = () => {
    const [item, setItem] = useState()
    return(
        <div>
            <h1 style={{textAlign: 'center'}}>This is Search Page</h1>
            <input type="input" onChange={(event) => setItem(event.target.value)}/>  
            <SearchResult name={item}/>         
        </div>
    )
}
export default Search