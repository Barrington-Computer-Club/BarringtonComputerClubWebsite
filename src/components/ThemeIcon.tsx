import React, { useEffect, useState } from 'react';
import "@theme-toggles/react/css/Within.css"
import { DarkModeSwitch } from 'react-toggle-dark-mode';


// This is a client:load component only so it will not load during SSR, and will always have access to the brower apis

const ThemeIcon = () => {
  const [isDarkMode, setDarkMode] = React.useState(localStorage.getItem('darkMode') === 'true');

  const toggleDarkMode = (checked: boolean) => {
    setDarkMode(checked);
  };

  useEffect(() => {
    console.log(isDarkMode)
    document.documentElement.classList.toggle('dark', isDarkMode);
    localStorage.setItem('darkMode', isDarkMode.toString());
  }, [isDarkMode])





  return (
    <DarkModeSwitch
      style={{ position: 'fixed', bottom: '1rem', right: '1rem' }}
      checked={isDarkMode}
      onChange={toggleDarkMode}
      size={50}
    />
  );
};

export default ThemeIcon
