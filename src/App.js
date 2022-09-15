import { Component } from 'react';

import CardList from './components/CardList/CardList';
import SearchBox from './components/SearchBox/SearchBox';

import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState(
        () => {
          return { monsters: users }
        }
      ))
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value.toLowerCase() })
  }

  render() {
    // Destructuring
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    // To store filtered monsters
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });

    return (
      <div>
        <h1 className='app-title'>Monsters Rolodex</h1>

        <SearchBox
          onChangeHandler={onSearchChange}
          placeholder="Search monster"
          className="monsters-search-box"
        />

        <CardList monsters={filteredMonsters} />
      </div>
    );
  }

}

export default App;
