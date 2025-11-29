const OrderHistory = ({ orders }) => {
    return (
        <div className="order-history">
            <h2>Order History</h2>
            <table>
                <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>Status</th>
                        <th>Drone ID</th>
                        <th>Destination</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map(order => (
                        <tr key={order.id}>
                            <td>{order.id}</td>
                            <td>{order.status}</td>
                            <td>{order.droneId}</td>
                            <td>{order.destination}</td>
                            <td>{order.date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default OrderHistory;