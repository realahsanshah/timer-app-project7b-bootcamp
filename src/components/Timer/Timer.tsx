import React from 'react';
import './Timer.css';

export interface TimerProps {
    
}
 
const Timer: React.SFC<TimerProps> = () => {
    const [minutes,setMinutes]=React.useState(25);
    const [seconds,setSeconds]=React.useState(0);
    const [isOn,setIsOn]=React.useState(false);

    let myInterval:any;

    const startTimer=()=>{
        if(isOn===true){
            return;
        }

        myInterval=setInterval(()=>{
            if(seconds>0){
                setSeconds(seconds-1);
            }
              
            if(seconds===0){
                if(minutes===0){
                    clearInterval(myInterval);
                }else{
                    setMinutes(minutes-1);
                    setSeconds(59);
                }
            }
        },1000);

        setIsOn(true);
    }

    const stopTimer=()=>{
        clearInterval(myInterval);
        setIsOn(false);
    }

    
    const resetTimer=()=>{
        stopTimer();
        setMinutes(25);
        setSeconds(0);
    }

    

    return ( 
        <div className='timer-container'>
            <div className="time-display">
                {minutes}:{seconds<0?`0${seconds}`:seconds}
            </div>
            <div>
                
            </div>
        </div>
     );
}
 
export default Timer;