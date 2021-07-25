import './App.css'

function App() {
  const heading = {
    fontFamily: "'Otomanopee One', sans-serif",
    color: "blueviolet",
    textAlign: "center",
    margin: "50px 0px"
  }
  
  return (
    <div className="App">
        {/* <h1 className="heading">Image Gallery</h1> */}
        <h1 style={heading}>Image Gallery</h1>
        <div className="img-div">
          <img src="https://picsum.photos/200/300" alt="Random Images" />
          <img src="https://picsum.photos/200/300" alt="Random Images" />
          <img src="https://picsum.photos/200/300" alt="Random Images" />
        </div>
    </div>
  );
}

export default App;
