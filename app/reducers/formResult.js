const initState = {
  result: [],
  isLoading: false,
}

const formResult = (state = initState, action) => {
  switch (action.type) {
    case 'ADD_RESULT':
      return {
        ...state,
        result: [...state.result, action.result]
      }
    default:
      return initState
  }
}