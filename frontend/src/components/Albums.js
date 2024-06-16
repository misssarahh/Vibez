// src/components/Albums.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import mockArtists from '../mockData';

const Albums = () => {
    const { artistId } = useParams();
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        // F�rs�k att h�mta data fr�n API:t
        axios.get(`http://localhost:3002/api/artists/${artistId}/albums`)
            .then(response => {
                setAlbums(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the albums from the API!', error);

                // Anv�nd mockdata om API-anropet misslyckas
                const artist = mockArtists.find(a => a.id === parseInt(artistId));
                if (artist) {
                    setAlbums(artist.albums);
                }
            });
    }, [artistId]);

    return (
        <div>
            <h1>Albums</h1>
            <ul>
                {albums.map(album => (
                    <li key={album.id}>
                        <img src={album.cover} alt={album.title} style={{ width: '100px', height: '100px' }} />
                        <h2>{album.title}</h2>
                        <p>{album.year}</p>
                        <Link to={`/tracks/${artistId}/${album.id}`}>View Tracks</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Albums;
