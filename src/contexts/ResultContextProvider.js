import React, { createContext, useContext, useState } from 'react';

const ResultContext = createContext();
const googleApiUrl = 'https://www.googleapis.com/customsearch/v1';

export const ResultContextProvider = ({children}) => {
    const [results, setResults] = useState([]);
        const [isLoading, setIsLoading] = useState(false);
        const [searchTerm, setSearchTerm] = useState('');

        const clearResults = () => {
          setResults([]);
          setSearchTerm('');
        };

        const getResults = async (searchTerm) => {
            setIsLoading(true);
          
            try {
              const response = await fetch(`${googleApiUrl}?key=${process.env.REACT_APP_GOOGLE_API_KEY}&cx=${process.env.REACT_APP_CSE_ID}&q=${searchTerm}`);
              
              if (!response.ok) {
                throw new Error('Network response was not ok');
              }
          
              const data = await response.json();
              setResults(data.items);
              setIsLoading(false);
              return data;
            } catch (error) {
              console.error('Erro ao buscar dados:', error);
              setIsLoading(false);
              return null;
            }
          };

        return (
            <ResultContext.Provider value={{ getResults, results, searchTerm, setSearchTerm, isLoading, clearResults}}>
                {children}
            </ResultContext.Provider>
        );
    
};

export const useResultContext = () => useContext(ResultContext);