// src/ArtistList.js
import React from 'react';
import mockArtists from './mockData';

const ArtistList = () => {
    return (
        <div>
            <h1>Artists</h1>
            <div className="artist-list">
                {mockArtists.map(artist => (
                    <div key={artist.id} className="artist-card">
                        <img src={artist.image} alt={artist.name} />
                        <h2>{artist.name}</h2>
                        <p>{artist.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ArtistList;
