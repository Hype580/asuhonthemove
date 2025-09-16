'use client';

import { useState, useEffect } from 'react';
import NannyCard from './NannyCard';
import type { Nanny } from '@/types/nanny';

export default function NannyList() {
  const [nannies, setNannies] = useState<Nanny[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchNannies = async () => {
      try {
        const response = await fetch('/api/nannies');
        if (response.ok) {
          const data = await response.json();
          setNannies(data);
        } else {
          setError('Failed to load nannies');
        }
      } catch (error) {
        setError('Failed to load nannies');
      } finally {
        setLoading(false);
      }
    };

    fetchNannies();
  }, []);

  if (loading) {
    return (
      <div className="w-full flex justify-center items-center py-16">
        <div className="text-lg text-gray-600">Loading nannies...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full flex justify-center items-center py-16">
        <div className="text-lg text-red-600">{error}</div>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col items-center gap-6 md:gap-10 mt-8 md:mt-16 mb-16 md:mb-24">
      {nannies.map((nanny, index) => {
        // Determine colors based on odd/even index (0-based, so we add 1 to make it 1-based)
        const isOdd = (index + 1) % 2 === 1;
        const color = isOdd ? '#F8E6E6' : '#C5E6ED';
        const circleColor = isOdd ? '#E7ADAE' : '#44AEC5';
        
        return (
          <NannyCard
            key={nanny.id || nanny.name}
            {...nanny}
            color={color}
            circleColor={circleColor}
          />
        );
      })}
    </div>
  );
} 