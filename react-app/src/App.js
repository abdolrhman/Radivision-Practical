import logo from './logo.svg';
import './App.css';
import {Button} from "react-bootstrap";


function App() {
  // Set initial state
  this.state = {msg : 'Hi, There!'}
  // Binding this keyword
  this.handleClick = this.handleClick.bind(this)

  function handleClick() {
         this.setState({msg : 'Welcome to the React world!'})
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Button onClick={this.handleClick()} variant="primary">Primary</Button>{' '}
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
}

export default App;
