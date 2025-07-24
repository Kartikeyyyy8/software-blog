// import React from 'react'
// import { AppContext } from '../context/AppContext'
// import Spinner from './Spinner';
// import { useContext } from 'react';

// const Blogs = () => {
//     // consume 
//     const { posts, loading}= useContext(AppContext);
//     console.log(posts);
//   return (
//     <div >
//         {
//             loading ?  (<Spinner/>) :
//             ( posts.length === 0 ?(
//                     <div><p>No Posts Found</p> </div>
//                 ) : (posts.map((post)=>(  
//                      <div key={post.id}>
//                         <p className='text-2xl font-semibold  text-red-300'>{post.title}</p>
//                         <p>
//                             By <span> {post.author}</span> <span>{post.category}</span>
//                         </p>
//                         <p>Posted on {post.date}</p>
//                         <p>{post.content}</p>
//                         <div>
//                             {
//                                posts.tags?.map((tag,index ) => (
//                                            <span key={index}> #{index.tag}</span>
//                                                                                 ))

//                             }
//                         </div>





//                     </div>
//                  )))

//             )
//         }
      
//     </div>
//   )
// }

// export default Blogs
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Spinner from './Spinner';


const Blogs = () => {
    // consume 
  const { posts, loading } = useContext(AppContext);
  console.log(posts);

  return (
    <div className='w-11/12  max-w-[670px] py-8 flex flex-col gap-y-7 justify-center items-center mt-[60px]'>
      { 
        loading ? (<Spinner/>) : (
          posts.length === 0 ? (
            <div><p>No Posts Found</p></div>
          ) : (
            posts.map((post) => (
              <div key={post.id} className="my-6 p-4 border rounded shadow">
                <p className="text-2xl font-semibold text-red-300">{post.title}</p>
                <p>
                  By <span className="font-medium">{post.author}</span> | <span>{post.category}</span>
                </p>
                <p className="text-sm text-gray-500">Posted on {post.date}</p>
                <p className="mt-2">{post.content}</p>
                <div className="mt-2">
                  {post.tags?.map((tag, index) => (
                    <span key={index} className="text-blue-500 mr-2">#{tag}</span>
                  ))}
                </div>
              </div>
            ))
          )
        )
      }
    </div>
  );
};

export default Blogs;
