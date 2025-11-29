import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
    const location = useLocation();

    return (
        <div className="sidebar">
            <h1>DRONE ADMIN</h1>
            <nav>
                <Link 
                    to="/" 
                    className={location.pathname === '/' ? 'active' : ''}
                >
                    Dashboard
                </Link>
                <Link to="/orders">Orders</Link>
                <Link to="/drones">Drones</Link>
                <Link to="/users">Users</Link>
            </nav>
        </div>
    );
};

export default Sidebar;