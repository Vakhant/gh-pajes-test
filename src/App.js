import logo from './logo.svg';
import './App.css';
import * as axios from "axios";

const getUsers = (currentPage = 1, pageSize = 10) => {
        return axios.get(`./sources.json`).then(response => {
            console.log(response);
        })
        
}

function App() {
  getUsers()
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          TesT merge
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
          <p>
            gh-pages-test2
          <br/>
            rebuild-test
          </p>
        </a>
      </header>
    </div>
  );
}

export default App;
