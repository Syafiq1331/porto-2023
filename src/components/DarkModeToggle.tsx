// DarkModeToggle.tsx

import React, { useEffect, useState } from 'react';

function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(isDarkMode);

    // Set mode gelap atau terang berdasarkan preferensi pengguna yang tersimpan di localStorage
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);

    // Simpan preferensi mode gelap di localStorage
    localStorage.setItem('darkMode', newDarkMode.toString());

    // Aktifkan atau nonaktifkan mode gelap di elemen HTML
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <button onClick={toggleDarkMode}>
      {darkMode ? '🌝' : '🌚'}
    </button>
  );
}

export default DarkModeToggle;
