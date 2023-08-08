//const USERINFO_ENDPOINT = `https://api.github.com/users/${search}`;

export const searchUser = async ({ search }) => {
  if (search === '') return null;

  try {
    const res = await fetch(`https://api.github.com/users/${search}`);
    const data = await res.json();

    const user = data.Search;

    return user;
  } catch (error) {
    throw new Error('Error searching user');
  }
};
