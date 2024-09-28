
---

# React Performance Optimization: useMemo, useCallback, memo

## How to Run the Project

To clone, use the following commands:

```bash
git clone https://github.com/ManishJoc14/REACT-COURSE.git; cd REACT-COURSE; git sparse-checkout init --cone; git sparse-checkout set day5_memoization_techniques_hooks; git pull origin master
```

To run, use the following commands:

```bash
cd ./day5_memoization_techniques_hooks
npm start
```

## Key Points About useMemo, useCallback, memo

1. **useMemo**:

   - **Explanation**: `useMemo` caches the result of a computation and only recalculates it when its dependencies change. It helps avoid expensive recalculations on every render.
   - **Example (Memoizing Component)**:
     ```javascript
     const memoizedChild = useMemo(() => <Child />, []);
     ```
   - **Example (Memoizing Value)**:
     ```javascript
     const memoizedData = useMemo(() => ({ name: "Manish" }), []);
     ```
   - **When to use**: Use when you want to avoid recalculating values on every render for performance optimization.

2. **useCallback**:

   - **Explanation**: `useCallback` memoizes a function, preventing it from being recreated on every render. Useful when passing functions as props to child components to avoid unnecessary re-renders.
   - **Example**:

     ```javascript
     const handleClick = () => {
       console.log("Button clicked");
     };

     const memoizedFunc = useCallback(handleClick, []);
     ```

   - **When to use**: Use when functions are passed as props to child components, ensuring the same function reference is maintained between renders.

3. **memo**:

   - **Explanation**: `memo` is a higher-order component that prevents a component from re-rendering unless its props have changed (uses shallow comparison).
   - **Example**:
     ```javascript
     const Child = React.memo(({ children }) => {
       console.log("Child re-rendering..");
       return <div>{children}</div>;
     });
     ```
   - **When to use**: Use when you want to prevent re-renders of child components unless their props change.

4. **Combining memo, useMemo, and useCallback**:

   - **Example**:

     ```javascript
     const Parent = () => {
       const [text, setText] = useState("navin");

       // Memoizing a component
       const child2Memoized = useMemo(() => <Child2 />, []);

       // Memoizing a function to avoid unnecessary re-renders
       const handleClick = useCallback(() => {
         console.log("Button clicked");
       }, []);

       return (
         <div>
           <h1>Parent</h1>
           <input
             type="text"
             value={text}
             onChange={(e) => setText(e.target.value)}
           />
           <Child children={child2Memoized} handleClick={handleClick} />
         </div>
       );
     };
     ```

   - **Explanation**: In this example:
     - `useMemo` is used to memoize `Child2` so that it doesn’t re-render unless dependencies change.
     - `useCallback` is used to memoize `handleClick`, so it isn't recreated on every render.
     - `memo` is applied to `Child` to avoid re-rendering unless its `children` or `handleClick` prop changes.

5. **Understanding Shallow Comparison**:

   - **Explanation**: React’s `memo` and hooks like `useCallback` and `useMemo` rely on shallow comparison. This means that primitive values are compared by value, but objects and arrays are compared by reference.
   - **Example**:
     ```javascript
     const obj1 = { name: "John" };
     const obj2 = { name: "John" };
     console.log(obj1 === obj2); // false, because they have different references
     ```

## Summary:

- **useMemo**: Memoizes values or components, avoiding recalculations when dependencies don’t change.
- **useCallback**: Memoizes functions to avoid their recreation on every render.
- **memo**: Prevents re-rendering of components unless their props change.
- **Shallow Comparison**: Both `useMemo` and `memo` rely on shallow comparison of props or dependencies for optimization.

## Download Note:

- You can download these notes from here:

```bash
https://docs.google.com/document/d/1JF-IJqbcJe7h_KP27NECXPmzgHcw34Z-ILi7lsLrp2g/edit?usp=sharing
```
