import React from 'react';
import axios from 'axios';
import Movie from './Movie';
import './App.css';

class App extends React.Component{
  state ={
    isLoading : true,
    movies : []
  };

  getMovies = async () => {
    const {
      data:{
        data:{movies}
      }
    } = await axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");
    //this.setState({movies:movies}) // 하나는 state 하나는 axios
    this.setState({movies, isLoading : false}); // 단축해서 사용가능 (JS가 이해함)
  };

  componentDidMount() {
    this.getMovies();
  }

  render(){
    const {isLoading, movies } = this.state;
     return(
      <section class="container">
        {isLoading? (
          <div class="loader">
            <span clss ="loader_text">Loading...</span>
          </div>
        ) : (
        <div class="movies"> 
        {movies.map(movie =>(
            <Movie id={movie.id} // props들 가져오기
              key={movie.id}
              year={movie.year}
              title={movie.title}
              summary={movie.summary}
              poster={movie.medium_cover_image}/>
              ))}
          </div>
     )}
      </section>
     );
  }
}

export default App;
