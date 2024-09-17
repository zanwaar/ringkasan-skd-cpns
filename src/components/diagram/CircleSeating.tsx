import React from 'react';

interface Participant {
  name: string;
  angle: number; // Angle in degrees
}

const participants: Participant[] = [
  { name: 'Lita', angle: 0 },
  { name: 'Joni', angle: 51.43 }, // 360° / 7 ≈ 51.43°
  { name: 'Mita', angle: 102.86 },
  { name: 'Roni', angle: 180 },
  { name: 'x', angle: 230.71 },
  { name: 'x', angle: 282.86 },
  { name: 'x', angle: 333.71 },
];

const CircleSeating: React.FC = () => {
  const radius = 100; // Radius of the circle
  const centerX = 150; // Center of the circle
  const centerY = 150;

  // Calculate the coordinates for each participant
  const getPosition = (angle: number) => {
    const radian = (angle - 90) * (Math.PI / 180); // Adjust for 0 degree being at the top
    return {
      x: centerX + radius * Math.cos(radian),
      y: centerY + radius * Math.sin(radian),
    };
  };

  return (
    <svg width="300" height="300" viewBox="0 0 300 300">
      <circle cx={centerX} cy={centerY} r={radius} stroke="black" strokeWidth="4" fill="none" />
      {participants.map((p, index) => {
        const { x, y } = getPosition(p.angle);
        return (
          <text
            key={index}
            x={x}
            y={y}
            textAnchor="middle"
            alignmentBaseline="middle"
            fontSize="18"
            fill="red"
          >
            {p.name}
          </text>
        );
      })}
    </svg>
  );
};

export default CircleSeating;
