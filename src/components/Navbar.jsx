import React, { useState } from 'react';
import { Search } from './Search';
import { useResultContext } from '../contexts/ResultContextProvider';

export const Navbar = ({ darkTheme, setDarkTheme }) => {
    const { clearResults } = useResultContext();
   
    const [resetSearch, setResetSearch] = useState(false);

    const resetGoSearch = () => {
        clearResults();
        setResetSearch(true);
        console.log('testando')
        console.log(resetSearch)
    };

    return (
        <div className="p-5 pb-0 h-50 flex flex-wrap justify-start items-start border-b dark:border-gray-700 border-gray-200">
            <div className="flex flex-wrap justify-center items-start space-x-5 w-full">
                <h1
                    className="text-2xl bg-blue-500 font-bold text-white py-2 px-4 rounded-2xl dark:bg-transparent dark:border-solid dark:border dark:border-white dark:text-white cursor-pointer"
                    onClick={resetGoSearch}
                >
                    GoSearch
                </h1>
                <Search resetGoSearch={resetGoSearch} resetSearch={resetSearch} setResetSearch={setResetSearch} />
                <label className="inline-flex items-center cursor-pointer m-3">
                    <input
                        type="checkbox"
                        className="sr-only peer"
                        onClick={() => setDarkTheme(!darkTheme)}
                        checked={darkTheme}
                        readOnly
                    />
                    <div className="relative w-14 h-7 bg-gray-200 rounded-full peer hover:ring-2 hover:ring-blue-400 dark:hover:ring-gray-200 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-['☀️'] peer-checked:after:content-['🌑'] after:absolute after:left-[4px] after:h-6 after:w-6 after:flex after:items-center after:justify-center after:text-xl after:rounded-full after:transition-all dark:border-gray-600 peer-checked:bg-gray-300 "></div>
                </label>
            </div>
        </div>
    );
};
