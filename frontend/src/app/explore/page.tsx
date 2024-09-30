'use client';
import { useState } from 'react';
import Link from 'next/link';

const demoNonprofits = [
  { id: '1', name: 'Education For All', category: 'Education' },
  { id: '2', name: 'Local Food Bank', category: 'Food Security' },
  { id: '3', name: 'Green Earth Initiative', category: 'Environment' },
];

export default function Explore() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredNonprofits = demoNonprofits.filter(
    (nonprofit) => nonprofit.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-orange-800">Explore Nonprofits</h1>
      <input
        type="text"
        placeholder="Search nonprofits..."
        className="w-full p-2 border border-orange-300 rounded"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="space-y-4">
        {filteredNonprofits.map((nonprofit) => (
          <Link key={nonprofit.id} href={`/nonprofit/${nonprofit.id}`} className="block">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h2 className="text-lg font-semibold text-orange-800">{nonprofit.name}</h2>
              <p className="text-orange-600">{nonprofit.category}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}