# React useEffect: Memory Leak with setTimeout

This repository demonstrates a common mistake when using the `useEffect` hook in React with `setTimeout`.  Forgetting to return a cleanup function from the `useEffect` callback can lead to memory leaks and unexpected component behavior.

## Bug Description

The provided `MyComponent` uses `useEffect` with `setTimeout` to increment a counter every second. However, it does not include a cleanup function to clear the timeout before the component unmounts or updates.  This results in the component continuously adding to the timeout queue, causing memory leaks and unpredictable behavior, specifically, a faster-than-expected increment after multiple renders.

## Solution

The solution involves returning a cleanup function from the `useEffect` callback. This function cancels the pending timeout when the component unmounts or updates.  This ensures proper memory management and predictable component behavior.