const DroneCard = ({ drone }) => {
    let statusClass = '';
    if (drone.status === 'Online') statusClass = 'online';
    else if (drone.status === 'Delivering') statusClass = 'delivery';
    else if (drone.status === 'Charging') statusClass = 'charging';

    // Battery progress value must be between 0 and 100
    const batteryValue = Math.max(0, Math.min(100, drone.battery));

    return (
        <div className="drone-card">
            <h4>Drone ID: {drone.id}</h4>
            <span className={`status ${statusClass}`}>{drone.status}</span>
            <p>Location: {drone.location}</p>
            <div>
                <p>Battery: {batteryValue}%</p>
                <progress value={batteryValue} max="100"></progress>
            </div>
        </div>
    );
};

export default DroneCard;