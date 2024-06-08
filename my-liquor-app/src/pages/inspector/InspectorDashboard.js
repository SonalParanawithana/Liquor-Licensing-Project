import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../index';
import { base_url } from '../../utils/urls';
import {Link} from 'react-router-dom';

const InspectorDashboard = () => {
  const [applications, setApplications] = useState([]);
  const [selectedApplication, setSelectedApplication] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    try {
      const response = await axios.get(`${base_url}/inspector/applications`); // Update the endpoint as necessary
      console.log('Applications:', response.data);
      setApplications(response.data);
      setIsLoading(false);

    } catch (error) {
      console.error('Error fetching applications:', error);
      setIsLoading(false);
    }
  };

  const handleViewDetails = (application) => {
    setSelectedApplication(application);
  };

  const handleCancel = () => {
    setSelectedApplication(null);
  };

  const handleChoose = () => {
    // Implement the logic for choosing the application
    console.log('Application chosen:', selectedApplication);
  };

  return (
    <div className="inspector-dashboard">
      <header className="header">
        <h1>Greetings, Inspector!</h1>
        <div className="user-info">
          <div className="username">Excise Inspector</div>
          <div className="icons">
            <span className="icon">🔔</span>
            <span className="icon">👤</span>
          </div>
          <button className="logout-button">Log Out</button>
        </div>
      </header>
      <div className="sidebar">
        <div className="sidebar-item">Application Status</div>
        <div className="sidebar-item">Filled Applications</div>
        <div className="sidebar-item">Pending</div>
      </div>
      <main className="main-content">
        <table className="applications-table">
          <thead>
            <tr>
              <th>ApplicationID</th>
              <th>OwnerID</th>
              <th>SubmissionDate</th>
              <th>Status</th>
              <th>View Application</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr>
                <td colSpan="4">Loading...</td>
              </tr>
            ) : (
              applications.map((app) => (
                <tr key={app.application_id}>
                  <td>{app.application_id}</td>
                  <td>{app.licenseeID}</td>
                  <td>{app.dateSubmitted}</td>
                  <td >{app.inspector_status}</td>
                  <td>
                   <Link
                   to={`/inspector/application/${app.application_id}`}
                   >
                   
                   <button >View Details</button>
                   </Link> 
                  </td>
                  
                </tr>
              ))
            )}
          </tbody>
        </table>
        <div className="action-buttons">
          <button className="cancel-button" onClick={handleCancel}>Cancel</button>
          <button className="choose-button" onClick={handleChoose}>Choose</button>
        </div>
        {selectedApplication && (
          <button className="view-details-button" onClick={() => handleViewDetails(selectedApplication)}>
            View Application Details
          </button>
        )}
      </main>
      <footer className="footer">
        <p>Copyright © 2024 Department of Excise – Sri Lanka. All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default InspectorDashboard;
