
const SearchResult = ({name}) => {
    const imgSource = `https://source.unsplash.com/400x300/?${name}`
    // console.log(imgSource)
    return(
        <div>
            {name && <img src={imgSource} alt="Search Result"/>}
        </div>
    )
}
export default SearchResult