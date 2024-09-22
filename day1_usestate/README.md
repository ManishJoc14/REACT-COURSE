# React useState Hook

`useState` is a React Hook that allows you to add state to functional components.

## How to Run the Project

To clone, use the following commands:

```bash
gh repo clone https://github.com/ManishJoc14/REACT-COURSE.git --filter=blob:none --sparse day1_usestate
```

To run, use the following commands:

```bash
cd ./day1_usestate
npm start
```

## Key Points About useState

1. **Initializing State in useState**:

   - **Explanation**: You can pass a value directly or use an initializer function to set the initial state.
   - **Example (Direct Value)**:
     ```javascript
     const [count, setCount] = useState(0);
     ```
   - **Example (Initializer Function)**:
     ```javascript
     const [count, setCount] = useState(() => expensiveComputation());
     ```

2. **Two Ways to Update State**:

   - **Option 1: Direct Value**:
     ```javascript
     setCount(count + 1);
     ```
   - **Option 2: Functional Update**:
     ```javascript
     setCount((prevCount) => prevCount + 1);
     ```

3. **When State Changes, Component Re-renders**:

   - **Explanation**: Anytime you change the state using `setState`, React triggers a re-render of the component. This ensures that the UI stays in sync with the latest state.
   - **Example**:
     ```javascript
     const [count, setCount] = useState(0);
     <button onClick={() => setCount(count + 1)}>Click me</button>;
     ```

4. **State Updates Are Batched**:

   - **Explanation**: React batches multiple state updates together for performance reasons. Instead of re-rendering after each `setState` call, it processes all updates at once.
   - **Example**:
     ```javascript
     setCount(count + 1);
     setName("React");
     setAge(21);
     // React will only re-render once.
     ```

5. **Different Ways of Handling Event Listeners**:

   - **Inline Event Handlers**:
     ```javascript
     <button onClick={() => alert("Clicked!")}>Click Me</button>
     ```
   - **Separate Event Handler Functions**:
     ```javascript
     function handleClick() {
       alert("Clicked!");
     }
     <button onClick={handleClick}>Click Me</button>;
     ```
   - **Passing Arguments to Event Handlers**:
     ```javascript
     function handleClick(name) {
       alert(`Hello, ${name}`);
     }
     <button onClick={() => handleClick("React")}>Click Me</button>;
     ```

6. **Handling State with Objects or Arrays**:
   - **Explanation**: Use the spread operator to update specific parts of the state.
   - **Example (Object State)**:
     ```javascript
     const [user, setUser] = useState({ name: "John", age: 25 });
     setUser((prevUser) => ({ ...prevUser, age: 26 }));
     ```
   - **Example (Array State)**:
     ```javascript
     const [todos, setTodos] = useState(["Learn React", "Learn Hooks"]);
     setTodos((prevTodos) => [...prevTodos, "Learn useState"]);
     ```
   - **Example (handling form)**:
     ```javascript
     const [form, setForm] = useState({
       name: "John",
       email: "john@gmail.com",
       age: 20,
       phone: 980000000,
     });
     setForm((prevForm) => ({
       ...prevForm,
       [e.target.name]: e.target.value,
     }));
     ```

## Summary:

- State changes trigger re-renders, keeping the UI fresh.
- State updates are batched, boosting performance.
- Event listeners can be handled flexibly with inline, separate, or argument-passing functions.
- State initialization can be done directly or through a function for better efficiency.
- State updates can be direct or functional, with functional being more reliable for complex cases.
- Handling objects or arrays in state requires spreading to avoid mutation.

## Downlaod Note:

- You can downlaod these notes from here :

```bash
https://docs.google.com/document/d/1_hrCBY9q51CVrZ6aSTDCjvOE1h1olvi5BdWz1Cbu21A/edit?usp=sharing
```
