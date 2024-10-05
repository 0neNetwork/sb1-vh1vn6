import React from 'react';
import { User, Phone, Mail, MapPin } from 'lucide-react';

const ProfileInterface: React.FC = () => {
  return (
    <div className="space-y-4 fade-in">
      <div className="flex items-center justify-center">
        <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center transition-all hover:bg-gray-500">
          <User size={32} />
        </div>
      </div>
      <div className="space-y-2 text-sm">
        <div className="flex items-center slide-in" style={{animationDelay: '0.1s'}}>
          <User size={14} className="mr-2" />
          <span>John Doe</span>
        </div>
        <div className="flex items-center slide-in" style={{animationDelay: '0.2s'}}>
          <Phone size={14} className="mr-2" />
          <span>555-0123</span>
        </div>
        <div className="flex items-center slide-in" style={{animationDelay: '0.3s'}}>
          <Mail size={14} className="mr-2" />
          <span>john.doe@losSantos.com</span>
        </div>
        <div className="flex items-center slide-in" style={{animationDelay: '0.4s'}}>
          <MapPin size={14} className="mr-2" />
          <span>Los Santos, San Andreas</span>
        </div>
      </div>
      <button className="w-full bg-blue-500 hover:bg-blue-400 p-2 rounded text-sm transition-all transform hover:scale-105">
        Edit Profile
      </button>
    </div>
  );
};

export default ProfileInterface;