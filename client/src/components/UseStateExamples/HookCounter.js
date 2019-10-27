import React, { useState } from 'react';

export default function HookCounter() {

    const [count, setCount] = useState(0); //array destructuring

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Counter {count}</button>
        </div>
    );
}

/*
Hooks allows you to 'hook' into React Lifecycles and state in functional components

useState lets you use state in functional components.
It returns an array of two elements, the state and the state setter, it only accepts one parameter, the initial state value

unlike in classes, useState doesnt auto merge, it replaces the object value, so need to use spread operators
in classes, state is always an object, but with the useState hook in functional components, it doesn't have to be an object

if the new state depends on the prev state value, you can pass a function into the setter function that takes in the prev state value

*/