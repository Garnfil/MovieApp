
// This is for header of the App
class Header extends React.Component {
  
  state = {
    searchValue: '',
  }
  
  onSearch = (e) => {
    this.setState({
      searchValue: e.target.value
    })
  }
  
  render() {
    if (!this.props.showBody) {
      return null
    }
    return(
      <div className="header">
       	<div class="first-head">
        	<a class="logo" href="">MoviesApp</a>
        	<div>
      	    <input value={this.state.searchValue} onChange={this.onSearch} class="search-bar" type="search" placeholder="Search..."/>
      	    <button onClick={this.props.onSearchMovie.bind(this, this.state.searchValue)} className="search-button">Search</button>
      	  </div>
      	</div>
      	<div class="second-head">
      	 <button className='active' onClick={this.props.onGenre.bind(this, '')}>All</button>
         <button onClick={this.props.onGenre.bind(this, 'Action')}>Action</button>
      	 <button onClick={this.props.onGenre.bind(this, 'Romance')}>Romance</button>
     	   <button onClick={this.props.onGenre.bind(this, 'Comedy')}>Comedy</button>
         <button onClick={this.props.onGenre.bind(this, 'Fantasy')}>Fantasy</button>
         <button onClick={this.props.onGenre.bind(this, 'Sci-Fi')}>Sci-fi</button>
         <button onClick={this.props.onGenre.bind(this, 'Horror')}>Horror</button>
         <button onClick={this.props.onGenre.bind(this, 'Thriller')}>Thriller</button>
         <button onClick={this.props.onGenre.bind(this, 'Adventure')}>Adventure</button>
         <button onClick={this.props.onGenre.bind(this, 'Crime')}>Crime</button>
       	 <button onClick={this.props.onGenre.bind(this, 'Drama')}>Drama</button>
       	 <button onClick={this.props.onGenre.bind(this, 'Animation')}>Animation</button>
      	</div>
     </div>
    )
  }
}

// Display 50 Movie
class Movie extends React.Component {
  render() {
    return (
      this.props.movies.map(movie =>
      <div onClick={this.props.onShowMovie.bind(this, movie.id)}>
        <img src={movie.medium_cover_image} />
        <h2>{movie.title}</h2>
      </div>)
    )
  }
}


class Movies extends React.Component {
  render() {
    if (!this.props.showBody) {
      return null
    }
    return (
      <div className="main-container">
        <Movie onShowMovie={this.props.onShowMovie} movies={this.props.movies}/>
      </div>
    )
  }
}

//The buttons for pages
class PagesButtons extends React.Component {
  render() {
    if (!this.props.showBody) {
      return null
    }
    return(
      <div class="page-buttons">
       <button className='active' onClick={this.props.onPage.bind(this, 1)}>1</button>
       <button onClick={this.props.onPage.bind(this, 2)}>2</button>
       <button onClick={this.props.onPage.bind(this, 3)}>3</button>
       <button onClick={this.props.onPage.bind(this, 4)}>4</button>
       <button onClick={this.props.onPage.bind(this, 5)}>5</button>
       <button onClick={this.props.onPage.bind(this, 6)}>6</button>
       <button onClick={this.props.onPage.bind(this, 7)}>7</button>
       <button onClick={this.props.onPage.bind(this, 8)}>8</button>
       <button onClick={this.props.onPage.bind(this, 9)}>9</button>
       <button onClick={this.props.onPage.bind(this, 10)}>10</button>
       <button onClick={this.props.onPage.bind(this, 11)}>11</button>
       <button onClick={this.props.onPage.bind(this, 12)}>12</button>
       <button onClick={this.props.onPage.bind(this, 13)}>13</button>
       <button onClick={this.props.onPage.bind(this, 14)}>14</button>
       <button onClick={this.props.onPage.bind(this, 15)}>15</button>
       <button onClick={this.props.onPage.bind(this, 16)}>16</button>
       <button onClick={this.props.onPage.bind(this, 17)}>17</button>
       <button onClick={this.props.onPage.bind(this, 18)}>18</button>
       <button onClick={this.props.onPage.bind(this, 19)}>19</button>
       <button onClick={this.props.onPage.bind(this, 20)}>20</button>
       <button onClick={this.props.onPage.bind(this, 21)}>21</button>
       <button onClick={this.props.onPage.bind(this, 22)}>22</button>
       <button onClick={this.props.onPage.bind(this, 23)}>23</button>
       <button onClick={this.props.onPage.bind(this, 24)}>24</button>
       <button onClick={this.props.onPage.bind(this, 25)}>25</button>
       <button onClick={this.props.onPage.bind(this, 26)}>26</button>
       <button onClick={this.props.onPage.bind(this, 27)}>27</button> 
       <button onClick={this.props.onPage.bind(this, 28)}>28</button>
       <button onClick={this.props.onPage.bind(this, 29)}>29</button>
       <button onClick={this.props.onPage.bind(this, 30)}>30</button>
      </div>
    )
  }
}

// The Details of the Movie
class MovieDetail extends React.Component {
  render() {
    if (!this.props.showMovie) {
      return null
    }
     const {background_image_original, medium_cover_image, title, description_intro, rating, url, runtime, medium_screenshot_image1, medium_screenshot_image2, medium_screenshot_image3, large_screenshot_image1, large_screenshot_image2, large_screenshot_image3, small_cover_image, genres} = this.props.movie;
    
    return (
   <div>
   <div class="movie-head">
		<div onClick={this.props.onBack} class="back">Back</div>
		<a class="logo" href="">MovieApp</a>
	</div>
	
	<div class="movie-content">
		<div class="background">
			<img src={background_image_original} alt=""/>
		</div>
		<div class="movie-profile">
			<div class="first-profile">
				<div>
					<img src={medium_cover_image} alt=""/>
				</div>
			</div>
			<div class="second-profile">
				<h1>{title}</h1>
				<p>{description_intro}</p>
				<h3>Rating: {rating}</h3>
				<a href={url}>{url}</a>
				<h3>Runtime: {runtime}</h3>
				<h3>Genre: {genres.toString()}</h3>
				<div class="screenshots">
					<img src={medium_screenshot_image1} alt=""/>
					<img src={medium_screenshot_image2} alt=""/>
					<img src={medium_screenshot_image3} alt=""/>
					<img src={large_screenshot_image1} alt=""/>
					<img src={large_screenshot_image2} alt=""/>
					<img src={large_screenshot_image3} alt=""/>
			  	<img src={small_cover_image} alt=""/>
				</div>
			</div>
		</div>
	</div>
	</div>
    )
  }
}



class App extends React.Component {
  
  state = {
    movies: null,
    onLoaded: false,
    genre: '',
    query: '',
    page: 1,
    showBody: false,
    showMovie: false
  }
  
  componentDidMount() {
    fetch(`https://yts.mx/api/v2/list_movies.json?limit=30&page=${this.state.page}&genre=${this.state.genre}&order_by=asc`)
      .then(response => response.json())
      .then(movies => {
        this.setState({
          movies: movies.data.movies,
          onLoaded: true,
          showBody: true
        })
     })
  }
  
  
  onGenre = (genre, e) => {
    this.setState({
      genre: genre
    })
    fetch(`https://yts.mx/api/v2/list_movies.json?limit=30&genre=${this.state.genre}&sort_by=2021`)
      .then(response => response.json())
      .then(movies => {
        this.setState({
          movies: movies.data.movies,
          genre: genre
        })
      })
      const filterButtons = document.querySelectorAll('.second-head button');
      for (let i = 0; i < filterButtons.length; i++) {
        filterButtons[i].classList.remove('active');
      }
      e.target.classList.add('active');
      
  }
  
  onSearchMovie = (val) => {
    this.setState({
      query: val
    })
    fetch(`https://yts.mx/api/v2/list_movies.json?query_term=${this.state.query}`)
      .then(response => response.json())
      .then(movies => {
        this.setState({
          movies: movies.data.movies,
          query: val,
        })
     })
  }
  
  onPage = (page) => {
    fetch(`https://yts.mx/api/v2/list_movies.json?limit=50&page=${this.state.page}&genre=${this.state.genre}&sort_by=2021`)
      .then(response => response.json())
      .then(movies => {
        this.setState({
          movies: movies.data.movies,
          page: page
        })
      })
      const pageButtons = document.querySelectorAll('.page-buttons button');
      
      for (let i = 0; i < pageButtons.length; i++) {
        pageButtons[i].classList.remove('active');
      }
      pageButtons[page -1].classList.add('active');
  }
  
  onShowMovie = (id) => {
    fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}&with_images=true`)
      .then(response => response.json())
      .then(movie_detail => {
        this.setState({
          movies: movie_detail.data.movie,
          showBody: false,
          showMovie: true
        })
        console.log(movie_detail)
      })
  }
  
  onBack = () => {
    fetch(`https://yts.mx/api/v2/list_movies.json?limit=30&page=${this.state.page}&genre=${this.state.genre}&sort_by=2021`)
      .then(response => response.json())
      .then(movies => {
        this.setState({
          movies: movies.data.movies,
          onLoaded: true,
          showBody: true,
          showMovie: false
        })
      })
  }
  
  render() {
    if (!this.state.onLoaded) {
      return <h1>Please wait for a while</h1>
    }
    return(
      <React.Fragment>
        <Header showBody={this.state.showBody} onGenre={this.onGenre} onSearchMovie={this.onSearchMovie} />
        <Movies onShowMovie={this.onShowMovie} showBody={this.state.showBody} movies={this.state.movies} />
        <PagesButtons showBody={this.state.showBody} onPage={this.onPage}/>
        <MovieDetail onBack={this.onBack} movie={this.state.movies} showMovie={this.state.showMovie} onShowMovie={this.onShowMovie} />
      </React.Fragment>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));