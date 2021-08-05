import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [text, setText] = useState('');
  const [data, setData] = useState();

  useEffect(() => {
    if (text.length !== 0) {
      fetch(`https://goweather.herokuapp.com/weather/${text}`)
        .then(stream => stream.json())
        .then(result => setData(result));
    }
  }, [text]);

  let temperature = "";

  if (data !== undefined) {
    temperature = data.temperature;
  }

  return (
    <div className="App">
      <input
        type="text" 
        value={text} 
        onChange={(evt) => { 
           setText(evt.target.value);  
        }}
      />
      <p>{text} {temperature}</p>
    </div>
  );
}

export default App;
