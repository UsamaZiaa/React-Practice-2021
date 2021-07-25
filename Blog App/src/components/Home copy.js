import useFetch from "../hooks/useFetch";
import BlogList from './BlogList'

const Home = () => {
    // const [blogs, setBlogs] = useState(null)
    // const [isPending, setIsPending] = useState(true)
    // const [error, setError] = useState(null)

    const {data, isPending, error} = useFetch('http://localhost:8000/blogs')

    //   const handleDelete = (id) => {
    //       const newBlogs = blogs.filter((blog) => blog.id !== id)
    //       setBlogs(newBlogs)
    //   }

    //   useEffect(() => {
    //     setTimeout(() => {
    //       fetch('http://localhost:8000/blogs')
    //       .then(res => {
    //           if(!res.ok){
    //               throw Error('Could Not Fetch The Data From That Resource')
    //           }
    //           return res.json()
    //       })
    //       .then(data => {
    //           setBlogs(data)
    //           setIsPending(false)
    //           setError(null)
    //       })
    //       .catch((err) => {
    //           setIsPending(false)
    //           setError(err.message)
    //           // console.log(err.message)
    //       })
    //     }, 1000)
    // }, [])

    return ( 
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading....</div>}
            {data && <BlogList blogs={data} title="All Blogs"/>}
            {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title="Mario Blogs"/> */}
        </div>
     );
}
 
export default Home;