// import React, { useContext } from 'react'
// import { AppContext } from '../context/AppContext'

// const Pagination = () => {
//   const {page, handlePageChange, totalPages} = useContext(AppContext);
//   return (
//     <div>
      
//       <div>
//         { page >1 && 
//        (<button onClick={()=> handlePageChange(page - 1)}>Previous</button>) }

//               { page < totalPages &&
//                ( <button  onClick={()=> handlePageChange(page+1)}>Next</button>)}
              

//               <p>Page {page} of {totalPages}</p>

//       </div>
      
   
//     </div>
//   )
// }

// export default Pagination
import  { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Pagination = () => {
  const { page, handlePageChange, totalPages } = useContext(AppContext);

  return (
    <div className="flex flex-col items-center mt-6 gap-2">
      <div className="flex gap-4">
        <button
          onClick={() => handlePageChange(page - 1)}
          disabled={page <= 1}
          className={`px-4 py-2 rounded ${
            page <= 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 text-white'
          }`}
        >
          Previous
        </button>

        <button
          onClick={() => handlePageChange(page + 1)}
          disabled={page >= totalPages}
          className={`px-4 py-2 rounded ${
            page >= totalPages ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 text-white'
          }`}
        >
          Next
        </button>
      </div>

      <p className="text-sm font-medium text-gray-700">
        Page {page} of {totalPages}
      </p>
    </div>
  );
};

export default Pagination;
