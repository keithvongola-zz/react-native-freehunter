export const GET_PROFILE = 'GET_PROFILE';
export const GET_PROFILE_SUCCESS = 'GET_PROFILE_SUCCESS';
export const GET_PROFILE_FAIL = 'GET_PROFILE_FAIL';

export const getProfile = count => ({
  type: GET_PROFILE,
  count
});
export const getProfileSuccess = () => ({
  type: GET_PROFILE_SUCCESS,
});

export const getProfileFail = error => ({
  type: GET_PROFILE_FAIL,
  error
});
