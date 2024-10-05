import React, { useState, useEffect } from 'react';
import { Radio, Phone, Zap, Gamepad2, Car } from 'lucide-react';
import RadioInterface from './components/RadioInterface';
import RecentCallsInterface from './components/RecentCallsInterface';
import EmergencyInterface from './components/EmergencyInterface';
import EntertainmentInterface from './components/EntertainmentInterface';
import VehicleControlInterface from './components/VehicleControlInterface';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('radio');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  const handleMessage = (event: MessageEvent) => {
    if (event.data.type === 'openRadio') {
      setVisible(true);
    }
  };

  const closeRadio = () => {
    setVisible(false);
    fetch('https://car-radio/closeRadio', { method: 'POST' });
  };

  const renderInterface = () => {
    switch (activeTab) {
      case 'radio':
        return <RadioInterface />;
      case 'calls':
        return <RecentCallsInterface />;
      case 'emergency':
        return <EmergencyInterface />;
      case 'entertainment':
        return <EntertainmentInterface />;
      case 'vehicle':
        return <VehicleControlInterface />;
      default:
        return <RadioInterface />;
    }
  };

  if (!visible) return null;

  return (
    <div className="bg-gray-900 text-white h-screen flex items-center justify-center">
      <div className="bg-gray-800 rounded-lg shadow-lg w-96">
        <nav className="flex justify-around p-2 bg-gray-700 rounded-t-lg">
          <button
            onClick={() => setActiveTab('radio')}
            className={`p-2 rounded-md transition-all duration-300 ${activeTab === 'radio' ? 'bg-gray-600' : 'hover:bg-gray-600'}`}
          >
            <Radio size={20} />
          </button>
          <button
            onClick={() => setActiveTab('calls')}
            className={`p-2 rounded-md transition-all duration-300 ${activeTab === 'calls' ? 'bg-gray-600' : 'hover:bg-gray-600'}`}
          >
            <Phone size={20} />
          </button>
          <button
            onClick={() => setActiveTab('emergency')}
            className={`p-2 rounded-md transition-all duration-300 ${activeTab === 'emergency' ? 'bg-gray-600' : 'hover:bg-gray-600'}`}
          >
            <Zap size={20} />
          </button>
          <button
            onClick={() => setActiveTab('entertainment')}
            className={`p-2 rounded-md transition-all duration-300 ${activeTab === 'entertainment' ? 'bg-gray-600' : 'hover:bg-gray-600'}`}
          >
            <Gamepad2 size={20} />
          </button>
          <button
            onClick={() => setActiveTab('vehicle')}
            className={`p-2 rounded-md transition-all duration-300 ${activeTab === 'vehicle' ? 'bg-gray-600' : 'hover:bg-gray-600'}`}
          >
            <Car size={20} />
          </button>
        </nav>
        <div className="p-4">
          {renderInterface()}
        </div>
        <button
          onClick={closeRadio}
          className="w-full bg-red-500 hover:bg-red-600 p-2 rounded-b-lg transition-all duration-300"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default App;