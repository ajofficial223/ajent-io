
"use client";

import { Suspense, lazy, useState, useEffect } from 'react';
const Spline = lazy(() => import('@splinetool/react-spline'));

interface SplineSceneProps {
  scene: string;
  className?: string;
}

export function SplineScene({ scene, className = "" }: SplineSceneProps) {
  const [isSplineError, setIsSplineError] = useState(false);

  // Check if WebGL is supported
  useEffect(() => {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    
    if (!gl) {
      setIsSplineError(true);
    }
  }, []);

  const handleSplineError = () => {
    console.log("Spline failed to load - showing fallback");
    setIsSplineError(true);
  };

  if (isSplineError) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <img 
          src="/robot-fallback.png" 
          alt="AI Robot" 
          className="object-contain max-h-full"
          onError={(e) => {
            // If even the fallback image fails to load, show a colored div
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
            target.parentElement!.classList.add('bg-ajent-blue/10', 'rounded-xl');
          }}
        />
      </div>
    );
  }

  return (
    <Suspense 
      fallback={
        <div className="w-full h-full flex items-center justify-center">
          <span className="loader"></span>
        </div>
      }
    >
      <Spline
        scene={scene}
        className={className}
        onError={handleSplineError}
      />
    </Suspense>
  );
}
