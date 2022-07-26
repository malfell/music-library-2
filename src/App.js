import './App.css';
// import Suspense with the rest of React features
import { useEffect, useState, Suspense } from 'react'
import Gallery from './components/Gallery'
import SearchBar from './components/SearchBar'
// import helper promise at app level
// change function name to fetchData for better consistency
import { createResource as fetchData } from './helper'
import Spinner from './components/Spinner'

function App() {
  let [searchTerm, setSearchTerm] = useState('')
  // must change default useState to null instead of an array of objects now
  let [data, setData] = useState(null)
  let [message, setMessage] = useState('Search for Music!')

  // adapt use effect to fetchData function
  // we reformatted type of data that our data state variable stores
  // it doesn't store an array of objects now
  useEffect(() => {
    if (searchTerm) {
        setData(fetchData(searchTerm))
    }
  }, [searchTerm])

  const handleSearch = (e, term) => {
    e.preventDefault()
    setSearchTerm(term)
  }

  // must tell app to wait for data before trying to render the gallery component
  const renderGallery = () => {
    if(data){
      return (
        <Suspense fallback={<Spinner />}>
          <Gallery data={data} />
        </Suspense>
      )
    }
  }

  return (
    <div className="App">
      <SearchBar handleSearch={handleSearch} />
      {message}
      {renderGallery()}

      
    </div>
  );
}

export default App;