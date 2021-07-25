import useFetch from '../hooks/useFetch'
import Header from '../components/Header'
import Body from '../components/Body'

const Movies = () => {
    const {data} = useFetch({
        url: 'https://mumer01.github.io/publicApis/BoxOffice.json',
        category: 'movie'
    }) 

    return(
        <div>
            <Header title="Popular Movies"/>
            <Body data={data}/>
        </div>
    )
}

export default Movies