# React useRef Hook

`useRef` is a React Hook that allows you to create a mutable object which holds a `.current` property that persists for the full lifetime of the component.

---

## How to Run the Project

To clone, use the following commands:

```bash
git clone https://github.com/ManishJoc14/REACT-COURSE.git; cd REACT-COURSE; git sparse-checkout init --cone; git sparse-checkout set day3_useref; git pull origin master
```

To run, use the following commands:

```bash
cd ./day3_useref
npm start
```

---

## Key Points About useRef

---

1. **Creating a Ref**:

   - **Explanation**: You create a ref using `useRef`, and it returns an object with a `.current` property.
   - **Example**:

     ```javascript
     const inputRef = useRef(null);
     ```

---

2. **Accessing DOM Elements**:

   - **Explanation**: You can attach the ref to a DOM element to access it directly.
   - **Example**:

     ```javascript
     <input ref={inputRef} type="text" />
     ```

---

3. **Updating the Ref**:

   - **Explanation**: You can update the `.current` property to hold any mutable value without causing re-renders.
   - **Example**:

     ```javascript
     inputRef.current.focus(); // Focuses the input element
     ```

---

4. **Persisting Values Across Renders**:

   - **Explanation**: Unlike local variables, values held in a ref persist across renders without causing re-renders when updated.
   - **Example**:

     ```javascript
     const countRef = useRef(0);
     countRef.current += 1; // This won't trigger a re-render
     ```

---

5. **Comparing useRef with useState**:

   - **Explanation**: `useRef` does not cause re-renders when its value changes, while `useState` does.
   - **Example**:

     ```javascript
     import { useState,useEffect, useRef } from "react";

     function Counter() {
       const [count, setCount] = useState(0);
       const intervalRef = useRef(null);

       useEffect(() => {
         intervalRef.current = setInterval(() => {
           setCount((prevCount) => prevCount + 1);
         }, 1000);
         return () => clearInterval(intervalRef.current);
       }, []);

       return (
         <div>
           <p>Count: {count}</p>
         </div>
       );
     }
    
    export default Counter
    ```

 ---

## Summary:

- `useRef` creates a mutable object that persists for the full lifetime of the component.
- Use it to access and manipulate DOM elements directly.
- Values stored in `useRef` persist across renders without causing re-renders.
- It’s useful for storing mutable values or IDs from timers/intervals.
- Unlike `useState`, changing `useRef` does not trigger a re-render.

---

## Download Note:

- You can download these notes from here:

```bash
https://docs.google.com/document/d/1-noUWRI7Gvvb1D-Lr0TqWeVtGmkQLBgdfrduLT1KD0I/edit?usp=sharing
````
