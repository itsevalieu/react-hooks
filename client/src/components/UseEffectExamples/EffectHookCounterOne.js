import React, { useState, useEffect } from 'react';

export default function EffectHookCounterOne() {
    const [count, setCount] = useState(0);

    useEffect(() => { document.title = `You clicked ${count} times` });
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Click {count} times</button>
        </div>
    );
}

// useEffect hook is called inside the functional component to have access to props and state
// renders everytime on the initial render and subsequent renders
// it accepts a function to be called
// lets you cause side effects in a function component, equivalent to a componentDidMount, componentDidUpdate, componentDidUnmount
