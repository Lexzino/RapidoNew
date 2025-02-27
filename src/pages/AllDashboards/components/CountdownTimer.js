import React, { useState, useEffect, useCallback } from 'react';

const CountdownTimer2 = ({ targetDate }) => {

  const minWidth = window.innerWidth;
  
  const calculateTimeLeft = useCallback(() => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }, [targetDate]);

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate, calculateTimeLeft]);

  return (
    <div style={{width: 'inherit', padding: 1, backgroundColor: '#58FD0A', borderRadius: 10, height: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
      {timeLeft.days !== undefined ? (
        <div style={minWidth > 600 ? {width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'start', alignItems: 'center', padding: 5} : {width: '95%', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: 5}}>
          <span className='flex flex-col justify-center items-center' style={ minWidth > 600 ? {fontSize: 13, color: '#194301', paddingRight: 5} : {fontSize: 14, color: 'rgb(228,44,45)', paddingRight: 5, textAlign: 'center'}}>
            <strong className='leading-none'>{timeLeft.hours} :</strong> 
            <label className='text-xs leading-none'>HRS</label>
          </span>
          <span className='flex flex-col justify-center items-center' style={ minWidth > 600 ? {fontSize: 13, color: '#194301', paddingRight: 5} : {fontSize: 14, color: 'rgb(228,44,45)', paddingRight: 5, textAlign: 'center'}}>
            <strong className='leading-none'>{timeLeft.minutes} :</strong> 
            <label className='text-xs leading-none'>MINS</label> 
          </span>
          <span className='flex flex-col justify-center items-center' style={ minWidth > 600 ? {fontSize: 13, color: '#194301', paddingRight: 5} : {fontSize: 14, color: 'rgb(228,44,45)', paddingRight: 5, textAlign: 'center'}}>
            <strong className='leading-none'>{timeLeft.seconds}</strong> 
            <label className='text-xs leading-none'>SECS</label>
          </span>
        </div>
      ) : (
        <span style={ minWidth > 600 ? {fontSize: 12, color: '#194301', paddingRight: 5, paddingLeft: 3} : {fontSize: 14, color: 'rgb(228,44,45)', paddingRight: 5, textAlign: 'center'}}>
            <strong>Appointment is in Session</strong> 
        </span>
      )}
    </div>
  );
};

export default CountdownTimer2;