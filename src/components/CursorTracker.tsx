
import React, { useState, useEffect } from 'react';

export const CursorTracker = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  
  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    
    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);
    
    const handleMouseOver = (e: MouseEvent) => {
      if ((e.target as HTMLElement).tagName === 'A' || 
          (e.target as HTMLElement).tagName === 'BUTTON' ||
          (e.target as HTMLElement).closest('a') || 
          (e.target as HTMLElement).closest('button')) {
        setHovered(true);
      } else {
        setHovered(false);
      }
    };
    
    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseover', handleMouseOver);
    
    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);
  
  useEffect(() => {
    // Hide the default cursor
    document.body.style.cursor = 'none';
    
    // Add hoverable elements
    const addHoverEvents = () => {
      const hoverableElements = document.querySelectorAll('a, button, input, [role="button"]');
      hoverableElements.forEach((element) => {
        element.addEventListener('mouseenter', () => setHovered(true));
        element.addEventListener('mouseleave', () => setHovered(false));
      });
    };
    
    addHoverEvents();
    
    // Re-add events when DOM changes
    const observer = new MutationObserver(addHoverEvents);
    observer.observe(document.body, { 
      childList: true, 
      subtree: true 
    });
    
    return () => {
      document.body.style.cursor = 'auto';
      observer.disconnect();
    };
  }, []);
  
  return (
    <>
      <div 
        className={`custom-cursor ${hovered ? 'scale-150' : ''} ${clicked ? 'scale-75' : ''}`}
        style={{ 
          left: `${position.x}px`, 
          top: `${position.y}px`,
          borderColor: hovered ? 'var(--ajent-purple)' : 'var(--ajent-blue)'
        }}
      />
      <div 
        className="cursor-dot blue-glow"
        style={{ 
          left: `${position.x}px`, 
          top: `${position.y}px`,
          backgroundColor: hovered ? 'var(--ajent-purple)' : 'var(--ajent-blue)',
          transform: `translate(-50%, -50%) scale(${hovered ? 0 : 1})`
        }}
      />
    </>
  );
};

export default CursorTracker;
