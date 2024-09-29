import React, {useState} from 'react';

const App = () => {

    const [count, setCount] = useState(0);

    return (
        <div className="counter">
            <h2 style={{color: "white"}}>COUNTER</h2>
            <h1 className="title">{count}</h1>
            <button
                className="button"
                onClick={() => setCount(prev => prev + 1)}
            >
                increment
            </button>
            <button
                className="button"
                onClick={() => setCount(prev => prev - 1)}
            >
                decrement
            </button>
        </div>
    );
};

export default App;