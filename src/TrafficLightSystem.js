import React, { useState, useEffect } from 'react';

const TrafficLight = ({ color }) => {
  return (
    <div className="traffic-light">
      <div className={`light ${color === 'red' ? 'red' : ''}`}></div>
      <div className={`light ${color === 'yellow' ? 'yellow' : ''}`}></div>
      <div className={`light ${color === 'green' ? 'green' : ''}`}></div>
    </div>
  );
};

const TrafficLightSystem = () => {
  const [activeLight, setActiveLight] = useState(0); // Start with the first light (index 0)
  const [lightColors, setLightColors] = useState(['red', 'red', 'red', 'red']); // Initialize all lights to red

  useEffect(() => {
    const runTrafficLights = () => {
      let newColors = ['red', 'red', 'red', 'red'];
      newColors[activeLight] = 'yellow';
      setLightColors(newColors);

      setTimeout(() => {
        newColors[activeLight] = 'green';
        setLightColors([...newColors]);

        setTimeout(() => {
          newColors[activeLight] = 'red';
          setActiveLight((prev) => (prev + 1) % 4); // Move to the next light (0-3 loop)
          setLightColors([...newColors]);
        }, 6000); // Green light duration: 60 seconds
      }, 1000); // Yellow light duration: 10 seconds
    };

    runTrafficLights();
  }, [activeLight]);

  return (
    <div className="traffic-light-system">
      {lightColors.map((color, index) => (
        <TrafficLight key={index} color={color} />
      ))}
    </div>
  );
};

export default TrafficLightSystem;
