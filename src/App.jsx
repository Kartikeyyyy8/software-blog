import { useContext, useEffect, useState } from 'react'

import './App.css'
import Headers from "./components/Header";
import Blogs from "./components/Blogs";
import Pagination from "./components/Pagination"
import Home from './Pages/Home';
import Category from './Pages/Category';
import TagPage from './Pages/TagPage';
import BlogPage from './Pages/BlogPage';
import { AppContext } from './context/AppContext';
import {Routes, Route} from 'react-router-dom';
import { useSearchParams,useLocation } from 'react-router-dom';

function App() {
   const {fetchBlogPosts} = useContext(AppContext);
  const[searchParams,setSearchParams] = useSearchParams();
  const location = useLocation();


 
  useEffect(()=>{
// fetchBlogPosts.fetchBlogPosts(1);

// get page
const page = searchParams.get("page") ??1;

 if(location.pathname.includes("tags")){
  const tag = location.pathname.split("/").at(-1).replaceAll("-","");
  fetchBlogPosts(Number(page),tag);
 }
   else if(location.pathname.includes("categories")){
  const category = location.pathname.split("/").at(-1).replaceAll("-","");
  fetchBlogPosts(Number(page),null,category);
 }
 else{
  fetchBlogPosts(Number(page));
 }


  },[location.pathname,location.search])
 

  return (
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/blog/:blogId' element={<BlogPage/>} />
    <Route path='/tags/:tag' element={<TagPage/>} />
    <Route path='/categories/:category' element={<Category/>} />
    </Routes>
 
 
 
 
   
  )
}

export default App





// in appjsx
{/* <div className='w-full h-full flex flex-col gap-y-1 justify-center items-center'>
  <Headers/>
  <Blogs/>
  <Pagination/>
 </div> */}
