import React, { useState, useEffect } from 'react';

export default function IntervalHookCounter() {
    const [count, setCount] = useState(0);
    const tick = () => {
        setCount(count + 1);
        // OR 
        // setCount(prevCount => prevCount + 1)
        // and don't have to set dependency in useEffect array
    }
    useEffect(() => {
        const interval = setInterval(tick, 1000);
        return () => {
            clearInterval(interval);
        }
    }, [count]);
    return (
        <div>
            {count};
        </div>
    )
}
