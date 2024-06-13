// src/components/Artists.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import mockArtists from '../mockData';

const Artists = () => {
    const [artists, setArtists] = useState([]);

    useEffect(() => {
        // Byt ut API-anropet med mockdata för utveckling/test
        setArtists(mockArtists);
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
