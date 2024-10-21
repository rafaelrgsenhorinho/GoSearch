import React, { useState, useEffect } from 'react';
import { useResultContext } from '../contexts/ResultContextProvider';
import { Links } from './Links'

export const Search = ( { resetSearch, setResetSearch } ) => {
  const [text, setText]  = useState('')
  const { setSearchTerm } = useResultContext();

  const handleSearch = () => {
    if (text) {
      setSearchTerm(text);
    }
  };

  useEffect(() => {
    console.log("resetSearch:", resetSearch);
    if (resetSearch) {
      setText('');
      setResetSearch(false);
    }
  }, [resetSearch, setResetSearch]);


  return (
    <div className='relative sm:ml-48 md:ml-72 justify-start items-start'>
      <input
          value={text}
          type='text'
          className='w-[15rem] md:w-[24rem] sm:w-[22rem] my-2 h-10 dark:bg-gray-200 border rounded-full shadow-sm outline-none p-6 text-black hover:shadow-lg'
          placeholder='Type and search'
          onChange={(e) => setText(e.target.value)}
      />
        <button type='button' className='relative top-1.2 sm:-right-2 text-2x text-gray-500 rounded-3xl bg-white p-2.5 px-5 drop-shadow-md hover:scale-105 duration-200 active:bg-gray-300' onClick={handleSearch}>
          Search!
        </button>
        
      <Links />
    </div>
  );
};
