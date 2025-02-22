# Intital setup

- React CDN links
- Initial setup for a React project
- Bundlers: Parcel, Vite, Webpack
- npm i React, ReactDOM
- createElement, createRoot, render

npm create vite@latest . -- --template react
npm install sass
npm install react-bootstrap bootstrap

# Components

- React applications are built using components.
- Components are reusable and can be functional or class-based.
- They return JSX (JavaScript XML), which is a syntax similar to HTML.

# Component Composition

- React promotes composing components by nesting them, rather than inheritance.
- Composition is a way to build complex UIs from simpler components.

# JSX (JavaScript XML)

- JSX allows you to write HTML-like code within JavaScript.
- It gets compiled into JavaScript using Babel.

# Lists & Keys

- React uses .map() to render lists dynamically.
- Keys help React identify items efficiently.

# Conditional Rendering

- You can conditionally render UI elements using ternary operators or logical operators.

# Props (Properties)

- Props allow data to be passed from a parent component to a child.
- They are read-only and cannot be modified by the child component.

# Event Handling

- React uses camelCase for event names and onClick, onChange, etc., to handle events.

# React Fiber & Virtual DOM

- React uses a Virtual DOM to optimize rendering performance.
- React Fiber is the engine behind React's reconciliation process, making UI updates smoother.

# Virtual DOM and Reconciliation Algorithm

- The Virtual DOM is a lightweight copy of the actual DOM. React updates the real DOM only when necessary, using a reconciliation algorithm to compare the new Virtual DOM with the previous one.

# State

- State is used to manage component-specific data that can change over time.
- It makes components dynamic and interactive.
- Any change in state variable will re-render the component.

# Hooks

- Hooks let you use state and other React features in functional components.
- Common hooks:
  - useState → Manages state.
  - useEffect → Handles side effects (e.g., API calls, subscriptions).
  - useContext → Accesses context values without prop drilling.

# Custom Hooks

- Custom hooks allow you to extract and reuse logic between components.
- They enable better code reuse and composition.

# React Router (Navigation)

- React Router allows navigation between pages without reloading.
- createBrowserRouter: New way to define routes
- Loaders: Fetch databefore rendering
- Actions: Handle form submissions
- Nested Routes: Organize layouts better
- Route Guards: Protect private routes
- Lazy Loading: Improve performance
- useNavigate: Programmatic navigation
- useSearchParams: Manage query strings
- 404 Handling: Catch-all route
- Scroll Restoration: Maintain scroll position

# Lifecycle Methods (Class Components) & Effects (Functional Components)

- In class components, lifecycle methods like componentDidMount, componentDidUpdate, and componentWillUnmount handle component behaviour.
- In functional components, useEffect replaces lifecycle methods.

# Suspense & Lazy Loading

- React.Suspense allows you to delay rendering a component until some condition is met (e.g., lazy-loaded components).
- React.lazy allows for code-splitting by loading components only when needed.

# Code Splitting

- Code splitting divides the bundle into smaller files that can be loaded on demand, improving performance.
- This is especially useful in large applications. React’s React.lazy() and Suspense help with this.

# Fragment

- Fragment is used to group multiple elements without adding extra nodes to the DOM.
- This helps in keeping the HTML structure clean.

# Context API (State Management)

- Context API avoids prop drilling and provides global state management.

# Redux (State Management)

- Redux is a state management library used to manage global state in large React applications.
- It uses a single store to hold the application’s state, and components can subscribe to the store or dispatch actions to update it.

# Context vs Redux

- Context is simpler and built into React, best for light state management or passing data deeply.
- Redux is more robust, suitable for large-scale applications, and handles complex state logic.

# Refs (References)

- Refs are used to directly interact with DOM elements or React components.
- They allow you to focus, measure, or trigger animations and other actions directly on a DOM node.

# Higher-Order Components (HOCs)

- HOCs are functions that take a component and return a new component with additional props or behavior.
- They allow for code reuse and abstraction.

# Error Boundaries

- Error boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI.

# Shallow Rendering

- Shallow rendering allows you to test components without worrying about their children.
- It helps in unit testing individual components and isolating them from the rest of the UI.

# Contextual Components

- These components are designed to interact with a parent or higher-level component to determine their output (often in terms of props).

# Portals

- React Portals provide a way to render children into a DOM node that exists outside the parent component’s DOM hierarchy.
- Useful for things like modals, tooltips, and dropdowns.

# PureComponent

- React.PureComponent is a base class that optimizes performance by doing a shallow comparison of props and state before re-rendering.
- It prevents unnecessary rendering if props and state haven't changed.

# Server-Side Rendering (SSR)

- SSR refers to rendering React components on the server, sending the HTML to the client, and making it interactive after the initial load.
- Libraries like Next.js help with SSR in React.

# Static Site Generation (SSG)

- Similar to SSR, SSG generates static HTML at build time, resulting in faster initial page loads.
- Next.js also supports SSG, making it easier to build static sites with React.

# TypeScript with React

- TypeScript provides type safety and enhanced developer tooling with React.
- It’s becoming increasingly popular in React development for better maintainability and fewer bugs.
