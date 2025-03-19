
"use client";

import { Suspense, lazy, useState, useEffect, useRef } from 'react';
const Spline = lazy(() => import('@splinetool/react-spline'));

interface SplineSceneProps {
  scene: string;
  className?: string;
}

export function SplineScene({ scene, className = "" }: SplineSceneProps) {
  const [isSplineError, setIsSplineError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Check if WebGL is supported right away
  useEffect(() => {
    // Immediately test for WebGL support
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || 
                 canvas.getContext('experimental-webgl');
      
      if (!gl) {
        console.warn("WebGL not supported - showing fallback image");
        setIsSplineError(true);
        setIsLoading(false); // Ensure loading state is cleared
        return; // Exit early if WebGL is not supported
      } else {
        console.log("WebGL is supported, will attempt to load Spline");
      }
    } catch (e) {
      console.error("Error checking WebGL support:", e);
      setIsSplineError(true);
      setIsLoading(false);
      return; // Exit early if error
    }

    // Only set fallback timer if WebGL is supported
    timeoutRef.current = setTimeout(() => {
      console.log("Spline load timeout after 5 seconds - showing fallback");
      setIsSplineError(true);
      setIsLoading(false);
    }, 5000);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleSplineError = () => {
    console.log("Spline failed to load - showing fallback");
    setIsSplineError(true);
    setIsLoading(false);
    // Clear the timeout if there was an error
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const handleSplineLoad = () => {
    console.log("Spline scene loaded successfully");
    setIsLoading(false);
    // Clear the timeout as loading succeeded
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  // If there's an error, show the fallback image immediately
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
        onLoad={handleSplineLoad}
        onError={handleSplineError}
      />
    </Suspense>
  );
}
