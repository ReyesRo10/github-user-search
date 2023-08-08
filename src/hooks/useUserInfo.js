import { useCallback, useRef, useState } from 'react';
import { searchUser } from '../services/userInfo.js';

export function useUserInfo() {
  const [name, setName] = useState('');
  const [userName, setUserName] = useState('');
  const [dateCreated, setDateCreated] = useState('');
  const [userAvatar, setUserAvatar] = useState('');

  const [bio, setBio] = useState('');

  const [repos, setRepos] = useState();
  const [followers, setFollowers] = useState();
  const [following, setFollowing] = useState();

  const [location, setLocation] = useState('');
  const [website, setWebsite] = useState('');
  const [twitter, setTwitter] = useState('');
  const [company, setCompany] = useState('');

  const previousSearch = useRef(search);

  const getUserInfo = useCallback(async ({ search }) => {
    if (search === previousSearch.current) return;
    try {
      previousSearch.current = search;
      const newUser = await searchUser({ search });
      setName(newUser.name);
      setUserName(newUser.login);
      setDateCreated(newUser.created_at);
      setUserAvatar(newUser.avatar_url);
      setBio(newUser.bio);
      setRepos(newUser.public_repos);
      setFollowers(newUser.followers);
      setFollowing(newUser.following);
      setLocation(newUser.location);
      setWebsite(newUser.blog);
      setTwitter(newUser.twitter_username);
      setCompany(newUser.company);
    } catch (error) {
      throw new Error('Error searching user');
    }
  }, []);
  return {
    name,
    userName,
    dateCreated,
    userAvatar,
    bio,
    repos,
    followers,
    following,
    location,
    website,
    twitter,
    company,
    getUserInfo,
  };
}
