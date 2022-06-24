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

- Generic `memoization` abstraction:

```typescript
function memoize<ArgType, ReturnValue>(cb: (arg: ArgType) => ReturnValue) {
  const cache: Record<ArgType, ReturnValue> = {}
  return function memoized(arg: ArgType) {
    if (cache[arg] === undefined) {
      cache[arg] = cb(arg)
    }
    return cache[arg]
  }
}

// This is JS equivalent
const memo = (cb: ((...args) => {})) => {
  const cache = {}
  return (...args) => {
  if (cache[JSON.stringify(args)] === undefined) {
  console.log(`New value ${args}`)
  cache[JSON.stringify(args)] = cb(...args)
  }
  return cache[JSON.stringify(args)]
  }
}

const addOne = memoize((num: number) => num + 1)
const getDog = memoize((name: string) => new Dog(name))
```

- `useCallback` is short-hard for `useMemo` when we want to return a function

```JavaScript
// the useMemo version:
const updateLocalStorage = React.useMemo(
  // useCallback saves us from this annoying double-arrow function thing:
  () => () => window.localStorage.setItem('count', count),
  [count],
)

// the useCallback version
const updateLocalStorage = React.useCallback(
  () => window.localStorage.setItem('count', count),
  [count],
)
```

- `mountedRef` should be initialized to `false` by default
- **The `entire purpose` of `useCallback` is to memoize a callback for use in `dependency lists` and `props on memoized components` (via `React.memo`)**

### Lesson 03 - useContext: simple Counter


### Lesson 04 - useLayoutEffect: auto-scrolling textarea


### Lesson 05 - useImperativeHandle: scroll to top/bottom


### Lesson 06 - useDebugValue: useMedia

