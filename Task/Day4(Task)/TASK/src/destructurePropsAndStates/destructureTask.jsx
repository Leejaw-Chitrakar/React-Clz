import React from 'react';

import T1 from './T1.jsx';
import T2 from './T2.jsx';
import T3 from './T3.jsx';
import T4 from './T4.jsx';
import T5 from './T5.jsx';
import T6 from './T6.jsx';
import T7 from './T7.jsx';
import T8 from './T8.jsx';
import T9 from './T9.jsx';
import T10 from './T10.jsx';

const DestructureTask = () => {
    return (
        <div>
            <h1>Destructuring Props and State</h1>
            <h3>Task 1: Destructure Params</h3>
            <T1/>
            <hr />
            <h3>Task 2: Destructure Nested</h3>
            <T2/>
            <hr />
            <h3>Task 3: Destructure useState</h3>
            <T3/>
            <hr />
            <h3>Task 4: Destructure in Body</h3>
            <T4/>
            <hr />
            <h3>Task 5: Destructure with Rest</h3>
            <T5/>
            <hr />
            <h3>Task 6: Destructure Defaults</h3>
            <T6/>
            <hr />
            <h3>Task 7: Destructure Event</h3>
            <T7 />
            <hr />
            <h3>Task 8: Multiple States</h3>
            <T8/>
            <hr />
            <h3>Task 9: Destructure Custom Hook</h3>
            <T9/>
            <hr />
            <h3>Task 10: Prop Drill Destructure</h3>
            <T10/>
            <hr />
        </div>
    );
};

export default DestructureTask;
