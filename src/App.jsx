import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import About from './screens/About';
import Skills from './screens/Skills';

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true';
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('darkMode', darkMode); 
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <div className="bg-gradient-to-br from-blue-100 via-purple-100 to-gray-100 dark:from-blue-900 dark:via-purple-900 dark:to-black text-gray-900 dark:text-white">
        <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
        
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8"> 
          <About />
          <Skills />
        </main>
      </div>
    </div>
  );
}