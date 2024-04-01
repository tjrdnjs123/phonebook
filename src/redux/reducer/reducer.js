let initialState = {
  itemList: [],
  keyword: ""
};

function reducer(state = initialState, action) {
  console.log("액션", action);
  if (action.type === "CREATE") {
    return { ...state,itemList:[...state.itemList,{name: action.payload.name, phoneNumber: action.payload.phoneNumber}] };
  }else if (action.type === "SEARCH"){
    return { ...state, keyword: action.payload.keyword };
  }
  return { ...state};
}

export default reducer;
