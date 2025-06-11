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
  //States to store the current movie data
  const [movieData, setMovieData] = useState([])
  const [pageNum, setPageNum] = useState(1)

  //States to store search information
  const [searchPage, setSearchPage] = useState(1)
  const [searchString, setSearchString] = useState('')

  //URL for featching data from API
  const nowPlayingURL = `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${pageNum}`
  const searchURL = `https://api.themoviedb.org/3/search/movie?query=${searchString}&page=${searchPage}`
  
  const [url, setUrl] = useState(nowPlayingURL)

  useEffect(() => {
      const fetchMovieData =  async () => {
          try{
              var res = await fetch(url, options)
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
  },[url])

  useEffect(() => {
    setUrl(nowPlayingURL)
  },[pageNum])

  const load = () => {
    setPageNum(pageNum + 1)
  }

  //**-----------------Search Function-----------------**//
  const clearSearch = () => {
    setMovieData([])
    setSearchString('')
    setSearchPage(1)
    setPageNum(1)
    setUrl(nowPlayingURL)
  }

  const search = () => {
    setMovieData([])
    setUrl(searchURL)
  }

  const updateSearchTerm = evt => {
    setSearchString(evt.target.value)
  }


  return (
    <div className="App">
      <Header clear={clearSearch}  search={search} searchTermFunction={updateSearchTerm} searchString={searchString}/>
      <Body data={movieData} load={load}/>
      <Footer />
    </div>
  )
}

export default App
