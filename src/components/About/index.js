/***************/
/***  ABOUT  ***/
/***************/
import React, {useState} from 'react';
import './about.css';

function About() {
    const [count, setCount] = useState(0);

    return(
        <div>
            <div class='container-fluid' >
            <h1>About</h1>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
            </div>
        </div>
    )
}

export default About;
