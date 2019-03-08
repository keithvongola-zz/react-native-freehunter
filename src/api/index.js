/* eslint-disable no-unused-vars */
const getProfiles = () => new Promise((resolve, reject) => fetch('https://randomuser.me/api/')
  .then((response) => {
    resolve(response.json());
  })
  .catch((error) => {
    console.error(error);
    reject(error);
  }));

export { getProfiles };
