```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect usage of setTimeout. The callback function
    // should return a cleanup function to prevent memory leaks.
    setTimeout(() => {
      setCount(count + 1);
    }, 1000);
  }, [count]);

  return <div>Count: {count}</div>;
}
```