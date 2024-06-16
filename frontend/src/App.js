import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import Artists from './components/Artists';
import AddArtist from './components/AddArtist';
import AddAlbum from './components/AddAlbum'; // Importera AddAlbum-komponenten
import Albums from './components/Albums'; // Rättade importen till plural
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
                    <Nav.Link href="/add-album">Add Album</Nav.Link> {/* Lagt till länken för Add Album */}
                </Nav>
            </Navbar>
            <Routes>
                <Route path="/" element={<Artists />} /> {/* Lägg till denna rad för att dirigera startsidan till artistsidan */}
                <Route path="/artists" element={<Artists />} />
                <Route path="/add-artist" element={<AddArtist />} />
                <Route path="/add-album" element={<AddAlbum />} /> {/* Lagt till routen för Add Album */}
                <Route path="/albums/:artistId" element={<Albums />} /> {/* Rättade sökvägen */}
                <Route path="/tracks/:artistId/:albumId" element={<Tracks />} /> {/* Lagt till Route för Tracks */}
            </Routes>
        </Router>
    );
}

export default App;
