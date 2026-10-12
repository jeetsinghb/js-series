/**
 * https://blog.logrocket.com/fetch-api-node-js/
 * https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
 */

/*
* A fetch() promise only rejects when the request fails, for example, because of a badly-formed request URL or a network error. A fetch() promise does not reject if the server responds with HTTP status codes that indicate errors (404, 504, etc.). Instead, a then() handler must check the Response.ok and/or Response.status properties.
OR
* The statement to remember: fetch() resolves when it receives an HTTP response, even when that response has an error status. You must check response.ok or response.status to determine HTTP success. If you want HTTP errors to enter the rejection path, throw an error explicitly.
*/


// Explanation: https://youtu.be/Rive84an6Lc?si=HLevA4Sq2DX0TYIb


// Diagram 1: https://drive.google.com/file/d/17d10sl212y_3rYqC6GcYQiSh_KCDMbp6/view?usp=sharing

// Diagram 2: https://drive.google.com/file/d/1qLq1zKIQwxRsElvZMmlMor9GdrLwxdXb/view?usp=sharing

/*
====================================================
JAVASCRIPT EVENT LOOP
====================================================

1. JAVASCRIPT ENGINE
- Executes JavaScript code.
- Examples: V8, SpiderMonkey, JavaScriptCore.
- Includes execution machinery such as the Call Stack.
- Works with the host environment, such as a browser or Node.js.

2. MEMORY HEAP
- Memory area used for dynamically allocated data.
- Objects and arrays are examples of heap-allocated data.
- Stores data; it does not control function execution.

3. CALL STACK
- Tracks currently executing functions.
- Uses LIFO: Last In, First Out.
- Functions enter the stack when called.
- Functions leave the stack when they finish.
- Synchronous JavaScript runs to completion.
- Long-running synchronous code blocks other JS execution.

4. WEB APIs / HOST APIs
- Browser-provided features outside core JavaScript.
- Examples: timers, DOM events, and networking.
- setTimeout() schedules a timer callback.
- setInterval() schedules repeated timer callbacks.
- fetch() initiates a network request and returns a Promise.
- The host environment handles these operations.

5. CALLBACK
- A function passed to another function or API.
- It may be called later when an event or operation occurs.
- A callback is not necessarily asynchronous.

6. TASK QUEUE
- Holds tasks waiting for execution.
- Timer callbacks and many event callbacks are examples.
- A callback becomes eligible after its scheduling conditions are met.
- The callback cannot interrupt synchronous JS already running.

7. MICROTASK QUEUE
- Holds microtasks, including Promise reaction callbacks.
- .then(), .catch(), and .finally() handlers run as microtasks.
- queueMicrotask() explicitly schedules a microtask.
- After a task's synchronous execution finishes, the runtime processes pending microtasks before the next ordinary task.
- Newly queued microtasks are processed before moving on.

8. EVENT LOOP
- Coordinates execution of queued JavaScript work.
- It does not itself perform network requests or timer delays.
- It allows eligible work to run when the JS stack is clear.
- Microtasks are processed before the next ordinary task.
- The browser may render between event-loop tasks.

9. FETCH()
- fetch() initiates a network request and returns a Promise.
- JavaScript continues with the next synchronous statement.
- When the Promise settles, registered reactions are scheduled as microtasks.
- response.json() also returns a Promise.
- Check response.ok to detect unsuccessful HTTP statuses.

10. IMPORTANT RULES
- Synchronous code runs before queued callbacks.
- Promise reactions use the microtask queue.
- setTimeout() callbacks use the task scheduling mechanism.
- A 0 ms timeout does not mean immediate execution.
- Network completion time is not predictable.
- Async operations do not make CPU-heavy synchronous code run in parallel on the main JavaScript thread.
- The Event Loop coordinates execution; it does not make every operation asynchronous.

====================================================
*/



/*
====================================================
FETCH() AND PROMISE INTERNALS
====================================================

// 1. Calling fetch()
const response = fetch("/api/users");

// fetch() initiates a network request and immediately
// returns a Promise.
// The Promise represents the eventual outcome of the request.
// The variable 'response' initially refers to that Promise,
// not the actual HTTP Response object.

// 2. Promise states
// PENDING: The operation has not settled.
// FULFILLED: The operation completed successfully.
// REJECTED: The operation failed.

// A Promise is settled when it is fulfilled or rejected.
// A settled Promise does not change to another state.

// 3. Promise handlers
// .then() registers fulfillment handlers.
// .catch() registers rejection handlers.
// .finally() registers a handler that runs after settlement.

// Promise handlers are scheduled as microtasks when eligible.
// They do not interrupt synchronous JavaScript execution.

// 4. Successful fetch
// A fulfilled fetch Promise provides a Response object.
// HTTP errors such as 404 or 500 do not normally reject fetch().
// Check response.ok or response.status to detect HTTP errors.

// 5. Reading JSON
// response.json() returns another Promise.
// Its fulfillment value is the parsed JavaScript data.

// 6. Failed fetch
// Network failures and certain request errors can reject fetch().
// .catch() can handle a rejection in the Promise chain.

// 7. Important distinction
// fetch() -> Promise
// fulfilled fetch Promise -> Response object
// response.json() -> Promise
// fulfilled JSON Promise -> parsed data

====================================================
*/


// EXTRAS:

/*
====================================================
IMPORTANT: FETCH() DOES NOT REJECT ON HTTP ERRORS
====================================================

// fetch() distinguishes HTTP error responses from
// failures that prevent the request from completing.

// 1. HTTP ERROR RESPONSE
// Examples: 400, 401, 403, 404, 500.
// If the server returns a normal HTTP response,
// fetch() fulfills with a Response object.
// The Promise does NOT automatically reject.
// response.ok will be false for these statuses.

// 2. FETCH / NETWORK FAILURE
// Examples: network connection failure, CORS restrictions,
// or certain invalid request configurations.
// fetch() rejects when the request fails in a way that
// prevents a usable response from being provided.

// 3. WHY THIS MATTERS
// .catch() does not automatically handle HTTP 404 or 500.
// Always check response.ok or response.status when needed.

// 4. PRODUCTION PATTERN
fetch("/api/users")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });

// Throwing an error in the first .then() rejects the
// Promise returned by that .then(), so the next .catch()
// can handle the error.

// REMEMBER:
// HTTP error response != rejected fetch Promise.
// fetch() resolving means a Response is available,
// NOT that the HTTP request was successful.

====================================================
*/