import StatCard from '../components/StatCard';
import DroneCard from '../components/DroneCard';
import OrderHistory from '../components/OrderHistory';

// Mock Data
const stats = [
    { title: 'Total Orders', value: '1,245', type: 'primary' },
    { title: 'Orders Today', value: '42', type: 'success' },
    { title: 'Active Drones', value: '8/10', type: 'warning' },
];

const drones = [
    { id: 'D-001', status: 'Online', location: 'Warehouse A', battery: 85 },
    { id: 'D-002', status: 'Delivering', location: '456 Oak St', battery: 30 },
    { id: 'D-003', status: 'Charging', location: 'Hangar B', battery: 95 },
    { id: 'D-004', status: 'Online', location: 'Warehouse A', battery: 72 },
    { id: 'D-005', status: 'Delivering', location: '101 Pine Ave', battery: 55 },
];

const recentOrders = [
    { id: 'ORD-1001', status: 'Delivered', droneId: 'D-004', destination: '789 Elm Rd', date: '2025-11-28' },
    { id: 'ORD-1002', status: 'In Transit', droneId: 'D-002', destination: '456 Oak St', date: '2025-11-29' },
    { id: 'ORD-1003', status: 'Pending', droneId: 'N/A', destination: '123 Main St', date: '2025-11-29' },
    { id: 'ORD-1004', status: 'Delivered', droneId: 'D-001', destination: '222 Birch Ln', date: '2025-11-28' },
];


const Dashboard = () => {
    return (
        <div>
            <h2>Dashboard Overview</h2>
            
            {/* Statistics */}
            <div className="dashboard-grid">
                {stats.map((stat, index) => (
                    <StatCard key={index} {...stat} />
                ))}
            </div>

            {/* Drone Cards */}
            <h2 style={{marginTop: '3rem'}}>Drone Fleet Status</h2>
            <div className="drone-card-grid">
                {drones.map(drone => (
                    <DroneCard key={drone.id} drone={drone} />
                ))}
            </div>

            {/* Order History */}
            <div style={{marginTop: '3rem'}}>
                <OrderHistory orders={recentOrders} />
            </div>
        </div>
    );
};

export default Dashboard;