import { useState } from 'react';
import Image from 'next/image';
import { TouristLocation } from '../types';
import { FaCheck, FaShare } from 'react-icons/fa';

interface LocationCardProps {
  location: TouristLocation;
  onCheckIn: (id: string) => void;
}

export default function LocationCard({ location, onCheckIn }: LocationCardProps) {
  const [showFacts, setShowFacts] = useState(false);

  const handleCheckIn = () => {
    onCheckIn(location.id);
    setShowFacts(true);
  };

  const handleShare = async () => {
    try {
      await navigator.share({
        title: `Visitei ${location.name} em Petrópolis!`,
        text: `Acabei de fazer check-in em ${location.name} usando o Passaporte Imperial de Petrópolis!`,
        url: window.location.href,
      });
    } catch (error) {
      console.log('Erro ao compartilhar:', error);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative h-48">
        <Image
          src={location.image}
          alt={location.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{location.name}</h3>
        <p className="text-gray-600 mb-4">{location.description}</p>
        
        <div className="flex justify-between items-center">
          <button
            onClick={handleCheckIn}
            disabled={location.isVisited}
            className={`px-4 py-2 rounded-full flex items-center gap-2 ${
              location.isVisited
                ? 'bg-green-500 text-white'
                : 'bg-blue-500 hover:bg-blue-600 text-white'
            }`}
          >
            {location.isVisited ? (
              <>
                <FaCheck /> Visitado
              </>
            ) : (
              'Fazer Check-in'
            )}
          </button>
          
          {location.isVisited && (
            <button
              onClick={handleShare}
              className="p-2 text-gray-600 hover:text-blue-500"
            >
              <FaShare />
            </button>
          )}
        </div>

        {showFacts && location.isVisited && (
          <div className="mt-4">
            <h4 className="font-bold mb-2">Curiosidades:</h4>
            <ul className="list-disc list-inside">
              {location.facts.map((fact, index) => (
                <li key={index} className="text-gray-600">{fact}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
} 