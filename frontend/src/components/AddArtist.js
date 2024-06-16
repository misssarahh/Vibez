import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './AddArtist.css'; // Importera den nya CSS-filen

function AddArtist() {
    const [name, setName] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post('http://localhost:3002/artists', {
            name: name,
        })
            .then(response => {
                console.log(response.data);
                setName('');
                navigate('/artists'); // Redirect to artists page after adding
            })
            .catch(error => {
                console.error('There was an error creating the artist!', error);
            });
    };

    return (
        <div className="add-artist-container">
            <h2>Add Artist</h2>
            <form onSubmit={handleSubmit} className="add-artist-form">
                <div className="form-group">
                    <label>Name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="form-control"
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Add Artist</button>
            </form>
        </div>
    );
}

export default AddArtist;
