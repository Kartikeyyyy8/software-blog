import React from 'react'

const Category = () => {
  const navigation = useNavigate();
    const location = useLocation();
    const category = location.pathname.split("/").at(-1);
  return (
    <div>
        <Headers/>
        <div>
            <button onClick={()=>{ navigation(-1)}}>Back</button>
      
        <h2 className='text-4xl '> Blogs on  <span>#{category}</span></h2>

    </div>
    <Blogs/>
    <Pagination/>

      </div> 
  )
}

export default Category
