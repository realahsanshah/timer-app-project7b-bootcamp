import * as React from 'react';
import PropTypes from 'prop-types';
import './TimerButton.css';

export interface TimerButtonProps {
   buttonAction:any,
   buttonValue:String,
   className:String
}  
 
const TimerButton: React.SFC<TimerButtonProps> = ({buttonAction,buttonValue,className}) => {
    return ( 
        <div className={`button-container ${className}`} onClick={()=>buttonAction()}>
            <p className="button-value">{buttonValue}</p>
        </div>
     );
}

TimerButton.propTypes = {
    buttonAction: PropTypes.func.isRequired,
    buttonValue: PropTypes.string.isRequired,
  };
 
export default TimerButton;