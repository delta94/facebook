const homeReducer = (state = {}, action) => {
  switch (action.type) {
    case 'GET_NEWS':
      return { ...state, loading: true };
    case 'NEWS_RECEIVED':
      return { ...state, news: action.json, loading: false }
    default:
      return state;
  }
};
export default homeReducer;