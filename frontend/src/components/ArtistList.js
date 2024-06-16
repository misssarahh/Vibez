import React from 'react';
import mockArtists from '../mockData';
import './artists.css';

const ArtistList = () => {
    return (
        <div className="artist-container">
            <h1>Artists</h1>
            <div className="artist-list">
                {mockArtists.map(artist => (
                    <div key={artist.id} className="artist-card">
                        <img src={artist.image} alt={artist.name} />
                        <h2>{artist.name}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ArtistList;
