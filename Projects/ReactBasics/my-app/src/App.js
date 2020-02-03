import React, {Component} from 'react';
import './App.css';
import {CardList} from './component/cardList/cardList.component';
import {SearchBox} from './component/searchBox/search-box.component';
class App extends Component {

  constructor () {
    super();
    this.state = {
      Employee: [],
      searchField:''
    }
  }

  handleChange = (e) => {
     this.setState({searchField:e.target.value});
  }
  componentDidMount () {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(responce => responce.json())
    .then(users => this.setState({Employee:users}));
  }
  render() {
    const {Employee,searchField} = this.state;
    const filteredEmployee = Employee.filter( emp => {
     return emp.name.toLowerCase().includes(searchField.toLowerCase());
    }); 
    return (
        <div className="App">
        <h1>Employee Box</h1>
        <SearchBox placeholder="Search Employee" handleChange={this.handleChange}/>
        <CardList employee={filteredEmployee}>
        </CardList>
      </div>
    )
  }
}

export default App;
