import React, { useState } from 'react';

export default function HookCounterThree() {
    const [name, setName] = useState({ firstName: '', lastName: '' });

    return (
        <form>
            <input
                type='text'
                value={name.firstName}
                onChange={e => setName({ ...name, firstName: e.target.value })} //use ... spread operator because useState doesn't auto merge object, instead replaces; unlike setState in classes
            />
            <input
                type='text'
                value={name.lastName}
                onChange={e => setName({ ...name, lastName: e.target.value })}
            />
            <p>Your first name is {name.firstName}</p>
            <p>Your last name is {name.lastName}</p>
            <p>{JSON.stringify(name)}</p>
        </form>
    );
}