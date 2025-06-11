import { useState, useEffect } from 'react'
import Header from './Header'
import Body from './Body'
import SideNav from './components/SideNav'
import Footer from './Footer'
import sort from './utils/utils'
import './App.css'

//API Info for fetch
const API_KEY = import.meta.env.VITE_API_KEY
const options = {method: 'GET', headers: {accept: 'application/json',
                Authorization: `Bearer ${API_KEY}`}}

const App = () => {
  //States to store the current movie data
  const [movieData, setMovieData] = useState([])
  const [pageNum, setPageNum] = useState(1)

  //State Arrays for fav and watched movies
  const [favMovies, setFavMovies] = useState([])
  const [watchedMovies, setWatchedMovies] = useState([])

  //States to store search information
  const [searchPage, setSearchPage] = useState(1)
  const [searchString, setSearchString] = useState('')

  //URL for featching data from API
  const nowPlayingURL = `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${pageNum}`
  const searchURL = `https://api.themoviedb.org/3/search/movie?query=${searchString}&page=${searchPage}`
  const [url, setUrl] = useState(nowPlayingURL)

  //States for sort
  const [sortType, setSortType] = useState('none')

  //Rerender movie data whenever url for api call changed and append to movie data
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

  //Update the url for loading more movies
  useEffect(() => {
    setUrl(nowPlayingURL)
  },[pageNum])

  //Update page number to update the url
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
  //**--------------------------------------------------**//


  //**------------------Sort Function-------------------**//

  useEffect(() => {
  
    console.log('do sort')
    console.log(sortType)
    const sortedMovies = sort(movieData,sortType)
    setMovieData(sortedMovies)

  },[sortType])


  const updateSortType = evt => {
    setSortType(evt.target.value)
  }

  //**--------------------------------------------------**//

  //**------------------Sort Function-------------------**//

  //**--------------------------------------------------**//

  return (
    <div className="App">
      <Header clear={clearSearch}  search={search} searchTermFunction={updateSearchTerm} searchString={searchString} sortFunc={updateSortType}/>
      <SideNav />
      <Body data={movieData} load={load}/>
      <Footer />
    </div>
  )
}

export default App
