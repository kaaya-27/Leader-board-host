// src/utils.js
export const convertTimeToMilliSeconds = (timeString) => {
    const [minutes, seconds] = timeString.split(':').map(Number);
    return (minutes * 60 + seconds) * 1000;
  };
  