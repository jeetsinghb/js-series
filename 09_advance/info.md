# Async Javascript fundamentals

## Summary

- Js is synchronous single threaded language which executes sequentially.
- We have API's which allow us to write the asynchronous code like setTimeOut etc.
- Javascript engine = heap + call stack
- Js engine (V8) is always used with some runtime environment like browser nodejs, deno etc for asynchronous programming.
- When JS engine finds asynchronous block it does not go in the call stack rather it goes to the task queue, then task queue add it to the call stack.

## Blocking Code (Sync)

- Block the flow of the program

## Non Blocking Code (Async)

- Do not block execution
