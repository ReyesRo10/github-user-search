import './App.css';
import sunIcon from './assets/icon-sun.svg';
import searchIcon from './assets/icon-search.svg';
import locationIcon from './assets/icon-location.svg';
import websiteIcon from './assets/icon-website.svg';
import twitterIcon from './assets/icon-twitter.svg';
import companyIcon from './assets/icon-company.svg';

function App() {
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
          <button>Search</button>
        </section>
        <section className='user_section'>
          <div className='user_title'>
            <img
              className='user_image'
              src='https://avatars.githubusercontent.com/u/583231?v=4'
            />
            <div>
              <p>The Octocat</p>
              <p>@octocat</p>
              <p>Joined 25 jan 2011</p>
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
            odio. Quisque volutpat mattis eros.
          </p>
          <div className='user_stats'>
            <div className='user_stats_title'>
              <p>Repos</p>
              <p>Followers</p>
              <p>Following</p>
            </div>
            <div className='user_stats_info'>
              <p>8</p>
              <p>3938</p>
              <p>9</p>
            </div>
          </div>
          <div className='user_info'>
            <div className='user_info_location'>
              <img src={locationIcon} />
              <p>San Francisco</p>
            </div>
            <div className='user_info_location'>
              <img src={websiteIcon} />
              <p>github.blog</p>
            </div>
            <div className='user_info_location'>
              <img src={twitterIcon} />
              <p>Not Available</p>
            </div>
            <div className='user_info_location'>
              <img src={companyIcon} />
              <p>@github</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
