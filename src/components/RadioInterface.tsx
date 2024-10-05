import React, { useState } from 'react';
import { Volume2, SkipBack, Play, Pause, SkipForward, Youtube, Music, Link } from 'lucide-react';

const RadioInterface: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState('Blinding Lights - The Weeknd');
  const [volume, setVolume] = useState(50);
  const [customLink, setCustomLink] = useState('');

  const popularTracks = [
    'Blinding Lights - The Weeknd',
    'As It Was - Harry Styles',
    'Stay - The Kid LAROI & Justin Bieber',
    'Heat Waves - Glass Animals',
    'Levitating - Dua Lipa',
  ];

  return (
    <div className="space-y-4 fade-in">
      <div className="text-center">
        <h3 className="text-lg font-semibold truncate">{currentTrack}</h3>
      </div>
      <div className="flex justify-center items-center space-x-4">
        <button className="p-1 rounded-full bg-gray-700 hover:bg-gray-600 transition-all">
          <SkipBack size={16} />
        </button>
        <button
          className="p-2 rounded-full bg-blue-500 hover:bg-blue-400 transition-all transform hover:scale-105"
          onClick={() => setIsPlaying(!isPlaying)}
        >
          {isPlaying ? <Pause size={24} /> : <Play size={24} />}
        </button>
        <button className="p-1 rounded-full bg-gray-700 hover:bg-gray-600 transition-all">
          <SkipForward size={16} />
        </button>
      </div>
      <div className="flex items-center space-x-2">
        <Volume2 size={16} />
        <input
          type="range"
          min="0"
          max="100"
          value={volume}
          onChange={(e) => setVolume(parseInt(e.target.value))}
          className="w-full"
        />
      </div>
      <div className="space-y-2">
        <div className="flex items-center space-x-2">
          <input
            type="text"
            value={customLink}
            onChange={(e) => setCustomLink(e.target.value)}
            placeholder="Enter custom music link"
            className="flex-grow p-1 text-sm rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button 
            className="p-1 rounded bg-blue-500 hover:bg-blue-400 transition-all"
            onClick={() => {/* Handle custom link playback */}}
          >
            <Link size={16} />
          </button>
        </div>
        {popularTracks.map((track) => (
          <button
            key={track}
            className={`w-full p-1 text-sm rounded transition-all ${
              currentTrack === track ? 'bg-blue-500 hover:bg-blue-400' : 'bg-gray-700 hover:bg-gray-600'
            }`}
            onClick={() => setCurrentTrack(track)}
          >
            {track}
          </button>
        ))}
      </div>
      <div className="flex justify-center space-x-4 mt-4">
        <a href="https://www.youtube.com/music" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-400 transition-all">
          <Youtube size={24} />
        </a>
        <a href="https://open.spotify.com" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-400 transition-all">
          <Music size={24} />
        </a>
      </div>
    </div>
  );
};

export default RadioInterface;