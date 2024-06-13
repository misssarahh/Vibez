// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import Artists from './components/Artists';
import AddArtist from './components/AddArtist';
import Album from './components/Album';
import Track from './components/Track';
import './App.css';

function App() {
    return (
        <Router>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">Music App</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/artists">Artists</Nav.Link>
                    <Nav.Link href="/add-artist">Add Artist</Nav.Link>
                    <Nav.Link href="/albums">Albums</Nav.Link> {/* Lägg till denna rad */}
                    <Nav.Link href="/tracks">Tracks</Nav.Link> {/* Lägg till denna rad */}
                </Nav>
            </Navbar>
            <Routes>
                <Route path="/artists" element={<Artists />} />
                <Route path="/add-artist" element={<AddArtist />} />
                <Route path="/albums" element={<Album />} /> {/* Lägg till denna rad */}
                <Route path="/tracks" element={<Track />} /> {/* Lägg till denna rad */}
            </Routes>
        </Router>
    );
}

export default App;
