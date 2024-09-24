import React, { useState } from 'react';

import { Navbar } from './components/Navbar';
import { Routing } from './components/Routing';
import { Footer } from './components/Footer';

const App = () => {
    const [darkTheme, setDarkTheme]  = useState(false);
 
  return (
    <div className={darkTheme ? 'dark' : ''}>
        <div className="bg-gray-100 dark:bg-darkbackground dark:text-gray-200 min-h-screen flex flex-wrap flex-col justify-center transition-colors duration-500">
            <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>
            <Routing />
            <Footer />
        </div>
    </div>
  );
};

export default App