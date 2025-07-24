import React from 'react'
import Pagination from '../components/Pagination'
import Blogs from '../components/Blogs'
import Headers from '../components/Header'

const Home = () => {
  return (
    <div>
        <Headers/>
        <div>
            <Blogs/>
            <Pagination/>
        </div>
        
      
    </div>
  )
}

export default Home
