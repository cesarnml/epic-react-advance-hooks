# Epic React - Advance React Hooks

## Lessons

### Lesson 01 - useReducer: simple Counter function

- `useReducer` comes in handy when:
  - Separate the state logic from the component that triggers the state change event
  - You have multiple pieces of state that often change together
- `useReducer` API: `const [state, dispatch] = useReducer(reducer, initialState)`
- `reducer` receives
  - `state` as the first argument
  - `action` as the second argument (i.e. whatever you pass to `dispatch`)
  - Third argument to `useReducer`
    - Allows for `lazy initialization of the state` by passing an `init` function

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

- type definition of `useReducer` hook (don't stare to long it might blind you)

```typescript
type Dispatch<A> = (value: A) => void
type Reducer<S, A> = (prevState: S, action: A) => S
type ReducerState<R extends Reducer<any, any>> = R extends Reducer<infer S, any>
  ? S
  : never
type ReducerAction<R extends Reducer<any, any>> = R extends Reducer<
  any,
  infer A
>
  ? A
  : never

function useReducer<R extends Reducer<any, any>, I>(
  reducer: R,
  initializerArg: I & ReducerState<R>,
  initializer: (arg: I & ReducerState<R>) => ReducerState<R>,
): [ReducerState<R>, Dispatch<ReducerAction<R>>]

function useReducer<R extends Reducer<any, any>, I>(
  reducer: R,
  initializerArg: I,
  initializer: (arg: I) => ReducerState<R>,
): [ReducerState<R>, Dispatch<ReducerAction<R>>]

function useReducer<R extends Reducer<any, any>>(
  reducer: R,
  initialState: ReducerState<R>,
  initializer?: undefined,
): [ReducerState<R>, Dispatch<ReducerAction<R>>]
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

- *Keeping context value scoped to the area that needs it most has improved performance and maintainability*

### Lesson 04 - useLayoutEffect: auto-scrolling textarea

- If you are making observable changes to the DOM, then it should happen in `useLayoutEffect`, otherwise useEffect
- In practice, if you see a flicker in between the DOM rendering and the useEffect firing, use `useLayoutEffect`
- *user deosn't acrtually see the updates until after the browser has repainted*
- DOM updates occur prior to repaint
- It's also useful to use `useLayoutEffect` when you want to guarantee and effect will run before all other `useEffect` calls (e.g. when updating a `ref` value)
- The default effect behavior is to not block browser repaint (makes changes snappier)

### Lesson 05 - useImperativeHandle: scroll to top/bottom

- First pass a `componentRef = React.useRef()` to a React component
- Wrap the `Component` in `React.forwardRef(Component(props,ref) => componentBody)`
- Within `componentBody` use `React.imperativeHandle(ref, () => ({methods})` to add methods to ref which parent componet will have access to within the child

### Lesson 06 - useDebugValue: useMedia

