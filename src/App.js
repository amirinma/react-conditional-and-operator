import logo from './logo.svg';
import './App.css';
import React from "react"

function App() {
  const [transparent, setTransparent]=React.useState(true)
  return (
    <div className="App">
     {transparent && <h1>I like transparent background!</h1>}
     {!transparent && <h1>I don't like transparent background</h1>}
    </div>
  );
}

export default App;
