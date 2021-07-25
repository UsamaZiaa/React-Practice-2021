import MyCard from './MyCard'
 
 const Body = ({data}) => {
     return(
        <div className='card-container'>
            { data && data.map((element,index)=> <MyCard key={index} element={element}/>) }
        </div>
     )
 }

 export default Body