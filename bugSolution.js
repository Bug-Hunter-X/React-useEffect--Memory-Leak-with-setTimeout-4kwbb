```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setCount(count + 1);
    }, 1000);

    // Cleanup function
    return () => clearTimeout(timeoutId);
  }, [count]);

  return <div>Count: {count}</div>;
}
```