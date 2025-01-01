```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct usage: no dependencies, effect runs only once after mount
    // Or, if you need to run effects on specific state/props changes, 
    // add them to the dependency array
    //    setCount(count + 1);
    console.log("Component mounted")
  }, []);

  return <div>Count: {count}</div>;
}
```