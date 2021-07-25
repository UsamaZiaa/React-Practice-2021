import MyAccordian from './myaccordian'
import api from './data'

const Accordian = () => {
    const data = api
    return(
        <>
            <h1 className="text-success text-center">Hello Accordian</h1>
            {data.map((element)=>{
                return <MyAccordian key={element.id} {...element}/>
            })}
        </>
    )
}

export default Accordian