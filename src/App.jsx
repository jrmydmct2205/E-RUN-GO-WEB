import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Auth from './pages/Auth';
import Sidebar from './components/Sidebar';

// Import all CSS files
import './components.css';
import './pages.css';

const App = () => {
    // Basic authentication state simulation
    const [isAuthenticated, setIsAuthenticated] = React.useState(false); 

    return (
        <Router>
            <Routes>
                {/* Auth route */}
                <Route path="/auth" element={<Auth setIsAuthenticated={setIsAuthenticated} />} />

                {/* Protected routes */}
                <Route path="*" element={
                    isAuthenticated ? (
                        <div className="app-container">
                            <Sidebar />
                            <div className="main-content">
                                <Routes>
                                    <Route path="/" element={<Dashboard />} />
                                    {/* Add more admin routes here (e.g., /settings, /drones) */}
                                    <Route path="*" element={<Navigate to="/" replace />} />
                                </Routes>
                            </div>
                        </div>
                    ) : (
                        <Navigate to="/auth" replace />
                    )
                } />
            </Routes>
        </Router>
    );
};

export default App;