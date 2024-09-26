
---

# Reconciliation and Diffing in React

---

## How to Run the Project

To clone and run the project, use the following commands:

```bash
git clone https://github.com/ManishJoc14/REACT-COURSE.git;cd REACT-COURSE;git sparse-checkout init --cone;git sparse-checkout set day4_reconciliation_diffing;git pull origin master
```

To run the project:

```bash
cd ./day4_reconciliation_diffing
npm start
```

---

## Reconciliation in React

**Reconciliation** is React's process of updating the DOM to reflect changes in state or props. React maintains a **Virtual DOM**, a lightweight copy of the real DOM. When state or props change, React uses the Virtual DOM to compare (or "diff") the new Virtual DOM tree with the previous one, determining the minimal changes needed. This process involves two main steps:

1. **Diffing**: React compares the new Virtual DOM with the previous one to determine what has changed. It identifies the minimal number of changes required.
2. **Updating the DOM**: React updates only the changed parts of the real DOM based on the diffing result, optimizing performance by avoiding unnecessary re-renders.

---

### Virtual DOM vs. Real DOM

React uses a **Virtual DOM** to optimize rendering performance, as updating the actual DOM is an expensive operation.

#### Example:

```javascript
// Virtual DOM element creation
const h1_vdom = <h1>Virtual</h1>;

// Real DOM element creation
const h1_real = document.createElement("h1");
h1_real.innerText = "Real";

console.log(h1_vdom); // light
console.log(h1_real); // heavy
```

**Explanation**:

- `h1_vdom`: This is a **Virtual DOM** element created using JSX (`<h1>Virtual</h1>`). React keeps this lightweight representation in memory and uses it to efficiently determine what changes need to be applied to the real DOM.
- `h1_real`: This is a **Real DOM** element created using the traditional `document.createElement()` method in JavaScript. This method immediately creates and updates the actual DOM, which can be slower if done repeatedly.

React's reconciliation process allows it to manipulate the real DOM only when necessary, based on the changes in the Virtual DOM, thus improving performance.

---

## Shallow Comparison in React

Here’s the updated version of the section with clearer and more precise language:

---

## Shallow Comparison in React

React uses **shallow comparison** to determine whether a component should re-render:

- **Same reference**: If the reference (either for props or state) is the same, React skips the re-render, assuming no changes have occurred.
- **Different reference**:
  - **Same type**: If the component type is the same but the reference for its props or state has changed, React re-renders the component.
  - **Different type or key**: If the component’s type or key changes, React unmounts the previous component and mounts a new one entirely.

---

## Re-renders and Prop Changes: The Big Myth

For **non-memoized** components, **prop changes** do not directly cause re-renders. Instead:

1. **Parent Re-renders**: If the parent component re-renders, all its child components re-render, regardless of whether their props have changed.
2. **Prop Changes Become Important**: Only with memoization techniques (`React.memo`, `useMemo`) do prop changes directly influence whether a component re-renders. 

Without memoization, any parent re-render triggers a re-render of its children, even if props remain the same.

---

## Examples: Understanding React’s Diffing Algorithm

### 1. **Re-render of Child (New Reference)**

When a child component is created **inside the parent component's render function**, its reference changes with every render. Even if the props remain the same, React detects the new reference and re-renders the child.

#### Example: Re-render Due to New Reference

```javascript
const Parent = () => {
  const [state, setState] = useState(0);

  return (
    <>
      <button onClick={() => setState(state + 1)}>Re-render Parent</button>
      <Child /> {/* Reference changes on each render, causing re-render */ }
    </>
  );
};
```

**Explanation**: The `Child` component is instantiated inside the `Parent`'s render method, so its reference changes on each re-render of the `Parent`. React compares references, detects the change, and re-renders the `Child`.

---

### 2. **No Re-render of Child (Same Reference)**

If the child component is passed as a prop from outside or created outside the parent’s render function, its reference remains the same, preventing unnecessary re-renders.

#### Example: No Re-render Due to Same Reference

```javascript
const Parent = ({ child }) => {
  const [state, setState] = useState(0);

  return (
    <>
      <button onClick={() => setState(state + 1)}>Re-render Parent</button>
      {child} {/* Reference stays the same, preventing re-render */}
    </>
  );
};

const App = () => {
  return <Parent child={<Child />} />; // Reference of <Child /> stays the same
};
```

**Explanation**: Here, the `Child` component is passed as a prop to `Parent`. Since its reference remains the same unless `App` re-renders, React avoids unnecessary re-renders.

---


### Example: Wrapping Child in Parent will pass it as a `children` Prop

```javascript

const App = () => {
  return (
    <Parent>
      <Child /> {/* Passed as children prop */}
    </Parent>
  );
};

const Parent = ({ children }) => {
  const [state, setState] = useState(0);

  return (
    <>
      <button onClick={() => setState(state + 1)}>Re-render Parent</button>
      {children} {/* Passed as children prop */}
    </>
  );
};

```

---

## Summary:

- **Re-render of Child**: Creating a child component inside the parent causes a new reference, leading to unnecessary re-renders.
- **No Re-render of Child**: Passing child components as props or defining them outside the parent ensures stable references, avoiding re-renders.
- **Efficient DOM Updates**: React uses shallow comparison and a diffing algorithm to identify and apply only necessary updates to the DOM, improving performance.

---

### Download Notes

You can download these notes here: 
```bash
https://docs.google.com/document/d/1lv6MOqEneIkvnUEu2oT5pbtlmfoUYFjIHr1Jj1wRWR0/edit?usp=sharing
```

---