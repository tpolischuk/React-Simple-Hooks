import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ResourceList = ({ resource }) => {

    const [resources, setResources] = useState([]);



    // The value passed to the array is used to compare the data, only runs if its different
    useEffect(() => {
        (async (resource) => {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`)

            setResources(response.data);
        })(resource)
    }, [resource]);

    return (
        <ul>{resources.map(record => <li key={record.id}>{record.title}</li>)}</ul>
    );
}

export default ResourceList;