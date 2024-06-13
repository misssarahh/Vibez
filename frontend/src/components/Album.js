// src/components/Album.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Album = () => {
    const { artistId } = useParams();
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:3002/api/artists/${artistId}/albums`)
            .then(response => {
                setAlbums(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the albums!', error);
            });
    }, [artistId]);

    return (
        <div>
            <h1>Albums</h1>
            <ul>
                {albums.map(album => (
                    <li key={album.id}>{album.title} ({album.year})</li>
                ))}
            </ul>
        </div>
    );
};

export default Album;
