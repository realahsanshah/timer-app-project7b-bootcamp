import React from 'react';
import './Timer.css';

export interface TimerProps {
    
}
 
const Timer: React.SFC<TimerProps> = () => {
    const [minutes,setMinutes]=React.useState(25);
    const [seconds,setSeconds]=React.useState(0);

    const startTimer=()=>{
        console.log("Starting Timer");
    }

    const stopTimer=()=>{
        console.log("Stopping Timer");
    }

    
    const resetTimer=()=>{
        console.log("Resetting Timer");
    }

    

    return ( 
        <div className='timer-container'>

        </div>
     );
}
 
export default Timer;