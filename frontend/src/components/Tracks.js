// src/components/Tracks.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import mockArtists from '../mockData';

const Tracks = () => {
    const { artistId, albumId } = useParams();
    const [tracks, setTracks] = useState([]);

    useEffect(() => {
        const artist = mockArtists.find(a => a.id === parseInt(artistId));
        if (artist) {
            const album = artist.albums.find(a => a.id === parseInt(albumId));
            if (album) {
                setTracks(album.tracks);
            }
        }
    }, [artistId, albumId]);

    return (
        <div>
            <h1>Tracks</h1>
            <ul>
                {tracks.map(track => (
                    <li key={track.id}>
                        <a href={track.url} target="_blank" rel="noopener noreferrer">{track.title}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Tracks;
