import React, { useState } from 'react';
import "@theme-toggles/react/css/Within.css"
import { DarkModeSwitch } from 'react-toggle-dark-mode';

const ThemeIcon = () => {
  const [isDarkMode, setDarkMode] = React.useState(false);

  const toggleDarkMode = (checked: boolean) => {
    setDarkMode(checked);
  };

  document.documentElement.classList.toggle('dark', isDarkMode);

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
