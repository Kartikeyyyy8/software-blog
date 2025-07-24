import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";


export const AppContext = createContext();

 export function AppContextProvider({children}){
    const [loading,setLoading]= useState(false);
    const [posts,setPosts]= useState([]);
    const[page,setPage]= useState(1);
    const [totalPages,setTotalPages]= useState(0);
    // fill data


    async function fetchBlogPosts(page=1,tag=null ,category){
        setLoading(true);
        let url  = `${baseUrl}?page=${page}`;
        if(tag){
            url+= `&tag=${tag}`;
        }
        if(category){
            url+= `&category=${category}`;
        }





        console.log("printing inside blog",url);
    

        try{
            const result = await fetch(url);
            const data = await result.json();
        console.log(data);
        setPage(data.page);
        setPosts(data.posts);
        setTotalPages(data.totalPages);
        setLoading(false);

        } 
        catch(error){
            console.log("error",error)
            setPage(1);
            setPosts([]);
            setTotalPages(null);
            
        }
        finally {
      setLoading(false);
    }
    }
    function handlePageChange(page){
        setPage(page);
        fetchBlogPosts(page);

    }

    const value= {
        loading,
        setLoading,posts,setPosts,
        page,setPage,totalPages,setTotalPages,
        fetchBlogPosts,handlePageChange
    }

 return <AppContext.Provider value={value}>
    {children}
 </AppContext.Provider>

}