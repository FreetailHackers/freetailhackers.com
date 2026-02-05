import { useState, useEffect, useRef } from "react";
import Duck from "./duck";

interface FallingDucksProps {
  spawnInterval?: number;
  duckScale?: number;
  animationSpeed?: number;
  fallSpeedX?: number;
  fallSpeedY?: number;
}

interface DuckData {
  id: number;
  startX: number;
  startY: number;
  right: boolean;
}

interface FallingDuckProps {
  id: string;
  startX: number;
  startY: number;
  duckScale: number;
  animationSpeed: number;
  fallSpeedX: number;
  fallSpeedY: number;
  right: boolean;
}

interface Position {
  x: number;
  y: number;
}

const FallingDucks: React.FC<FallingDucksProps> = ({
  spawnInterval = 1500,
  duckScale = 4,
  animationSpeed = 100,
  fallSpeedX = 2,
  fallSpeedY = 3,
}) => {
  const [ducks, setDucks] = useState<DuckData[]>([]);
  const duckCounterRef = useRef(0);

  useEffect(() => {
    // Create a new duck every spawnInterval milliseconds
    const interval = setInterval(() => {
      const newDuck: DuckData = {
        id: duckCounterRef.current++,
        startX: Math.random() * window.innerWidth, // Random horizontal start position
        startY: -100, // Start above the screen
        right: Math.random() < 0.5,
      };

      setDucks((prevDucks) => [...prevDucks, newDuck]);
    }, spawnInterval);

    return () => clearInterval(interval);
  }, [spawnInterval]);

  useEffect(() => {
    // Remove ducks that have fallen off the screen
    const cleanup = setInterval(() => {
      setDucks((prevDucks) =>
        prevDucks.filter((duck) => {
          const element = document.getElementById(`duck-${duck.id}`);
          if (!element) return true;
          const rect = element.getBoundingClientRect();
          return rect.top < window.innerHeight + 100;
        }),
      );
    }, 1000);

    return () => clearInterval(cleanup);
  }, []);

  return (
    <>
      {ducks.map((duck) => {
        console.log(duck.right);
        return (
          <FallingDuck
            key={duck.id}
            id={`duck-${duck.id}`}
            startX={duck.startX}
            startY={duck.startY}
            duckScale={duckScale}
            animationSpeed={animationSpeed}
            fallSpeedX={fallSpeedX}
            fallSpeedY={fallSpeedY}
            right={duck.right}
          />
        );
      })}
    </>
  );
};

const FallingDuck: React.FC<FallingDuckProps> = ({
  id,
  startX,
  startY,
  duckScale,
  animationSpeed,
  fallSpeedX,
  fallSpeedY,
  right,
}) => {
  const [position, setPosition] = useState<Position>({ x: startX, y: startY });

  useEffect(() => {
    const animate = () => {
      setPosition((prev) => ({
        x: right ? prev.x + fallSpeedX : prev.x - fallSpeedX, // Move right
        y: prev.y + fallSpeedY, // Move down (diagonal movement)
      }));
    };

    const animationFrame = setInterval(animate, 16); // ~60fps

    return () => clearInterval(animationFrame);
  }, [fallSpeedX, fallSpeedY, right]);

  return (
    <div
      id={id}
      style={{
        position: "absolute",
        left: `${position.x}px`,
        top: `${position.y}px`,
        transition: "none",
        pointerEvents: "none", // Allow clicks to pass through
      }}
    >
      <Duck animationSpeed={animationSpeed} scale={duckScale} />
    </div>
  );
};

export default FallingDucks;
