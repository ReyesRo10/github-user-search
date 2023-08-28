import { useEffect, useState } from 'react';

export function useUserInfo({ saveUserData }) {
  const [userName, setUsername] = useState('');
  const [error, setError] = useState('');

  const fetchUserData = (userName) => {
    fetch(`https://api.github.com/users/${userName}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.message === 'Not Found') {
          setError(true);
        } else {
          setError(false);
          saveUserData(data);
          setUsername('');
        }
      });
  };
  useEffect(() => {
    fetchUserData('octocat');
  }, []);
  return { userName, setUsername, error, fetchUserData };
}
