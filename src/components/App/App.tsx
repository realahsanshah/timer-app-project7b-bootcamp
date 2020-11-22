import React from 'react';
import Timer from '../Timer/Timer';
import './App.css';

export interface AppProps {
    
}
 
const App: React.SFC<AppProps> = () => {
    return ( 
        <div className="app-container">
            <Timer />
        </div>
     );
}
 
export default App;