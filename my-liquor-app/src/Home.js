import liquor from '../src/Images/liquorpic.jpg';
import { useNavigate } from 'react-router-dom';
import { ButtonGroup, Button } from "@material-tailwind/react";



const Home = () => {

    const navigate = useNavigate();

    return (
        <div className="home-container">
            <div className="hometextpic">
                <div className="image-container">
                    <img src={liquor} className="alcoholpic" width={400} height={250} alt="Liquor" />
                </div>
                <div className="permitpatroltext">
                    <h1>Permit Patrol</h1>
                    <p>Your one-stop place to manage Liquor Licenses efficiently</p>
                </div>
            </div>
            <div className="apply">
                <p>Want to get your license en route for approval today? </p>
                <button className="applybutton" onClick={() => navigate('/apply')}>Apply here</button>
            </div>

            <div className='moredetails'>
                <button className='custom-button' onClick={() => navigate('/contact')}>Make a Complaint</button>
                <button className='custom-button'>Branch Offices</button>
                {/* <button className='custom-button'>License Details</button> */}
            </div>

            <div className="employeesignin">
                <h2>An employee?</h2>
                <button className='employeesigninbutton' onClick={() => navigate('/employeelogin')}>Sign in</button>
            </div>

            {/* <div>
                <ButtonGroup>
                    <Button>One</Button>
                    <Button>Two</Button>
                    <Button>Three</Button>
                </ButtonGroup>
            </div> */}

            <div className="footer">
                <p>Copyright © 2024 Department of Excise - Sri Lanka.<br />All Rights Reserved</p>
            </div>
        </div>

    );
}

export default Home;