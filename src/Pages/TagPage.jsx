import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const TagPage = () => {
    const navigation = useNavigate();
    const location = useLocation();
    const tag = location.pathname.split("/").at(-1);
  return (
    <div>
        <Headers/>
        <div>
            <button onClick={()=>{ navigation(-1)}}>Back</button>
      
        <h2 className='text-4xl '> Blogs Tagged  <span>#{tag}</span></h2>

    </div>
    <Blogs/>
    <Pagination/>

      </div>
  )
}

export default TagPage
