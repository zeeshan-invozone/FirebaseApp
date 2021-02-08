const counterReducer = (state = 0, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case 'INCREAMENT':
      return state + 1;

    case 'DECREAMENT':
      return state - 1;

    default:
      return state;
  }
};

export default counterReducer;
