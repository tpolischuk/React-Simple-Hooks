import React, { useState } from 'react';
import ResourceList from './ResourceList';

const App = () => {

    // Array destructuring
    // useState sets the default value
    // The second item is the function used to set the state item
    const [resource, setResource] = useState('posts');

    return (
        <div>

            <div>
                <button onClick={() => setResource('posts')}>Posts</button>
                <button onClick={() => setResource('todos')}>Todos</button>
            </div>

            <ResourceList resource={resource} />

        </div>
    );

}

export default App