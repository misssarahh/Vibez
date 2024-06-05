import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import Artists from './components/Artists';
import AddArtist from './components/AddArtist';

function App() {
    return (
        <Router>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">Music App</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/artists">Artists</Nav.Link>
                    <Nav.Link href="/add-artist">Add Artist</Nav.Link>
                </Nav>
            </Navbar>
            <Routes>
                <Route path="/artists" element={<Artists />} />
                <Route path="/add-artist" element={<AddArtist />} />
            </Routes>
        </Router>
    );
}

export default App;

