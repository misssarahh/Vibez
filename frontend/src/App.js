import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import Artists from './components/Artists';
import AddArtist from './components/AddArtist';
import AddAlbum from './components/AddAlbum'; // Importera AddAlbum-komponenten
import Albums from './components/Albums'; // R�ttade importen till plural
import Tracks from './components/Tracks'; // Importera Tracks-komponenten
import './App.css';

function App() {
    return (
        <Router>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">Music App</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/artists">Artists</Nav.Link>
                    <Nav.Link href="/add-artist">Add Artist</Nav.Link>
                    <Nav.Link href="/add-album">Add Album</Nav.Link> {/* Lagt till l�nken f�r Add Album */}
                </Nav>
            </Navbar>
            <Routes>
                <Route path="/" element={<Artists />} /> {/* L�gg till denna rad f�r att dirigera startsidan till artistsidan */}
                <Route path="/artists" element={<Artists />} />
                <Route path="/add-artist" element={<AddArtist />} />
                <Route path="/add-album" element={<AddAlbum />} /> {/* Lagt till routen f�r Add Album */}
                <Route path="/albums/:artistId" element={<Albums />} /> {/* R�ttade s�kv�gen */}
                <Route path="/tracks/:artistId/:albumId" element={<Tracks />} /> {/* Lagt till Route f�r Tracks */}
            </Routes>
        </Router>
    );
}

export default App;
