const renameDeck = (state, action) => {
  const {name, newName} = action.payload
  const newState = {...state}
  
  const deck = {...state[name], title: newName}
  delete newState[name]
  return {
    ...newState,
    [newName]: deck
  }
}

export default renameDeck
