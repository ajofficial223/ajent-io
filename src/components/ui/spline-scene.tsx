
"use client";

import { useEffect, useRef } from "react";
import { Application } from "@splinetool/runtime";

interface SplineSceneProps {
  scene: string;
  className?: string;
}

export function SplineScene({ scene, className = "" }: SplineSceneProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const splineRef = useRef<Application | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    // Create a new Spline application
    splineRef.current = new Application(canvasRef.current);
    
    // Load the scene
    splineRef.current.load(scene);

    // Cleanup function
    return () => {
      if (splineRef.current) {
        // Clean up the Spline application
        splineRef.current = null;
      }
    };
  }, [scene]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
    />
  );
}
