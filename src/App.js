import logo from './logo.svg';
import './App.css';
import * as axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "2fc274f6-5c86-48e9-aa6f-8e920b316173",
    }
})

const getUsers = (currentPage = 1, pageSize = 10) => {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
            console.log(response.data);
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
