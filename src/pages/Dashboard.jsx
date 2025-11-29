import StatCard from '../components/StatCard';
import OrderHistory from '../components/OrderHistory';
import TransactionHistory from '../components/TransactionHistory';

// Mock Data
const stats = [
    { title: 'Total Revenue', value: '$45,230', type: 'success' },
    { title: 'Total Orders', value: '1,245', type: 'primary' },
    { title: 'Orders Today', value: '42', type: 'success' },
    { title: 'Active Drones', value: '8/10', type: 'warning' },
    { title: 'Avg. Order Value', value: '$36.50', type: 'primary' },
];

const recentOrders = [
    { id: 'ORD-1001', status: 'Delivered', droneId: 'D-004', destination: '789 Elm Rd', date: '2025-11-29', amount: 45.00 },
    { id: 'ORD-1002', status: 'In Transit', droneId: 'D-002', destination: '456 Oak St', date: '2025-11-29', amount: 22.50 },
    { id: 'ORD-1003', status: 'Pending', droneId: 'N/A', destination: '123 Main St', date: '2025-11-29', amount: 30.00 }, 
    { id: 'ORD-1004', status: 'Delivered', droneId: 'D-001', destination: '222 Birch Ln', date: '2025-11-28', amount: 120.00 },
];

const transactions = [
    { id: 'TRX-8891', user: 'Alice Smith', orderId: 'ORD-1001', amount: 45.00, method: 'Credit Card', status: 'Completed', date: '2025-11-29 10:30 AM' },
    { id: 'TRX-8892', user: 'Bob Jones', orderId: 'ORD-1002', amount: 22.50, method: 'PayPal', status: 'Pending', date: '2025-11-29 11:15 AM' },
    { id: 'TRX-8893', user: 'Charlie Day', orderId: 'ORD-1003', amount: 120.00, method: 'Credit Card', status: 'Completed', date: '2025-11-28 09:45 PM' },
    { id: 'TRX-8894', user: 'Dana White', orderId: 'ORD-1004', amount: 15.00, method: 'Debit Card', status: 'Failed', date: '2025-11-28 08:20 AM' },
];

const Dashboard = () => {
    return (
        <div>
            <h2>Dashboard Overview</h2>

            <div className="dashboard-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
                {stats.map((stat, index) => (
                    <StatCard key={index} {...stat} />
                ))}
            </div>

            <div style={{marginTop: '3rem'}}>
                <TransactionHistory transactions={transactions} />
            </div>

            <div style={{marginTop: '3rem'}}>
                <OrderHistory orders={recentOrders} /> 
            </div>
        </div>
    );
};

export default Dashboard;