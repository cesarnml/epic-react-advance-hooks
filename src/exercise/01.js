// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

function Counter({initialCount = 0, step = 3}) {
  // 🐨 replace React.useState with React.useReducer.
  // const [count, setCount] = React.useReducer(countReducer, initialCount)
  // const increment = () => setCount(count + step)
  // Extra Credit #1 💯
  // const [count, changeCount] = React.useReducer(countReducer, initialCount)
  // const increment = () => changeCount(step)
  // // const [count, setCount] = React.useState(initialCount)
  // function countReducer(state, step) {
  //   return state + step
  // }
  // Extra Credit #2 💯

  // const [state, setState] = React.useReducer(countReducer, {
  //   count: initialCount,
  // })
  // const {count} = state
  // const increment = () => setState({count: count + step})

  // function countReducer(state, newState) {
  //   return {...state, ...newState}
  // }
  // Extra Credit #3 💯
  // const [state, setState] = React.useReducer(countReducer, {
  //   count: initialCount,
  // })
  // const {count} = state
  // const increment = () =>
  //   setState(currentState => ({count: currentState.count + step}))

  // function countReducer(state, action) {
  //   if (typeof action === 'function') {
  //     return action(state)
  //   } else {
  //     return {...state, ...action}
  //   }
  // }
  // Extra Credit #4 💯
  const [state, dispatch] = React.useReducer(countReducer, {
    count: initialCount,
  })
  const {count} = state
  const increment = () => dispatch({type: 'INCREMENT', step})

  function countReducer(state, action) {
    switch (action.type) {
      case 'INCREMENT':
        return {count: state.count + action.step}
      default:
        return state
    }
  }
  // 💰 you can write the countReducer function so you don't have to make any
  // changes to the next two lines of code! Remember:
  // The 1st argument is called "state" - the current value of count
  // The 2nd argument is called "newState" - the value passed to setCount
  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
