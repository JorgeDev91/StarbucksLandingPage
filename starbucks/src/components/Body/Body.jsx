import React, { useState } from 'react'

import GreenFlavor from '../../Images/img1.png';
import yellowFlavor from '../../Images/img2.png';
import PinkFlavor from '../../Images/img3.png';
import {DownBar} from '../Downbar/DownBar';

import './Body.css';

export const Body = () => {

    
    const flavorMenu = [ GreenFlavor, yellowFlavor, PinkFlavor];

    let [selectedFlavor, setselectedFlavor] = useState(GreenFlavor);

    const handleChoosedFlavor = (flavor) =>{
        
        setselectedFlavor( selectedFlavor = flavorMenu[flavor]);
    }

  return (
    <>
        <div className='row w-100 mt-5'>
            <div className='container d-lg-inline-flex '>

                <span className='col-lg-1'>

                </span>

                <div className='col-lg-5'>    
                    <div className='container branchContainer '>            
                        <h2 className='justify-content-sm-center'>It's not just Coffe</h2>
                        <h2>It's <span className='brand'>Starbucks</span></h2>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem, 
                            corporis? Omnis non quaerat, accusamus blanditiis ad temporibus. 
                            Modi quas illum dolores harum! Veritatis quo maxime natus! Vitae culpa esse cumque?
                        </p>
                        <button className='btn-custom'> Learn More </button>
                    </div>
                </div>

                <div className='col-lg-6 d-flex justify-content-center'>
                    <img className='productImage' src={selectedFlavor} alt="GreenFlavor" />
                </div>
            </div>
        </div>

        <DownBar onNewFlavor = { (flavor) => handleChoosedFlavor(flavor)}/>
    </>
  )
}


