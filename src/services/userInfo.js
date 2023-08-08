const USERINFO_ENDPOINT = 'https://api.github.com/users/octocat';

export const getUserInfo = async () => {
  const res = await fetch(USERINFO_ENDPOINT);
  const data = await res.json();
  const { userInfo } = data;
  console.log(userInfo);
  return userInfo;
};
