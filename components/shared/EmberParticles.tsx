"use client";

import { useEffect, useMemo, useState } from "react";

type Ember = {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  drift: number;
};

function generateEmbers(count: number): Ember[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    size: 2 + Math.random() * 3,
    duration: 7 + Math.random() * 8,
    delay: Math.random() * 10,
    drift: (Math.random() - 0.5) * 60,
  }));
}

export function EmberParticles({ count = 20 }: { count?: number }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Deliberately set after mount: defers the randomized particle
    // positions to the client so server and client markup match.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  const embers = useMemo(() => (mounted ? generateEmbers(count) : []), [mounted, count]);

  if (!mounted) return null;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {embers.map((ember) => (
        <span
          key={ember.id}
          className="absolute bottom-0 rounded-full bg-gold-400"
          style={{
            left: `${ember.left}%`,
            width: `${ember.size}px`,
            height: `${ember.size}px`,
            opacity: 0,
            boxShadow: "0 0 6px 1px rgba(201,162,75,0.8), 0 0 2px rgba(255,140,60,0.9)",
            animation: `ember-rise ${ember.duration}s ease-in ${ember.delay}s infinite`,
            // @ts-expect-error custom property consumed by the keyframe below
            "--ember-drift": `${ember.drift}px`,
          }}
        />
      ))}
    </div>
  );
}
