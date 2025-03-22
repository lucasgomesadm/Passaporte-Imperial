'use client';

import { useState } from 'react';
import LocationCard from '../components/LocationCard';
import { touristLocations } from '../data/locations';
import { TouristLocation } from '../types';

export default function Home() {
  const [locations, setLocations] = useState<TouristLocation[]>(touristLocations);
  const visitedCount = locations.filter(loc => loc.isVisited).length;

  const handleCheckIn = (id: string) => {
    setLocations(prevLocations =>
      prevLocations.map(location =>
        location.id === id ? { ...location, isVisited: true } : location
      )
    );
  };

  return (
    <main className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Passaporte Imperial de Petrópolis
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Explore a história da Cidade Imperial e colecione memórias únicas
          </p>
          
          <div className="bg-white rounded-lg shadow p-6 max-w-sm mx-auto">
            <h2 className="text-2xl font-bold mb-4">Seu Progresso</h2>
            <div className="flex items-center justify-center gap-4">
              <div className="text-4xl font-bold text-blue-500">{visitedCount}</div>
              <div className="text-gray-600">
                de {locations.length} locais visitados
              </div>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {locations.map(location => (
            <LocationCard
              key={location.id}
              location={location}
              onCheckIn={handleCheckIn}
            />
          ))}
        </div>
      </div>
    </main>
  );
} 