// src/components/Artists.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import mockArtists from '../mockData';
import './Artists.css'; // Se till att skapa eller uppdatera denna CSS-fil

const Artists = () => {
    const [artists, setArtists] = useState([]);

    useEffect(() => {
        // Byt ut API-anropet med mockdata för utveckling/test
        setArtists(mockArtists);
    }, []);

    return (
        <div>
            <h1>Artists</h1>
            <div className="artist-list">
                {artists.map(artist => (
                    <div key={artist.id} className="artist-card">
                        <img src={artist.image} alt={artist.name} />
                        <h2>{artist.name}</h2>
                        <p>{artist.description}</p>
                        <Link to={`/albums/${artist.id}`}>View Albums</Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Artists;
