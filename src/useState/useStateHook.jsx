import { useState } from "react";

const UseStateHook = () => {

    /* 
        - usually hooks return an array
        - first variable: value;
        - second variable: a function to change the state;
    
        You can use any value you want
        number, string, object
    
        It's important to know that every component has its state working independently
        Even if you have lots of the same component;
    
        ARRAY
        To update an array, just pass the old value and add the new name to it.
    */

    const [count, setCount] = useState(0);
    const [list, setList] = useState(['Antero', 'freeCodeCamp', 'Study']);
    const [name, setName] = useState('');

    const addName = () => {
        setList([...list, name]);
        setName('');
    }

    const add = () => {
        setCount(count + 1);
    }

    const reset = () => {
        setCount(0);
    }

    const subtract = () => {
        setCount(count - 1);
    }

    return (
        <div>
            <h2>Value: {count}</h2>
            <div style={{ display: 'flex', gap: 10 }}>
                <button onClick={subtract}>-</button>
                <button onClick={reset}>Reset</button>
                <button onClick={add}>+</button>
            </div>

            <h3>Changing an array</h3>
            <ul>
                {
                    list.map(item => (
                        <li key={item}>{item}</li>
                    ))
                }
            </ul>
            <input type='text' onChange={(e) => setName(e.target.value)} />
            <button onClick={addName}>Add name to the list</button>
        </div>
    );
}

export { UseStateHook };