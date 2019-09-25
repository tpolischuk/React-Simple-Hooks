import { useState, useEffect } from 'react';
import axios from 'axios';

//Moving all the hook stuff into it's own function
const useResources = resource => {
    const [resources, setResources] = useState([]);

    // The value passed to the array is used to compare the data, only runs if its different
    useEffect(() => {
        (async (resource) => {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`)

            setResources(response.data);
        })(resource)
    }, [resource]);

    return resources;
};

export default useResources;