import React from 'react';
import { config } from './Config.js';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = { categories: [] }
  }

  componentDidMount() {
    fetch(config.API_URL + '/api/v1/categories/')
      .then(response => response.json())
      .then(data => {
        this.setState({ categories: data.results })
      });
  }

  render() {
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
          <ul>
            {this.state.categories.map(category => {
              return <li key={`category-${category.id}`}>{category.title}</li>
            })}
          </ul>
        </header>
      </div>
    )
  }
}

export default App;
