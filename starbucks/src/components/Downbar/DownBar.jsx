
import { useState } from 'react';
import GreenFlavor from '../../Images/thumb1.png';
import yellowFlavor from '../../Images/thumb2.png';
import PinkFlavor from '../../Images/thumb3.png';

import './DownBar.css';

export const DownBar = ({onNewFlavor}) => {

    let [flavor, setflavor] = useState("GreenFlavor");

     const HandleFlavor = (flavorSelected) => {
        setflavor( flavor = flavorSelected );
        onNewFlavor( flavor );
    }



  return (
    <>
    
        <nav className='navbar navbar-expand mt-5'>
            <div className="container justify-content-center">
                <div className="row">
                    <ul className='navbar-nav'>
                        <li className='nav-item'> <img className='thumb' src={GreenFlavor} alt="GreenFlavor" onClick={() => HandleFlavor(0)} /> </li>
                        <li className='nav-item'> <img className='thumb' src={yellowFlavor} alt="YellowFlavor" onClick={() => HandleFlavor(1)}/> </li>
                        <li className='nav-item'> <img className='thumb' src={PinkFlavor} alt="PinkFlavor" onClick={() => HandleFlavor(2)}/> </li>
                    </ul>
                </div>
            </div>
        </nav>
    
    </>
  )
}
