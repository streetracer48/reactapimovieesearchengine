import React, { Component } from 'react'
import { Jumbotron, Grid, Row, Col, Image, Button} from 'react-bootstrap';
import $ from 'jquery';
import MovieRows from './rows'
export default class Home extends Component {
    constructor(props)
    {
      super(props)

      this.state = {},

  this.performSearch('games')

    }
  performSearch(searchTerm)
  {
    console.log('this is search')
  const urlString = 'https://api.themoviedb.org/3/search/movie?api_key=1b5adf76a72a13bad99b8fc0c68cb085&query='+searchTerm
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
      // console.log(movie.poster_path)

      movie.poster_src = "https://image.tmdb.org/t/p/w185" + movie.poster_path

      const movieRow = <MovieRows key={movie.id}  movie={movie}/>

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
  searchChangeHandler(event)
  {
    console.log(event.target.value)
    const boundObject=this
    const searchTerm=event.target.value

    boundObject.performSearch(searchTerm)



  }
  render() {
    return (
      <div>
          <input style={{
          fontSize: 24,
          display: 'block',
          width: "99%",
          paddingTop: 8,
          paddingBottom: 8,
          paddingLeft: 16
        }} onChange={this.searchChangeHandler.bind(this)} placeholder="Enter search term"/>
 {this.state.rows}

      </div>
    )
  }
}
