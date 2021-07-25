import './App.css'

function App() {
  
  let currentHour = new Date()
  currentHour = currentHour.getHours()
  let greeting = ""
  let greetStyle = {
    color: "",
  }

  if(currentHour < 15){
    greeting = "Good Morning"
    greetStyle.color = 'green'
  }
  else if(currentHour < 19){
    greeting = "Good Afternoon"
    greetStyle.color = 'orange'
  }
  else{
    greeting = "Good Night"
    greetStyle.color = 'black'
  }

  return (
      <div className="App">
        <h1 className="heading">Hello Sir, <span style={greetStyle}>{greeting}</span></h1>
      </div>
  );
}

export default App;
