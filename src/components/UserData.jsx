import locationIcon from '../assets/icon-location.svg';
import websiteIcon from '../assets/icon-website.svg';
import twitterIcon from '../assets/icon-twitter.svg';
import companyIcon from '../assets/icon-company.svg';
import { convertDate } from '../helpers/helpers';

export function UserData({ user }) {
  const userStats = [
    {
      id: 1,
      title: 'Repos',
      statNumber: user.public_repos,
    },
    {
      id: 2,
      title: 'Followers',
      statNumber: user.followers,
    },
    {
      id: 3,
      title: 'Following',
      statNumber: user.following,
    },
  ];
  const userLinksLeft = [
    {
      id: 1,
      icon: locationIcon,
      text: user.location,
    },
    {
      id: 2,
      icon: websiteIcon,
      text: user.blog,
    },
  ];
  const userLinksRight = [
    {
      id: 1,
      icon: twitterIcon,
      text: user.twitter_username,
    },
    {
      id: 2,
      icon: companyIcon,
      text: user.company,
    },
  ];

  const joinDate = convertDate(user.created_at);
  return (
    <section className='text-textColorOne bg-appBG rounded-2xl py-8 px-4 text-sm shadow-2xl dark:shadow-none  md:p-10 lg:p-12'>
      <div className='flex items-center gap-5 mb-8 md:gap-8 md:mb-6'>
        <img
          className='rounded-full w-[70px] md:w-28'
          src={user.avatar_url}
          alt={user.name}
        />
        <div className='lg:flex lg:grow lg:justify-between self-start'>
          <div>
            <h2 className='text-textColorTwo text-base md:text-2xl md:mb-0.5'>
              {user.name ? user.name : user.login}
            </h2>
            <a
              href={`https://github.com/${user.login}`}
              target='_blank'
              rel='noreferrer'
              className='inline-block text-textLink leading-5 md:text-base md:mb-1'
            >
              @{user.login}
            </a>
          </div>
          <p className='text-textColorThree leading-5 md:text-sm lg:mt-2'>
            Joined {joinDate}
          </p>
        </div>
      </div>
      <div className='lg:w-[480px] lg:ml-[140px] lg:-mt-[60px]'>
        {user.bio ? (
          <p className='mb-6 leading-6 md:text-sm md:mb-8'>{user.bio}</p>
        ) : (
          <p className='opacity-50'>This profile has no bio</p>
        )}
        <div className='bg-bodyBG rounded-lg flex  justify-evenly items-center text-center py-4 mb-6 md:text-left md:gap-[90px] md:pt-4 md:pr-[90px] md:pb-4 md:pl-8 md:mb-8 lg:mb-9'>
          {userStats.map(({ id, title, statNumber }) => (
            <div key={id} className=''>
              <h3 className='text-xs font-normal mb-2 '>{title}</h3>
              <p className='text-textColorTwo text-base font-bold md:text-xl'>
                {statNumber}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className='md:flex md:gap-16 lg:w-[480px] lg:ml-auto'>
        <div>
          {userLinksLeft.map(({ id, icon, text }) => (
            <div
              key={id}
              className=' flex items-center flex-wrap gap-3 mb-3 md:text-base md:mb-5 md:last-of-type:mb-0'
            >
              <img src={icon} />
              {text ? (
                <p>{text}</p>
              ) : (
                <p className='opacity-50'>Not Available</p>
              )}
            </div>
          ))}
        </div>
        <div>
          {userLinksRight.map(({ id, icon, text }) => (
            <div
              key={id}
              className=' flex items-center flex-wrap gap-3 mb-3 md:text-base md:mb-5 md:last-of-type:mb-0'
            >
              <img src={icon} />
              {text ? (
                <p>{text}</p>
              ) : (
                <p className='opacity-50'>Not Available</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
