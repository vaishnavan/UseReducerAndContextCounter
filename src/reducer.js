export const initialState = {
  count: 0
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return {
        count: state.count + 1
      };
      break;
    case "SUB":
      return {
        count: state.count - 1
      };
      break;
    default:
      return state;
  }
};
