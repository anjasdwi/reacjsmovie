import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Movie from './components/Movie'
import $ from 'jquery'
// class App extends Component {

// }
class App extends Component {
constructor(props) {
  super(props)
  this.state = {}
  // console.log("Cek")
  // const movies = [
  //   {id:0, poster_src: "https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg", title: "Avenger: Infinity War", overview: "Lorem Ipsum"},
  //   {id:1, poster_src: "https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg", title: "Avenger", overview: "Lorem Ipsum"}
  // ]

  // this.state = {rows: [
  //     <p key="1">Ashiaaap1</p>,
  //     <p key="2">Ashiaaap2</p>,
  //     <p key="3">Ashiaaap3</p>
  // ]}

  // var movieRows = []
  // movies.forEach((movie)=>{
  //   console.log(movie.title)
  //   const movieRow = <Movie movie={movie  }/>
  //   movieRows.push(movieRow)
  // })
  
  // this.state = {rows: movieRows}
  this.performSeacrh("avengers")
}

performSeacrh(searchTerm) {
  console.log("Perform Search")
  const urlString = "https://api.themoviedb.org/3/search/movie?api_key=1b5adf76a72a13bad99b8fc0c68cb085&query="+searchTerm
  $.ajax( {
    url: urlString,
    success : (searchResult) => {
      console.log("Success")
      // console.log(searchResult)
      const results = searchResult.results

      var movieRows = []
      results.forEach((movie) => {
        movie.poster_src = "https://image.tmdb.org/t/p/w185" + movie.poster_path
        console.log(movie.poster_path)
        const movieRow = <Movie key={movie.id} movie={movie}/>
        movieRows.push(movieRow)
      })
      this.setState({rows: movieRows})
    },
    error : (xhr,status, err) => {
      console.error("Failed to fetch data")
    }
  })
}

searchChangeHandler(event) {
  console.log(event.target.value)
  const boundObject = this
  const searchTerm = event.target.value
  boundObject.performSeacrh(searchTerm)
}

  render() {
  return (
    <div className="App">
      <div className="header">
        <h2>Movie Search</h2>
        <p>You can search for any movie and anywhere here!</p>
      </div>
      <div className="search">
        <input type='text' onChange={this.searchChangeHandler.bind(this)} placeholder="Type Search here...."></input>
        <button>IO</button>
      </div>
      <section className="movie-content">
      {this.state.rows}
      </section>
    </div>
  );
  }
}

export default App;
