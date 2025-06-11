import { useState, useEffect } from 'react'
import Header from './Header'
import Body from './Body'
import Footer from './Footer'
import './App.css'

//API Info for fetch
const API_KEY = import.meta.env.VITE_API_KEY
const options = {method: 'GET', headers: {accept: 'application/json',
                Authorization: `Bearer ${API_KEY}`}}

const App = () => {
  const [movieData, setMovieData] = useState([])
  const [pageNum, setPageNum] = useState(1)

  //URL for featching data from API
  const URL = `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${pageNum}`
  
  useEffect(() => {
      const fetchMovieData =  async () => {
          try{
              var res = await fetch(URL, options)
              if(res.ok){
                  const data = await res.json();
                  setMovieData([...movieData, ...data.results]);
              }else{
                  throw new Error("API Not Responding")
              }
          }catch(error){
              console.error("Error: ", error.message)
          }
      }
      fetchMovieData();
  },[pageNum])

  const load = () => setPageNum(pageNum + 1)


  return (
    <div className="App">
      <Header />
      <Body data={movieData} load={load}/>
      <Footer />
    </div>
  )
}

export default App
