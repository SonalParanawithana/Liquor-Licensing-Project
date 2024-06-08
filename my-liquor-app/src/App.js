import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from '../src/Home';
import ApplyType from '../src/applytype'; 
import FAQ from './faq';
import ContactUs from '../src/ContactUs';
import LicenseeLogin from './pages/licensee/LicenseeLogin';
import LicenseeSignUp from './pages/licensee/LicenseeSignUp';
import InspectorDashboard from './pages/inspector/InspectorDashboard';
import LicenseeDashboard from '../src/pages/licensee/LicenseeDashboard';
import EmployeeLogin from './pages/EmployeeLogin';
import LicenseeMainLayout from './pages/licensee/LicenseerMainLayout';
import LicenseeForm from './pages/licensee/LicenseeForm';
import InspectorMainLayout from './pages/inspector/InspectorMainLayout';
import InspectApplication from './pages/inspector/InspectApplication';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/apply" element={<ApplyType />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/licenseelogin" element={<LicenseeLogin />} />
        <Route path="/licenseesignup" element={<LicenseeSignUp />} />
        <Route path="/inspectordashboard" element={<InspectorDashboard />} />


        <Route path="/inspector" element={<InspectorMainLayout />} >
          <Route index element={<InspectorDashboard />} />
          <Route path= "application/:id" element={<InspectApplication />} />
        </Route>


        <Route path="/licensee" element={<LicenseeMainLayout />} >
          <Route index element={<LicenseeDashboard />} />
          <Route path="apply-license" element={<LicenseeForm />} />
        </Route>



        {/* <Route path='licensee-dashboard' element={<LicenseeDashboard />} /> */}
        <Route path='/employeelogin' element={<EmployeeLogin />} />
      </Routes>
    </Router>
  );
}

export default App;
