import './App.css';
import api from './api/axiosConfig';
import {useState,useEffect} from 'react';

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

    </div>
  );
}

export default App;
