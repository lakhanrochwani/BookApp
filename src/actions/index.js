export function selectBook(book) {
  // selectBook is an Action creator, it needs to return an action,
  // an (action) object with a type & payload.
  return{
    type:'BOOK_SELECTED',
    payload: book
  };
}
