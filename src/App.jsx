import './App.css';
import sunIcon from './assets/icon-sun.svg';
import searchIcon from './assets/icon-search.svg';
import locationIcon from './assets/icon-location.svg';
import websiteIcon from './assets/icon-website.svg';
import twitterIcon from './assets/icon-twitter.svg';
import companyIcon from './assets/icon-company.svg';
import { useState } from 'react';

const USERINFO_ENDPOINT = 'https://api.github.com/users/octocat';

function App() {
  const [location, setLocation] = useState('');
  const [website, setWebsite] = useState('');
  const [twitter, setTwitter] = useState('');
  const [company, setCompany] = useState('');
  const [repos, setRepos] = useState();
  const [following, setFollowing] = useState();
  const [followers, setFollowers] = useState();
  const [bio, setBio] = useState('');
  const [name, setName] = useState('');
  const [userName, setUserName] = useState('');
  const [dateCreated, setDateCreated] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  const handleSearch = async () => {
    const res = await fetch(USERINFO_ENDPOINT);
    const data = await res.json();
    setLocation(data.location);
    setWebsite(data.blog);
    setTwitter(data.twitter_username);
    setCompany(data.company);
    setRepos(data.public_repos);
    setFollowing(data.following);
    setFollowers(data.followers);
    setBio(data.bio);
    setName(data.name);
    setUserName(data.login);
    setDateCreated(data.created_at);
    setUserAvatar(data.avatar_url);
  };

  return (
    <div className='container'>
      <header className='header_container'>
        <h1>devfinder</h1>
        <div className='header_icon'>
          <h3>Light</h3>
          <img src={sunIcon} />
        </div>
      </header>
      <main>
        <section className='search_section'>
          <img src={searchIcon} />
          <input type='text' placeholder='Search Github username...'></input>
          <button onClick={handleSearch}>Search</button>
        </section>
        <section className='user_section'>
          <div className='user_title'>
            <img className='user_image' src={userAvatar} />
            <div>
              <p>{name}</p>
              <p>@{userName}</p>
              <p>{dateCreated}</p>
            </div>
          </div>
          {bio ? <p>{bio}</p> : <p>Not available</p>}
          <div className='user_stats'>
            <div className='user_stats_title'>
              <p>Repos</p>
              <p>Followers</p>
              <p>Following</p>
            </div>
            <div className='user_stats_info'>
              <p>{repos}</p>
              <p>{followers}</p>
              <p>{following}</p>
            </div>
          </div>
          <div className='user_info'>
            <div className='user_info_location'>
              <img src={locationIcon} />
              <p>{location}</p>
            </div>
            <div className='user_info_location'>
              <img src={websiteIcon} />
              <p>{website}</p>
            </div>
            <div className='user_info_location'>
              <img src={twitterIcon} />

              {twitter ? <p>{twitter}</p> : <p>Not available</p>}
            </div>
            <div className='user_info_location'>
              <img src={companyIcon} />
              <p>{company}</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
