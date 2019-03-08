import { fromJS } from 'immutable';

const initialState = fromJS({
  profiles: null
});

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
