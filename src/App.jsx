import { useEffect, useState } from 'react'
import './App.css'
import Category from './Components/Category/Category'
import FeaturedJobs from './Components/FeaturedJobs/FeaturedJobs'
import Header from './Components/Header/Header'

function App() {
  const [x, setX] = useState([]);
  useEffect(() => {
    fetch('FeatureJobs.json')
      .then(res => res.json())
      .then(data => setX(data));
  }, [x]);
  const handleViewDetails = (id) => {
    console.log(id);

    const y = x.find(a => a.id === id);
    console.log(y);
  }

  return (
    <>
      <Header></Header>
      <Category></Category>
      <FeaturedJobs handleViewDetails={handleViewDetails}></FeaturedJobs>
    </>
  )
}

export default App
