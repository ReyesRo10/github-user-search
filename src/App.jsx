import './App.css';
import { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { InputSearch } from './components/InputSearch';
import { UserData } from './components/UserData';

//const USERINFO_ENDPOINT = 'https://api.github.com/users/octocat';

function App() {
  //const isDarkMode = JSON.parse(localStorage.getItem('dark-mode'));
  const [theme, setTheme] = useState('light');
  const [userData, setUserData] = useState({});

  /* useEffect(() => {
    localStorage.setItem('dark-mode', theme);
  }, [theme]);*/

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      //document.bodyElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
      //document.bodyElement.classList.remove('dark');
    }
  }, [theme]);
  const handleThemeSwitch = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };
  const saveUserData = (user) => {
    setUserData(user);
  };

  return (
    <div className='min-h-screen bg-bodyBG py-8 px-6 flex justify-center items-center'>
      <div>
        <Header darkMode={theme} toggleDarkMode={handleThemeSwitch} />
        <InputSearch saveUserData={saveUserData} />
        <UserData user={userData} />
      </div>
    </div>
  );
}

export default App;
