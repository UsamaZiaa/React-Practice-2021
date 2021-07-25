const MyCard = ({element}) => {
    let imgSource = element.images
    imgSource = Object.values(imgSource)

    return ( 
        <div className="my-card">
            <img src={imgSource[0].url} alt="Card Img" />
            <h3>{element.title}</h3>
            <h6>{element.releaseYear}</h6>
        </div>
     );
}
 
export default MyCard;