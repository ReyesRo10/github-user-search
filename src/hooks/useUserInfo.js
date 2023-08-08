import { useState } from 'react';
import { getUserInfo } from '../services/userInfo.js';

export function useUserInfo() {
  const [location, setLocation] = useState();

  const useSearch = async () => {
    const userInfo = await getUserInfo();
  };
  return { location, useSearch };
}
