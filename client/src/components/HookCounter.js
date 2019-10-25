import React, { useState } from 'react';

export default function HookCounter() {

    const [count, setCount] = useState(0); //array destructuring

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Counter {count}</button>
        </div>
    );
}