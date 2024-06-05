import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddArtist() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post('http://localhost:3002/artists', {
            name: name,
            description: description
        })
            .then(response => {
                console.log(response.data);
                setName('');
                setDescription('');
                navigate('/artists'); // Redirect to artists page after adding
            })
            .catch(error => {
                console.error('There was an error creating the artist!', error);
            });
    };

    return (
        <div>
            <h2>Add Artist</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label>Description:</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <button type="submit">Add Artist</button>
            </form>
        </div>
    );
}

export default AddArtist;
