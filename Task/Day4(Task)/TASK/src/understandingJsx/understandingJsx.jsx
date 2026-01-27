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

const UnderstandingJsx = () => {
    return (
        <div>
            <h1>Understanding JSX</h1>
            <h3>Task 1: Header Component</h3>
            <T1/>
            <hr />
            <h3>Task 2: List Rendering</h3>
            <T2/>
            <hr />
            <h3>Task 3: Conditionals</h3>
            <p>Before Login</p>
            <T3 isLoggedIn={false}/>
            <p>After Login</p>
            <T3 isLoggedIn={true}/>
            <hr />
            <h3>Task 4: Expressions</h3>
            <T4/>
            <hr />
            <h3>Task 5: Inline Styles</h3>
            <T5/>
            <hr />
            <h3>Task 6: Self-Closing Tags</h3>
            <T6/>
            <hr />
            <h3>Task 7: Fragments</h3>
            <T7 />
            <hr />
            <h3>Task 8: Comments</h3>
            <T8/>
            <hr />
            <h3>Task 9: Table Structure</h3>
            <T9/>
            <hr />
            <h3>Task 10: Dynamic Date</h3>
            <T10/>
            <hr />
        </div>
    );
};

export default UnderstandingJsx;