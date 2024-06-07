import React from 'react';
import { useNavigate } from 'react-router-dom';
import newLicense from '../src/Images/new-license.png';
import renewLicense from '../src/Images/renew-license.png';
import './index.css';


const ApplyType = () => {

    const navigate = useNavigate();

    return (
        <div className='apply-type-container'>
          <h1>What are we applying for today?</h1>
            <div className="applynew">
              <img src={newLicense} width={80} height={100} alt="New License" />
              <button onClick={() => navigate('/licenseesignup')}>Apply for a new liquor license</button>
            </div>
            <div className="renew">
              <img src={renewLicense} width={100} height={100} alt="Renew License" />
              <button onClick={() => navigate('/licenseelogin')}>Renew your existing liquor license</button>
            </div>            
        </div>
      
    );
  }

export default ApplyType;