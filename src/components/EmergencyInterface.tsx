import React from 'react';
import { Phone, ShieldAlert, Siren, Flame } from 'lucide-react';

const EmergencyInterface: React.FC = () => {
  const emergencyServices = [
    { name: 'Police', icon: <ShieldAlert size={16} />, number: '911' },
    { name: 'Ambulance', icon: <Siren size={16} />, number: '912' },
    { name: 'Fire Dept', icon: <Flame size={16} />, number: '913' },
  ];

  return (
    <div className="space-y-4 fade-in">
      <h3 className="text-lg font-semibold text-center">Emergency Services</h3>
      <div className="space-y-2">
        {emergencyServices.map((service, index) => (
          <div key={service.name} className="bg-gray-700 p-2 rounded-lg flex items-center justify-between slide-in" style={{animationDelay: `${0.1 * (index + 1)}s`}}>
            <div className="flex items-center">
              {service.icon}
              <span className="ml-2 text-sm">{service.name}</span>
            </div>
            <button className="bg-red-500 hover:bg-red-400 p-1 rounded-full transition-all transform hover:scale-110">
              <Phone size={14} />
            </button>
          </div>
        ))}
      </div>
      <div className="bg-yellow-500 text-black p-2 rounded-lg text-xs slide-in" style={{animationDelay: '0.4s'}}>
        <h4 className="font-bold mb-1">Emergency Tips</h4>
        <ul className="list-disc list-inside">
          <li>Stay calm</li>
          <li>Provide clear location info</li>
          <li>Follow dispatcher instructions</li>
        </ul>
      </div>
    </div>
  );
};

export default EmergencyInterface;