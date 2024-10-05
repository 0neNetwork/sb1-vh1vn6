import React from 'react';
import { 
  Lightbulb, Power, Umbrella, Wrench, ChevronUp, ChevronDown, 
  ChevronLeft, ChevronRight, Droplet, Wind, Thermometer, Volume
} from 'lucide-react';

const VehicleControlInterface: React.FC = () => {
  const controls = [
    { icon: <Lightbulb size={24} />, label: 'Lights' },
    { icon: <Power size={24} />, label: 'Engine' },
    { icon: <Umbrella size={24} />, label: 'Hood' },
    { icon: <Wrench size={24} />, label: 'Trunk' },
    { icon: <ChevronUp size={24} />, label: 'Front Left' },
    { icon: <ChevronDown size={24} />, label: 'Front Right' },
    { icon: <ChevronLeft size={24} />, label: 'Back Left' },
    { icon: <ChevronRight size={24} />, label: 'Back Right' },
    { icon: <Droplet size={24} />, label: 'Oil' },
    { icon: <Wind size={24} />, label: 'AC' },
    { icon: <Thermometer size={24} />, label: 'Temp' },
    { icon: <Volume size={24} />, label: 'Horn' },
  ];

  return (
    <div className="grid grid-cols-3 gap-4 fade-in">
      {controls.map((control, index) => (
        <button
          key={index}
          className="flex flex-col items-center justify-center bg-gray-700 p-2 rounded-lg transition-all duration-300 hover:bg-gray-600 slide-in"
          style={{animationDelay: `${0.05 * (index + 1)}s`}}
        >
          {control.icon}
          <span className="text-xs mt-1">{control.label}</span>
        </button>
      ))}
    </div>
  );
};

export default VehicleControlInterface;