// TODO: Create a Component, that does an API call to get characters from Game of Thrones and display them in a list. https://thronesapi.com/api/v2/Characters
// - use the Fetch API to get the data
// - use the useEffect hook to fetch the data when the component mounts
// - use the useState hook to store the data
// - display the data in a list
import React, { useState, useEffect } from 'react';

function EffectsComponent() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("https://thronesapi.com/api/v2/Characters")
         .then(response => response.json())
         .then((fetchData) => setData(fetchData))
         .catch((error) => setError(error.message))
         .finally(() => setLoading(false));
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error)  {
        return <p>Error: {error}</p>
    }

    return (
        <div>
            <h2>Game of Throne Characters</h2>
            <ul>
                {data && data.map((character) => (
                    <li key={character.id}>{character.fullName}</li>
                ))}
            </ul>
        </div>
    );
}

export default EffectsComponent;