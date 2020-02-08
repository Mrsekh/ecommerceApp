import React from 'react';
import './App.css';
import axios from 'axios';
import {Course} from './component/course/course-component';
import {SearchBox} from './component/search/search-component';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      courses:[],
      searchCourse:''
    }
  }

  async componentDidMount() {
   const data =  await axios('https://codingninjas.in/api/v3/courses');
    this.setState({courses:data.data.data.courses});
  }
  handleChange = (e) => {
    this.setState({searchCourse:e.target.value});
  }
  render() {
    const Co = this.state.courses;
    const input = this.state.searchCourse;
    const filteredCourses =  Co.filter(co => 
         co.name.toLowerCase().includes(input.toLowerCase()) 
    );
    return (
      <div className="App">
        <h1>Coding ninja</h1>
        <SearchBox placeholder="search box" handleChange={this.handleChange}/>
        <Course courseData={filteredCourses}/>>
      </div>
    );
  }
}

export default App;
