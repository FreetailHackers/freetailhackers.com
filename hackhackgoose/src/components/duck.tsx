import { useState, useEffect } from "react";
import duckySpriteSheet from "../assets/ducky_3_spritesheet.png";

const Duck = ({ scale = 2, animationSpeed = 100, loop = true, spriteSheetPath = duckySpriteSheet }) => {
  const [currentFrame, setCurrentFrame] = useState(0);

  // Sprite sheet configuration
  const FRAME_WIDTH = 32;
  const FRAME_HEIGHT = 32;
  const COLUMNS = 6;
  const ROWS = 4;
  const TOTAL_FRAMES = 6; // 6 frames on row 2

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFrame((prevFrame) => {
        const nextFrame = prevFrame + 1;
        if (nextFrame >= TOTAL_FRAMES) {
          return loop ? 0 : prevFrame;
        }
        return nextFrame;
      });
    }, animationSpeed);

    return () => clearInterval(interval);
  }, [animationSpeed, loop]);

  // Calculate the position of the current frame in the sprite sheet (row 2)
  const column = currentFrame;
  const offsetX = column * FRAME_WIDTH;
  const offsetY = FRAME_HEIGHT * scale;
  const WIDTH = COLUMNS * FRAME_WIDTH * scale;
  const HEIGHT = ROWS * FRAME_HEIGHT * scale;

  return (
    <div
      style={{
        width: FRAME_WIDTH * scale,
        height: FRAME_HEIGHT * scale,
        overflow: "hidden",
        imageRendering: "pixelated",
      }}
    >
      <div
        style={{
          width: WIDTH,
          height: HEIGHT,
          backgroundImage: `url(${spriteSheetPath})`,
          backgroundSize: "cover",
          transform: `translate(-${offsetX * scale}px, -${offsetY}px)`,
          imageRendering: "pixelated",
        }}
      />
    </div>
  );
};

export default Duck;

//  width: FRAME_WIDTH * scale,
//           height: FRAME_HEIGHT * scale,
//           backgroundImage: `url(${spriteSheetPath})`,
//           backgroundSize: `${COLUMNS * FRAME_WIDTH * scale}px ${FRAME_HEIGHT * scale}px`,
//           backgroundPosition: `-${offsetX * scale}px -${offsetY * scale}px`,
//           imageRendering: "pixelated",
