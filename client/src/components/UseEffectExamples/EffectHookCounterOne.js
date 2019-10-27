import React, { useState, useEffect } from 'react';

export default function EffectHookCounterOne() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');

    useEffect(() => {
        console.log('useEffect - document title updated');
        document.title = `You clicked ${count} times`;
    }, [count]); //useEffect has a second parameter, pass an array of the state that useEffect is conditional on to update on rerender

    return (
        <div>
            <input
                type='text'
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <button onClick={() => setCount(count + 1)}>Click {count} times</button>
        </div >
    );
}

// useEffect hook is called inside the functional component to have access to props and state
// renders everytime on the initial render and subsequent renders
// it accepts a function to be called
// lets you cause side effects in a function component, equivalent to a componentDidMount, componentDidUpdate, componentDidUnmount
