import useFetch from '../hooks/useFetch'
import Header from '../components/Header'
import Body from '../components/Body'

const Series = () => {
    const {data} = useFetch({
        url: 'https://mumer01.github.io/publicApis/BoxOffice.json',
        category: 'series'
    }) 

    return(
        <div>
            <Header title="Popular Series"/>
            <Body data={data}/>
        </div>
    )
}

export default Series