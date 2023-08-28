import searchIcon from '../assets/icon-search.svg';
import { useUserInfo } from '../hooks/useUserInfo';

export function InputSearch({ saveUserData }) {
  const { userName, setUsername, error, fetchUserData } = useUserInfo({
    saveUserData,
  });

  const handleChange = (e) => {
    const newQuery = e.target.value;
    if (newQuery.startsWith(' ')) return;
    setUsername(newQuery);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchUserData(userName);
  };
  return (
    <form
      className='relative mb-4 md:mb-6 text-textColorTwo shadow-2xl dark:shadow-none'
      onSubmit={handleSubmit}
    >
      <img
        className='absolute top-1/2 -translate-y-1/2 w-5 left-4 md:w-6 md:left-8'
        src={searchIcon}
        alt='User avatar'
      />
      <input
        type='text'
        placeholder='Search Github username...'
        value={userName}
        onChange={handleChange}
        className='bg-appBG text-textColorTwo w-full text-xs font-normal pt-5 pr-24 pb-5 pl-11 shadow-[--box-shadow] placeholder:text-textColorOne md:text-lg md:pt-[22px] md:pr-28 md:pb-[22px] md:pl-20 lg:pr-60'
      />
      {error && (
        <span className='text-textError text-xs absolute right-2 -top-6 md:text-base md:right-4 lg:top-1/2 lg:-translate-y-1/2 lg:right-36'>
          No results
        </span>
      )}
      <button className='absolute top-1/2 -translate-y-1/2 cursor-pointer right-2 text-sm font-bold text-white bg-bgButtonSearch border-none rounded-[0.625rem] py-3 px-4 hover:bg-hoverButtonSearch md:right-3 md:text-base md:px-6 '>
        Search
      </button>
    </form>
  );
}
