import React, { useState } from 'react';
import { AlertTriangle, Bell, BellOff } from 'lucide-react';

const AlertInterface: React.FC = () => {
  const [alerts, setAlerts] = useState([
    { id: 1, message: 'High-speed chase near Downtown', active: true },
    { id: 2, message: 'Severe weather: Thunderstorms', active: true },
    { id: 3, message: 'Roadwork on Highway 1', active: true },
  ]);

  const toggleAlert = (id: number) => {
    setAlerts(alerts.map(alert => 
      alert.id === id ? { ...alert, active: !alert.active } : alert
    ));
  };

  return (
    <div className="space-y-4 fade-in">
      <h3 className="text-lg font-semibold text-center">Alerts</h3>
      {alerts.map((alert, index) => (
        <div key={alert.id} className={`p-2 rounded-lg flex items-center justify-between text-xs slide-in ${alert.active ? 'bg-red-500' : 'bg-gray-700'}`} style={{animationDelay: `${0.1 * (index + 1)}s`}}>
          <div className="flex items-center">
            <AlertTriangle size={14} className="mr-1" />
            <span>{alert.message}</span>
          </div>
          <button onClick={() => toggleAlert(alert.id)} className="transition-all transform hover:scale-110">
            {alert.active ? <Bell size={14} /> : <BellOff size={14} />}
          </button>
        </div>
      ))}
      <button className="w-full bg-blue-500 hover:bg-blue-400 p-2 rounded text-sm transition-all transform hover:scale-105">
        Add Custom Alert
      </button>
    </div>
  );
};

export default AlertInterface;