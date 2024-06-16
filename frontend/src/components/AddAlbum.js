import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './AddAlbum.css';

function AddAlbum() {
    const [title, setTitle] = useState('');
    const [artistId, setArtistId] = useState('');
    const [artists, setArtists] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:3002/artists')
            .then(response => {
                setArtists(response.data);
                if (response.data.length > 0) {
                    setArtistId(response.data[0].id);
                }
            })
            .catch(error => {
                console.error('There was an error fetching the artists!', error);
            });
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post('http://localhost:3002/albums', {
            title: title,
            artistId: artistId
        })
            .then(response => {
                console.log(response.data);
                setTitle('');
                setArtistId(artists.length > 0 ? artists[0].id : '');
                navigate('/albums'); // Redirect to albums page after adding
            })
            .catch(error => {
                console.error('There was an error creating the album!', error);
            });
    };

    return (
        <div className="add-album-container">
            <h2>Add Album</h2>
            <form onSubmit={handleSubmit} className="add-album-form">
                <div className="form-group">
                    <label>Title:</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="form-control"
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Artist:</label>
                    <select
                        value={artistId}
                        onChange={(e) => setArtistId(e.target.value)}
                        className="form-control"
                    >
                        {artists.map(artist => (
                            <option key={artist.id} value={artist.id}>
                                {artist.name}
                            </option>
                        ))}
                    </select>
                </div>
                <button type="submit" className="btn btn-primary">Add Album</button>
            </form>
        </div>
    );
}

export default AddAlbum;
