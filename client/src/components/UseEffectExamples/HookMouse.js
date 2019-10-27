import React, { useState, useEffect } from 'react';

export default function HookMouse() {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const logMousePosition = e => {
        console.log('Mouse event');
        setX(e.clientX);
        setY(e.clientY);
    }
    useEffect(() => {
        console.log('useEffect called');
        window.addEventListener('mousemove', logMousePosition);

        return () => {
            console.log("Component unmount");
            window.removeEventListener('mousemove', logMousePosition);
        }
        //can return a function that will be executed when the component unmounts, aka cleanup function

    }, []) //setting an empty array tells the useEffect hook that this effect doesn't depend on any state or props, so no reason to call this effect on rerenders, only on initial render
    return (
        <div>
            <p>Hook Mouse X - {x} and Y - {y}</p>
        </div>
    );
}