import logo from './logo.svg';
import './App.css';
const {isbn10Checksum, isbn13Checksum} = require('isbn-check/src/isbn-check')

function App() {
//----Aufgabe b----//
  //Textfeld/input
  <textarea name="Isbn-Checker" id="checksum"></textarea>
  //Button
  Button.onclick = function(){ 
  const isbn10Checksum = () => {
    if (checksum.length < 10) {
      ISBN13.isbn13Checksum();
    }
      if(checksum == "X") {
        setIsValid(true);
        document.getElementById("checksum").style.background='#00f700'
      }
      else if (checksum % 11 == 0) {
        setIsValid(true);
        document.getElementById("checksum").style.background='#00f700'
      } 
    else (checksum % 11 != 0); {
      setIsValid(false);
      document.getElementById("checksum").style.background='#ff0000'
    };
  }
  }
  };


const isbn13Checksum = () => {
  if (checksum.length < 13) {
    ISBN10.isbn10Checksum();
  }
    if(checksum == "X") {
      setIsValid(true);
      document.getElementById("checksum").style.background='#00f700'
    }
    else if (checksum % 14 == 0) {
      setIsValid(true);
      document.getElementById("checksum").style.background='#00f700'
    } 
  else (checksum % 14 != 0); {
    setIsValid(false);
    document.getElementById("checksum").style.background='#ff0000'
  };
};
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );

export default App;
