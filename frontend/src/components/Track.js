// src/components/Track.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Track = () => {
    const { albumId } = useParams();
    const [tracks, setTracks] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:3002/api/albums/${albumId}/tracks`)
            .then(response => {
                setTracks(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the tracks!', error);
            });
    }, [albumId]);

    return (
        <div>
            <h1>Tracks</h1>
            <ul>
                {tracks.map(track => (
                    <li key={track.id}>{track.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default Track;
