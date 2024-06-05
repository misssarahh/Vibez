import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Artists = () => {
    const [artists, setArtists] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3002/api/artists')
            .then(response => {
                setArtists(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the artists!', error);
            });
    }, []);

    return (
        <div>
            <h1>Artists</h1>
            <ul>
                {artists.map(artist => (
                    <li key={artist.id}>
                        <Link to={`/albums/${artist.id}`}>{artist.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Artists;