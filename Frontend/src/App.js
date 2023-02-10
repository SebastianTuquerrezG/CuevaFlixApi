import './App.css';
import api from './api/axiosConfig';
import {useState,useEffect} from 'react';
import Layout from './components/layout';
import {Routes,Route} from 'react-router-dom';
import Home from './components/home/Home';
import Header from './components/header/Header';
import Trailer from './components/trailer/Trailer';
import Reviews from './components/reviews/Revies';

function App() {

  const [movies,setMovies]=useState();
  const [movie, setMovie] = useState();
  const [reviews, setReviews] = useState([]);
  
  const getMovies = async()=>{
    try{
      const response = await api.get("/api/cuevaflix");
      console.log(response.data);
      setMovies(response.data);
    }catch(err){
      console.log(err.response);
    }
  }

  const getMovieData = async (movieId) => {
      
    try 
    {
      const response = await api.get(`/api/cuevaflix/${movieId}`);
      const singleMovie = response.data;
      setMovie(singleMovie);
      setReviews(singleMovie.reviews);
    } 
    catch (error) 
    {
      console.error(error);
    }
  }

  useEffect(()=>{
    getMovies();
  },[])

  return (
    <div className="App">  
      <Header/>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/" element={<Home movies={movies}/>}/>
          <Route path="/trailer/:ytTrailerId" element={<Trailer/>}/>
          <Route path="/Reviews/:movieId" element ={<Reviews getMovieData = {getMovieData} movie={movie} reviews ={reviews} setReviews = {setReviews} />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
