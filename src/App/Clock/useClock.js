import { useState } from "react";

export const useClock = () => {
    const time = new Date().toLocaleTimeString();
    const [currentTime, setCurrentTime] = useState(time);
    const date = new Date().toLocaleDateString();
    const [currentDate, setCurrentDate] = useState(date);
  
    const updateTime = () => {
      const time = new Date().toLocaleTimeString();
      setCurrentTime(time);
    };
  
    setInterval(updateTime, 1000);
  
    const updateDate = () => {
      const date = new Date().toLocaleDateString();
      setCurrentDate(date);
    };
    setInterval(updateDate);
  
};