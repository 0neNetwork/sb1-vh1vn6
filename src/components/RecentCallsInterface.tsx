import React from 'react';
import { Phone, PhoneIncoming, PhoneOutgoing, PhoneMissed } from 'lucide-react';

interface Contact {
  name: string;
  initials: string;
  color: string;
}

interface RecentCall {
  name: string;
  time: string;
  type: 'incoming' | 'outgoing' | 'missed';
}

const RecentCallsInterface: React.FC = () => {
  const mostCalledContacts: Contact[] = [
    { name: 'Alice', initials: 'A', color: 'bg-blue-500' },
    { name: 'Bob', initials: 'B', color: 'bg-green-500' },
    { name: 'Charlie', initials: 'C', color: 'bg-yellow-500' },
    { name: 'David', initials: 'D', color: 'bg-red-500' },
    { name: 'Eve', initials: 'E', color: 'bg-purple-500' },
  ];

  const recentCalls: RecentCall[] = [
    { name: 'Alice', time: '5m ago', type: 'incoming' },
    { name: 'Bob', time: '15m ago', type: 'outgoing' },
    { name: 'Charlie', time: '1h ago', type: 'missed' },
    { name: 'David', time: '2h ago', type: 'incoming' },
    { name: 'Eve', time: '3h ago', type: 'outgoing' },
  ];

  const getCallIcon = (type: string) => {
    switch (type) {
      case 'incoming':
        return <PhoneIncoming size={14} className="text-green-500" />;
      case 'outgoing':
        return <PhoneOutgoing size={14} className="text-blue-500" />;
      case 'missed':
        return <PhoneMissed size={14} className="text-red-500" />;
      default:
        return <Phone size={14} />;
    }
  };

  return (
    <div className="space-y-4 fade-in">
      <h3 className="text-lg font-semibold text-center">Recent Calls</h3>
      
      <div className="flex justify-between mb-4">
        {mostCalledContacts.map((contact, index) => (
          <button
            key={index}
            className={`w-12 h-12 ${contact.color} rounded-full flex items-center justify-center text-white font-bold transition-all transform hover:scale-110 slide-in`}
            style={{animationDelay: `${0.1 * (index + 1)}s`}}
          >
            {contact.initials}
          </button>
        ))}
      </div>
      
      <div className="space-y-2">
        {recentCalls.map((call, index) => (
          <div
            key={index}
            className="bg-gray-700 p-2 rounded-lg flex items-center justify-between text-sm slide-in"
            style={{animationDelay: `${0.1 * (index + 1)}s`}}
          >
            <div className="flex items-center">
              {getCallIcon(call.type)}
              <span className="ml-2">{call.name}</span>
            </div>
            <div className="flex items-center">
              <span className="mr-2 text-gray-400">{call.time}</span>
              <button className="bg-green-500 hover:bg-green-400 p-1 rounded-full transition-all transform hover:scale-110">
                <Phone size={14} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentCallsInterface;