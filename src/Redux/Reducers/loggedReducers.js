const loggedReducers = (state = false, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case 'SIGNIN':
      return !state;
    default:
      return state;
  }
};

export default loggedReducers;
