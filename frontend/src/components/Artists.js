// src/components/Artists.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import mockArtists from '../mockData';

const Artists = () => {
    const [artists, setArtists] = useState([]);

    useEffect(() => {
        setArtists(mockArtists);
    }, []);

    return (
        <div>
            <h1>Artists</h1>
            <ul>
                {artists.map(artist => (
                    <li key={artist.id}>
                        <img src={artist.image} alt={artist.name} />
                        <h2>{artist.name}</h2>
                        <p>{artist.description}</p>
                        <Link to={`/albums/${artist.id}`}>Show Albums</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Artists;
