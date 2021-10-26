export const todoReducer = (state = [], action) => {
  switch (action.type) {
    case 'add':
      return [...state, action.payload];

    case 'delete':
      return state.filter((todo, index) => index !== action.payload)

    case 'toggle':
      return state.map((todo) => {  // map over the characters, returning a new array
        if (todo.id === action.payload) { // if character id matches action id, change that character
          return {
            ...todo, // this uses the proposed object destructuring, make sure your babel lets you use it
            done: !todo.done // this toggles the view, but you could just set it to true
          }
        } else { // if the id doesn't match, return the original character
          return todo
        }
      })

    default:
      return state;
  }

  
};
