# React UseEffct Hook

## How to Run the Project

To clone, use the following commands:

```bash
 git clone https://github.com/ManishJoc14/REACT-COURSE.git; cd REACT-COURSE; git sparse-checkout init --cone; git sparse-checkout set day2_useeffect; git pull origin master
```

To run, use the following commands:

```bash
cd ./day2_useeffect
npm start
```

---

1. **What is `useEffect`?**

`useEffect` is a powerful React hook that allows you to perform side effects in function components. Side effects are operations that affect something outside of the component, such as:

- Fetching data from APIs
- Setting up subscriptions (e.g., WebSockets)
- Manually modifying the DOM
- Setting timers or intervals

In class components, you would typically handle these with lifecycle methods like `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount`. `useEffect` combines these functionalities into a single hook, making it more convenient and flexible for handling side effects in functional components.

2. **When Does `useEffect` Run?**

By default, `useEffect` runs after every render (including the initial render). However, you can control when it runs by passing a dependency array as the second argument.

**_Example:_**

```javascript
// Runs after the initial render also on every render
useEffect(() => {});

// Runs only once after the initial render
useEffect(() => {}, []);

// Runs after the initial render and when "count" changes
useEffect(() => {}, [count]);
```

---

3. **Cleanup with `useEffect`**

If your effect involves setting up subscriptions, timers, or event listeners, you should return a cleanup function from `useEffect`. This `cleanup function runs before the component unmounts or when the effect re-runs` due to dependency changes, preventing memory leaks.

**_A. Setting up Intervals Example_**

Here’s an explanation of two different `useEffect` implementations for setting intervals:

**_First `useEffect` (Efficient Version)_**

```javascript
useEffect(() => {
  const intervalId = setInterval(() => {
    setCount((prev) => prev + 1);
  }, 1000);

  return () => clearInterval(intervalId);
}, []);
```

- **Execution**: Runs once after the initial render, setting up an interval.
- **Cleanup**: The interval is cleared when the component unmounts.

**_Second `useEffect` (Less Efficient Version)_**

```javascript
useEffect(() => {
  const intervalId = setInterval(() => {
    setCount(count + 1);
  }, 1000);

  return () => clearInterval(intervalId);
}, [count]);
```

- **Execution**: Runs after the initial render and whenever `count` changes, creating multiple intervals.
- **Cleanup**: The interval is cleared both when the effect re-runs due to `count` changes and when the component unmounts.

**_B. Event Listener Example_**

```javascript
useEffect(() => {
  const handleResize = () => {
    console.log(
      "Window resized to:",
      window.innerWidth,
      "x",
      window.innerHeight
    );
  };

  window.addEventListener("resize", handleResize);

  // Cleanup function
  return () => {
    window.removeEventListener("resize", handleResize);
  };
}, []); // Runs only once when the component mounts
```

- **Execution**: Sets up a listener for the window's resize event.
- **Cleanup**: The event listener is removed when the component unmounts, preventing unnecessary listeners from persisting.

---

**4. Multiple `useEffect` Calls**

You can have multiple `useEffect` hooks in a component, each with its own logic and dependencies.

**_Example:_**

```javascript
// Effect 1: Update the document title when the count changes
useEffect(() => {
  document.title = `Count is ${count}`;
}, [count]);

// Effect 2: Fetch data when the component mounts
useEffect(() => {
  fetchData();
}, []);
```

---

**5. Custom Hook for Fetching Data**

To reuse data-fetching logic across multiple components, you can encapsulate it in a custom hook. This simplifies code and ensures consistency.

**_Custom Hook for Data Fetching:_**

```javascript
import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
```

**_Using the Custom Hook in a Component:_**

```javascript
const { data: posts, loading, error } = useFetch(URL);
```

In this example:

- `useFetch` abstracts the data-fetching logic.
- It returns the `data`, `loading`, and `error` states.
- The component simply consumes the hook, keeping the UI rendering logic clean.

---

### Benefits of Using `useEffect` and Custom Hooks:

1. **Reusability**: Custom hooks like `useFetch` can be reused across multiple components, making your code more modular.
2. **Separation of Concerns**: `useEffect` allows you to isolate side-effect logic from rendering logic, improving code clarity.

---

## Downlaod Note:

- You can downlaod these notes from here :

```bash
https://docs.google.com/document/d/1kgzRtFw6e9qQEerTqvwzoPEFp8ojmBvDMtaDLK-oGDA/edit?usp=sharing
```