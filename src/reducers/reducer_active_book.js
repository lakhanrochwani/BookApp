// State argument in the reducer is not an application state,
// it is the state that this reducer is responsible for
export default function(state = null, action){
  switch (action.type) {
    case 'BOOK_SELECTED':
      return action.payload;
    default:
    return state;
 }
}
