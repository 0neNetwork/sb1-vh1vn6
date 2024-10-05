import React, { useState } from 'react';
import { Music, Film, Gamepad2 } from 'lucide-react';

const EntertainmentInterface: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'music' | 'movies' | 'games'>('music');

  const renderContent = () => {
    switch (activeTab) {
      case 'music':
        return (
          <div className="space-y-2">
            {['The Chain - Fleetwood Mac', 'Riders on the Storm', 'All the Things She Said'].map((track, index) => (
              <div key={index} className="bg-gray-700 p-1 rounded flex items-center justify-between text-xs slide-in" style={{animationDelay: `${0.1 * (index + 1)}s`}}>
                <span>{track}</span>
                <button className="bg-blue-500 hover:bg-blue-400 px-2 py-1 rounded text-xs transition-all transform hover:scale-105">
                  Play
                </button>
              </div>
            ))}
          </div>
        );
      case 'movies':
        return (
          <div className="space-y-2">
            {['The Loneliest Robot', 'Meltdown', 'The Simian'].map((movie, index) => (
              <div key={index} className="bg-gray-700 p-1 rounded flex items-center justify-between text-xs slide-in" style={{animationDelay: `${0.1 * (index + 1)}s`}}>
                <span>{movie}</span>
                <button className="bg-blue-500 hover:bg-blue-400 px-2 py-1 rounded text-xs transition-all transform hover:scale-105">
                  Watch
                </button>
              </div>
            ))}
          </div>
        );
      case 'games':
        return (
          <div className="space-y-2">
            {['QUB3D', 'Space Monkey 3D', 'Race and Chase'].map((game, index) => (
              <div key={index} className="bg-gray-700 p-1 rounded flex items-center justify-between text-xs slide-in" style={{animationDelay: `${0.1 * (index + 1)}s`}}>
                <span>{game}</span>
                <button className="bg-blue-500 hover:bg-blue-400 px-2 py-1 rounded text-xs transition-all transform hover:scale-105">
                  Play
                </button>
              </div>
            ))}
          </div>
        );
    }
  };

  return (
    <div className="space-y-4 fade-in">
      <h3 className="text-lg font-semibold text-center">Entertainment</h3>
      <div className="flex justify-around mb-2">
        <button
          className={`p-1 rounded transition-all transform hover:scale-110 ${activeTab === 'music' ? 'bg-blue-500' : 'bg-gray-700'}`}
          onClick={() => setActiveTab('music')}
        >
          <Music size={16} />
        </button>
        <button
          className={`p-1 rounded transition-all transform hover:scale-110 ${activeTab === 'movies' ? 'bg-blue-500' : 'bg-gray-700'}`}
          onClick={() => setActiveTab('movies')}
        >
          <Film size={16} />
        </button>
        <button
          className={`p-1 rounded transition-all transform hover:scale-110 ${activeTab === 'games' ? 'bg-blue-500' : 'bg-gray-700'}`}
          onClick={() => setActiveTab('games')}
        >
          <Gamepad2 size={16} />
        </button>
      </div>
      {renderContent()}
    </div>
  );
};

export default EntertainmentInterface;