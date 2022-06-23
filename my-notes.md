# Epic React - Advance React Hooks

## Lessons

### Lesson 01 - useReducer: simple Counter function

- `useReducer` comes in handy when:
  - Separate the state logic from the component that triggers the state change event
  - You have multiple pieces of state that often change together
- `useReducer` API: `const [state, dispatch] = useReducer(reducer, initialState)`
- `reducer` receives
  - `state` as the first argument
  - `action` as the second argument (whatever you pass to `dispatch`)
  - Third argument to `useReducer`

```javascript
function init(initialStateFromProps) {
  return {
    pokemon: null,
    loading: false,
    error: null,
  }
}

const [state, dispatch] = React.useReducer(reducer, props.initialState, init)
```

### Lesson 02 - useCallback: custom Hooks


### Lesson 03 - useContext: simple Counter


### Lesson 04 - useLayoutEffect: auto-scrolling textarea


### Lesson 05 - useImperativeHandle: scroll to top/bottom


### Lesson 06 - useDebugValue: useMedia

