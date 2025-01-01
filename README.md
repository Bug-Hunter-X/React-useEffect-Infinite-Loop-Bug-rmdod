# React useEffect Infinite Loop Bug
This repository demonstrates a common React bug: an infinite loop caused by improperly using the `useEffect` hook.

The `bug.js` file contains code that attempts to increment a state variable within the `useEffect` hook without specifying any dependencies. This causes the component to re-render endlessly because the state change triggers a new execution of the effect which then changes the state again, and so on. 

The `bugSolution.js` file shows the corrected code.  The dependency array `[]` is used to only run this effect once after the initial render.