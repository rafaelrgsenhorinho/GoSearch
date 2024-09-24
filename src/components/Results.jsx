import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Loading } from './Loading'

import { useResultContext } from '../contexts/ResultContextProvider'

export const Results = () => {
  const { results, isLoading, getResults, searchTerm } = useResultContext();
  const location = useLocation();


  useEffect(() => {
    if (searchTerm) {
      if (location.pathname === '/search') {
        getResults(`?q=${searchTerm}`);
      } else if (location.pathname === '/images') {
        getResults(`?q=${searchTerm}&searchType=image`);
      }
    }
  }, [searchTerm, location.pathname]);

  useEffect (() => {
    if (location.pathname === '/search') {
      console.log("ALL:", results)
    }
    
  }, [results])
  
  if(isLoading) return <Loading />

   switch (location.pathname) {
    case '/search':
      return (
        <div className='flex flex-col justify-between sm:mx-10 md:ml-24 lg:ml-44 lg:mr-60 xl:mr-96'>
  {results?.map((result, index) => { 
    const link = result.link;
    const title = result.title || 'Title not available';
    const snippet = result.snippet || 'Description not available';

    const getFaviconUrl = (url) => {
      const domain = new URL(url).hostname;
      return `https://www.google.com/s2/favicons?domain=${domain}`;
    };

    return (
      <div key={link + index} className='w-full md:w-10/12 lg:w-full xl:w-8/12 my-4'>
        <a href={link} target='_blank' rel='noreferrer'>
          <div className='flex flex-row items-center'>
            <picture>
              <img src={getFaviconUrl(link)} alt="" className="w-6 h-6" />
            </picture>
            <p className='text-sm ml-2'>
              {link.length > 30 ? `${link.substring(0, 30)}...` : link}
            </p>
          </div>
          <p className='py-1 text-lg hover:underline dark:text-blue-300 text-blue-700'>
            {title}
          </p>
          <p className='text-sm dark:text-gray-200'>
            {snippet}
          </p>
        </a>
      </div>
    );
  })}
</div>

      );
  
      case '/images':
        return (
          <div className='flex flex-wrap justify-center items-center'>
  {results?.map((result, index) => {
    const imageSrc = result.link || result.image?.thumbnailLink || result.image?.contextLink;
    const imageTitle = result.title || 'Title not available';
    const imageSubTitle = result.snippet || 'Description not available';

    if (imageSrc) {
      return (
        <a key={index} className='flex flex-col items-start justify-start my-4 mx-2 hover:underline hover:underline-offset-2 hover:drop-shadow-lg' href={result.image?.contextLink || result.link} target='_blank' rel='noreferrer'>
          <picture>
            <img 
              src={imageSrc} 
              alt={imageTitle} 
              loading='lazy' 
              className='max-w-80 h-48 w-full object-cover rounded'
            />
          </picture>
          <p className='text-xs w-36 break-words text-sm mt-2'>{imageTitle.length > 20 ? `${imageTitle.substring(0, 20)}...` : imageTitle}</p>
          <h2>{imageSubTitle.length > 40 ? `${imageSubTitle.substring(0, 40)}...` : imageSubTitle}</h2>
        </a>
      );
    }

    return null; 
  })}
</div>
        );
  
    default:
      return <div className='text-red-500'>ERROR</div>;
  }
};