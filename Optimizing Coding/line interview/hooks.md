# Hooks: They let you use state and other React features without writing a class.

- Basic Hooks

* useState:
* useEffect:
* useContext:

- Additional Hooks

* useReducer:
* useCallback:
* useMemo:
* useRef:
* useImperativeHandle:
* useLayoutEffect:
* useDebugValue:

- Only Call Hooks at the Top Level
  Don't call Hooks inside loops, conditions, or nested functions. Instead, always use Hooks at the top level of your React function, before any early returns.

- Only Call Hooks from React Functions
  Don't call Hooks from regular JavaScript functions. Instead, you can:

* Call Hooks from React function components.
* Call Hooks from custom Hooks (we'll learn about them on the next page)

* Explanation: As we learned earlier, we can use multiple State or Effect Hooks in a single component.
  So how does React know which state corresponds to which useState call? The answer is that React relies on the order in which Hooks are called.
  Nếu mà ngĩ kĩ, thì thật ra useState chỉ là một function duy nhất chứ đầu phải là nhiều function, thì mà gọi nó lần đầu tiên, thì nó sẽ là cái argument, xong nó sẽ lưu vào trong cái array bên tỏng của nó, mấy cái useState nó cũng sẽ cũng lưu như vậy, giống như dạng lexical scope và useState thì giống như closure vậy.
  Khi mà có một cái setState nào đó gọi thì sao, thì nó sẽ có một cách nào đó, khiến cho component rerender lại. Bắt đầu interesting part. So now, what thing function components will do. It will go through from start to end.

* Cái biến state của useState chắc chắn là const rồi, không thể gán trực tiếp cho nó, mình chỉ có thể gán cho nó thông qua cái setState được thôi. Cái biến state mà là object thì mình có thể thay đổi bên trong nó.
  Cái

* useEffect(() => {
  console.log(state);
  }, [state]);
  cái useEffect sẽ được thay đổi khi mà GIÁ TRỊ của nó thay đổi, là GIÁ TRỊ chưa không phải là địa chỉ.
  Value of variable like a = 5 or string owr for object is address.

* useContext: Context provides a way to pass data through the component tree without having to pass props down manually at every level.

* The first and most important thing to understand about a reducer is that it will always only return one value. The job of a reducer is to reduce. That one value can be a number, a string, an array or an object, but it will always obly be one. Reducers are really grat for a lot of things, but they're especially usefull for applying a bit of logic to a group of values and ending up with another single result.

* An alternative to useState. Acepts a reducer of type (state, action) => newState, and returns the current state paired with a dispatch method.

- useReducer is usually preferable to useState when you have complex state logic that involves multiple sub-alues or when the next state depends on the previous one.

* useCallback

* useMemo

- Don't mistake React's useMemo Hook with React's memo API. While useMemo is used to memoize values, React memo is used to wrap React components to prevent re-renderings.
- useMemo is used to memoize values, useCallback is used to memoize function.

* useRef

useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component.

- useImperativeHandle
  useImperativeHandle takes a ref object and a createHandle function whose return value "replaces" the stored value in the ref object.

- useLayoutEffect
  The signature for useLayoutEffect is identical to useEffect; the difference is the time of execution.

* useDebugValue
