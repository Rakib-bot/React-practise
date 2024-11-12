import { useState } from 'react'
import SideBar from './SideBar/SideBar'
import Navigation from './Navigation/Navigation'
import Recommended from './Recommended/Recommended'
//import Products from './Products/Products'

import { data } from './db/data'
//import {res} from './db/try'
import Products from './Products/Products'

function App() {

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [recommendedClick,setRecommendedClick] =useState(null);
  // ----------- Input Filter -----------
  const [query, setQuery] = useState("");
 
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredData = query => data.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  )


  // ----------- Radio Filtering -----------
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
    console.log('rokib')
  };

  // ------------ Button Filtering -----------
  const handleClick = (event) => {
    setRecommendedClick(event.target.value)
    console.log(event.target.value)
  };

  function filteredResult(data, select, query,recommendedClick) {
    let result = data;
    if (query) {
      result = filteredData(query);
    }
    if (recommendedClick) {
      result = result.filter(({ category, color, company, newPrice, title }) =>
        category === recommendedClick ||
        color === recommendedClick ||
        company === recommendedClick ||
        newPrice === recommendedClick ||
        title === recommendedClick
      )
    }
    if (select) {
      result = result.filter(
        ({ category, color, company, newPrice, title }) =>
          category === select ||
          color === select ||
          company === select ||
          newPrice === select ||
          title === select
      )
    }
    return result;
  }

  const result = filteredResult(data, selectedCategory, query,recommendedClick);
  return (
    <>
      <SideBar  handleChange={handleChange}/>
      <Navigation  handleInputChange={handleInputChange} query={query}/>
      <Recommended handleClick={handleClick}  />
      <Products result={result} />


    </>
  )
}

export default App
