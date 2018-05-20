import React, { Component } from 'react';
import './App.css'
import Navbar from './components/customNavbar'
import MovieRows from './components/rows'
import $ from 'jquery'
import { Jumbotron, Grid, Row, Col, Image, Button} from 'react-bootstrap';
class App extends Component {
  constructor(props)
  {
    super(props)

    this.state = {},

this.performSearch()

  }
performSearch()
{
  console.log('this is search')
const urlString = 'https://api.themoviedb.org/3/search/movie?api_key=1b5adf76a72a13bad99b8fc0c68cb085&query=marvel'
$.ajax({
url:urlString,
success: (searchResults) => {
  console.log("Fetched data successfully")
  // console.log(searchResults)
  const results = searchResults.results
  // console.log(results[0])

  var movieRows = []

  results.forEach((movie) => {
    // movie.poster_src = "https://image.tmdb.org/t/p/w185" + movie.poster_path
     console.log(movie.poster_path)

    movie.poster_src = "https://image.tmdb.org/t/p/w185" + movie.poster_path

    const movieRow = <MovieRows  movie={movie}/>


    movieRows.push(movieRow)
  })


  this.setState({rows: movieRows})
},

error: (xhr, status, err) =>
 {
console.log('fetch error');
 }


})

}

  render() {
    return (
      <div className="App">


<Navbar/>
<div className="row">
<input style={{
          fontSize: 24,
          display: 'block',
          width: "99%",
          paddingTop: 8,
          paddingBottom: 8,
          paddingLeft: 16,

        }} placeholder="Enter search term"/>
        </div>
        <br/>

{this.state.rows}
      </div>
    );
  }
}

export default App;
