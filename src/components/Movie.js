import  React, { Component } from 'react'

class Movie extends Component {
    viewMovie() {
        // console.log(this.movie.title)
        const url = "https://www.themoviedb.org/movie/" + this.props.movie.id
        window.location.href = url
    }
    render() {
        return <div className="movie" key={this.props.movie.id} > 
            <div className="movie-left">
                <img alt="poster" width="100%" src={this.props.movie.poster_src}/>
            </div>
            <div className="movie-right">
                <h3 >{this.props.movie.title}</h3>
                <p>{this.props.movie.overview}</p>
                <button onClick={this.viewMovie.bind(this)} >view</button>
            </div>
        </div>
    }
}

export default Movie