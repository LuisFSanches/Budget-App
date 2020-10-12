export default (state, action) => {
  switch (action.type) {
    case "ADD_INCOME": {
      return {
        ...state,
        incomeTransactions: [...state.incomeTransactions, action.payload],
      };
    }
    default:
      return state;
  }
};
