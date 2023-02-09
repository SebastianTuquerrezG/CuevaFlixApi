import './App.css';
import api from './api/axiosConfig';
import {useState,useEffect} from 'react';
import Layout from './components/layout';
import {Routes,Route} from 'react-router-dom';
import Home from './components/home/Home'

function App() {

  const [movies,setMovies]=useState();
  
  const getMovies = async()=>{
    try{
      const response = await api.get("/api/cuevaflix");
      console.log(response.data);
      setMovies(response.data);
    }catch(err){
      console.log(err.response);
    }
  }

  useEffect(()=>{
    getMovies();
  },[])

  return (
    <div className="App">  
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/" element={<Home movies={movies}/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
