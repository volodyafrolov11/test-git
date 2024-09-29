import React, {useState} from 'react';

const App = () => {

    const [count, setCount] = useState(0);

    return (
        <div className="counter">
            <h1>{count}</h1>
            <button onClick={() => setCount(prev => prev + 1)}>increment</button>
            <button onClick={() => setCount(prev => prev - 1)}>decrement</button>
        </div>
    );
};

export default App;