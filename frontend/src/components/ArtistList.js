
import React, { useState, useEffect } from 'react';
import { mockArtists } from '../mockData'; // Importera mockade data

function ArtistList() {
    const [artists, setArtists] = useState([]);

    useEffect(() => {
        // Använd mockade data istället för att göra ett API-anrop
        setArtists(mockArtists);
    }, []);

    return (
        <div>
            <h1>Artists</h1>
            <ul>
                {artists.map(artist => (
                    <li key={artist.id}>
                        <h2>{artist.name}</h2>
                        <p>{artist.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ArtistList;
