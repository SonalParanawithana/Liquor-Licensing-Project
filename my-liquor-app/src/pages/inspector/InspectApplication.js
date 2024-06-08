import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { base_url } from '../../utils/urls'

const InspectApplication = () => {
  const [applications, setApplications] = useState([]);
  const {id} = useParams();
  console.log(id);

  const fetchApplication =async()=>{

    await axios.get(`${base_url}/application/${id}`)
    .then((res)=>{
      console.log(res.data);
      setApplications(res.data[0]);
    }
    ).catch((err)=>{
      console.log(err);
    }
    )
  
    
  }


  useEffect(() => {
    // Fetch the application details
    fetchApplication();
  }
  , [id]);


  const handleAddLicense = () => {
    setOtherLicenses([...otherLicenses, { type: "", place: "" }]);
  };

  const handleLicenseChange = (index, field, value) => {
    setOtherLicenses((prevLicenses) => {
      const updatedLicenses = [...prevLicenses];
      updatedLicenses[index][field] = value;
      return updatedLicenses;
    });
  };

  const handleLicenseDelete = (index) => {
    setOtherLicenses((prevLicenses) =>
      prevLicenses.filter((_, i) => i !== index)
    );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  const [holdsOtherLicenses, setHoldsOtherLicenses] = useState(applications.holdsOtherLicenses === "1"); 
  const [technicalCrimeReport, setTechnicalCrimeReport] = useState(applications.technicalCrimeReport === "1");
  const [hasLiquorLicense, setHasLiquorLicense] = useState(applications.hasLiquorLicense === "1");

  const [otherLicenses, setOtherLicenses] = useState([]); 


  const [formData, setFormData] = useState({
    // Initialize with empty string or null values
    licenseeID: '',
    fullName: '',
    address: '',
    teleFax: '',
    businessRegNo: '',
    nationality: '',
    idCardNo: '',
    age: '',
    occupation: '',
    licenseType: '',
    natureOfLicense: '',
    numberOfRooms: '',
    differentlicensesNameAddress: '',
    totalDurationOfLicense: '',
    yearOfCommencement: '',
    postalAddress: '',
    district: '',
    divisionalSecretariat: '',
    policeArea: '',
    electorate: '',
    exciseStation: '',
    publicWorship: 'no', // Default value
    schools: 'no', // Default value
    foreignTavern: 'no', // Default value
    clubAct: 'no', // Default value
    ministry: 'no', // Default value
    active5Years: 'no', // Default value
    bankAccount: 'no', // Default value
    criminaloffenseConvicted: 'no', // Default value
    exciseoffenseConvicted: 'no', // Default value
    premiseoffenseCheck: 'no', // Default value
    blacklistCheck: 'no', // Default value
    technicalCrimeReport: 'no', // Default value
    CrimeReportYear: '',
    CrimeReportTCRNo: '',
    CrimeReportFine: '',
    ownershipType: '',
    ownershipDispute: 'no', //default value
    buildingArea: '',
    floorType: '',
    roofType: '',
    wallType: '',
    doorsWindowsVentilation: '',
    assessmentNo: '',
  });

  // const [formData, setFormData] = useState({
  //   licenseeID: applications.licenseeID,
  //   fullName: applications.fullName, // Pre-filled
  //   address: applications.address, // Pre-filled
  //   teleFax: applications.teleFax, // Pre-filled
  //   businessRegNo: applications.businessRegNo, // Pre-filled
  //   nationality: applications.nationality, // Pre-filled
  //   idCardNo: applications.idCardNo, // Pre-filled
  //   age: applications.age, // Pre-filled
  //   occupation: applications.occupation, // Pre-filled
  //   licenseType: applications.licenseType, // Pre-filled
  //   natureOfLicense: applications.natureOfLicense, // Pre-filled
  //   numberOfRooms: applications.numberofRooms, // Pre-filled
  //   differentlicensesNameAddress: applications.differentlicensesNameAddress, // Pre-filled
  //   totalDurationOfLicense: applications.totalDurationOfLicense, // Pre-filled
  //   yearOfCommencement: applications.yearOfCommencement, // Pre-filled
  //   postalAddress: applications.postalAddress, // Pre-filled
  //   district: applications.district, // Pre-filled
  //   divisionalSecretariat: applications.divisionalSecretariat, // Pre-filled
  //   policeArea: applications.policeArea, // Pre-filled
  //   electorate: applications.electorate, // Pre-filled
  //   exciseStation: applications.exciseStation, // Pre-filled
  //   publicWorship: applications.publicWorship === "yes" ? "yes" : "no", // Pre-filled
  //   schools: applications.schools === "yes" ? "yes" : "no", // Pre-filled
  //   foreignTavern: applications.foreignTavern === "yes" ? "yes" : "no", // Pre-filled
  //   clubAct: applications.clubAct === "yes" ? "yes" : "no", // Pre-filled
  //   ministry: applications.ministry === "yes" ? "yes" : "no", // Pre-filled
  //   active5Years: applications.active5Years === "yes" ? "yes" : "no", // Pre-filled
  //   bankAccount: applications.bankAccount === "yes" ? "yes" : "no", // Pre-filled
  //   criminaloffenseConvicted: applications.criminaloffenseConvicted === "yes" ? "yes" : "no", // Pre-filled
  //   exciseoffenseConvicted: applications.exciseoffenseConvicted === "yes" ? "yes" : "no", // Pre-filled
  //   premiseoffenseCheck: applications.premiseoffenseCheck === "yes" ? "yes" : "no", // Pre-filled
  //   blacklistCheck: applications.blacklistCheck === "yes" ? "yes" : "no", // Pre-filled
  //   technicalCrimeReport: applications.technicalCrimeReport === "yes" ? "yes" : "no", // Pre-filled
  //   CrimeReportYear: applications.CrimeReportYear, // Pre-filled
  //   CrimeReportTCRNo: applications.CrimeReportTCRNo, // Pre-filled
  //   CrimeReportFine: applications.CrimeReportFine, // Pre-filled
  //   ownershipType: applications.ownershipType, // Pre-filled
  //   ownershipDispute: applications.ownershipDispute === "yes" ? "yes" : "no", // Pre-filled
  //   buildingArea: applications.buildingArea, // Pre-filled
  //   floorType: applications.floorType, // Pre-filled
  //   roofType: applications.roofType, // Pre-filled
  //   wallType: applications.wallsType, // Pre-filled
  //   doorsWindowsVentilation: applications.doorsWindowsVentilation, // Pre-filled
  //   assessmentNo: applications.assessmentNo, // Pre-filled
  // });

  useEffect(() => {
    if (applications) { // Only update state if data is available
      setHoldsOtherLicenses(applications.holdsOtherLicenses === "1");
      setTechnicalCrimeReport(applications.technicalCrimeReport === "1");
      setHasLiquorLicense(applications.hasLiquorLicense === "1");

      // Update formData with fetched application data
      setFormData({
        licenseeID: applications.licenseeID,
    fullName: applications.fullName, // Pre-filled
    address: applications.address, // Pre-filled
    teleFax: applications.teleFax, // Pre-filled
    businessRegNo: applications.businessRegNo, // Pre-filled
    nationality: applications.nationality, // Pre-filled
    idCardNo: applications.idCardNo, // Pre-filled
    age: applications.age, // Pre-filled
    occupation: applications.occupation, // Pre-filled
    licenseType: applications.licenseType, // Pre-filled
    natureOfLicense: applications.natureOfLicense, // Pre-filled
    numberOfRooms: applications.numberofRooms, // Pre-filled
    differentlicensesNameAddress: applications.differentlicensesNameAddress, // Pre-filled
    totalDurationOfLicense: applications.totalDurationOfLicense, // Pre-filled
    yearOfCommencement: applications.yearOfCommencement, // Pre-filled
    postalAddress: applications.postalAddress, // Pre-filled
    district: applications.district, // Pre-filled
    divisionalSecretariat: applications.divisionalSecretariat, // Pre-filled
    policeArea: applications.policeArea, // Pre-filled
    electorate: applications.electorate, // Pre-filled
    exciseStation: applications.exciseStation, // Pre-filled
    publicWorship: applications.publicWorship === "yes" ? "yes" : "no", // Pre-filled
    schools: applications.schools === "yes" ? "yes" : "no", // Pre-filled
    foreignTavern: applications.foreignTavern === "yes" ? "yes" : "no", // Pre-filled
    clubAct: applications.clubAct === "yes" ? "yes" : "no", // Pre-filled
    ministry: applications.ministry === "yes" ? "yes" : "no", // Pre-filled
    active5Years: applications.active5Years === "yes" ? "yes" : "no", // Pre-filled
    bankAccount: applications.bankAccount === "yes" ? "yes" : "no", // Pre-filled
    criminaloffenseConvicted: applications.criminaloffenseConvicted === "yes" ? "yes" : "no", // Pre-filled
    exciseoffenseConvicted: applications.exciseoffenseConvicted === "yes" ? "yes" : "no", // Pre-filled
    premiseoffenseCheck: applications.premiseoffenseCheck === "yes" ? "yes" : "no", // Pre-filled
    blacklistCheck: applications.blacklistCheck === "yes" ? "yes" : "no", // Pre-filled
    technicalCrimeReport: applications.technicalCrimeReport === "yes" ? "yes" : "no", // Pre-filled
    CrimeReportYear: applications.CrimeReportYear, // Pre-filled
    CrimeReportTCRNo: applications.CrimeReportTCRNo, // Pre-filled
    CrimeReportFine: applications.CrimeReportFine, // Pre-filled
    ownershipType: applications.ownershipType, // Pre-filled
    ownershipDispute: applications.ownershipDispute === "yes" ? "yes" : "no", // Pre-filled
    buildingArea: applications.buildingArea, // Pre-filled
    floorType: applications.floorType, // Pre-filled
    roofType: applications.roofType, // Pre-filled
    wallType: applications.wallsType, // Pre-filled
    doorsWindowsVentilation: applications.doorsWindowsVentilation, // Pre-filled
    assessmentNo: applications.assessmentNo, // Pre-filled
      });
    }
  }, [applications]);

  return (
    <div>
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-3xl">
        <h2 className="text-center text-xl font-bold mb-4">
          DIGITAL APPLICATION FORM FOR ISSUE OF LIQUOR LICENSE
        </h2>
        <p className="text-center mb-4">
          From ............................ To ............................
        </p>
        <p className="text-center text-sm mb-8">
          To be completed by the Application as accurately as possible by, (a)
          the option which is not practiced or (b) filing in the details or (c)
          state “Not Applicable” if currently not relevant.
        </p>
        <h3 className="text-center text-lg font-bold mb-4">General Details</h3>
        <form onSubmit>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="fullName"
            >
              Full Name of Applicant/Applicants:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="fullName"
              name="fullName"
              type="text"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter full name"
              readOnly
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="address"
            >
              Address:
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter address"
              readOnly
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="teleFax"
            >
              Tele/Fax No.:
            </label>
            <input 
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="teleFax"
              name="teleFax"
              type="text"
              value={formData.teleFax}
              onChange={handleChange}
              placeholder="Enter telephone or fax number"
              readOnly
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="businessRegNo"
            >
              Business Registration No. (where applicable):
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="businessRegNo"
              name="businessRegNo"
              type="text"
              value={formData.businessRegNo}
              onChange={handleChange}
              placeholder="Enter business registration number"
              readOnly
            />
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="nationality"
              >
                Nationality:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="nationality"
                name="nationality"
                type="text"
                value={formData.nationality}
                onChange={handleChange}
                placeholder="Enter nationality"
                readOnly
              />
            </div>
            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="idCardNo"
              >
                ID Card No.:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="idCardNo"
                name="idCardNo"
                type="text"
                value={formData.idCardNo}
                onChange={handleChange}
                placeholder="Enter ID card number"
                readOnly
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="age"
              >
                Age:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="age"
                name="age"
                type="text"
                value={formData.age}
                onChange={handleChange}
                placeholder="Enter age"
                readOnly
              />
            </div>
            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="occupation"
              >
                Occupation:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="occupation"
                name="occupation"
                type="text"
                value={formData.occupation}
                onChange={handleChange}
                placeholder="Enter occupation"
                readOnly
              />
            </div>
          </div>

          {/* License */}

          <h3 className="text-center text-lg font-bold mb-4">
            License Details
          </h3>
          <div className="mb-4 flex">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="licenseType"
            >
              Type of License : FL/
            </label>
            <input
              className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="licenseType"
              name="licenseType"
              type="text"
              placeholder="Enter license type"
              readOnly
              value={formData.licenseType}
              onChange={handleChange}
            />
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="natureOfLicense"
              >
                Nature of License:
              </label>
              <input
                className="mr-2 leading-tight"
                type="radio"
                name="natureOfLicense"
                id="offPremises"
                value="offPremises"
                checked={formData.natureOfLicense === "offPremises"}
                onChange={handleChange}
                readOnly
              />
              <label className="text-gray-700" htmlFor="offPremises">
                Off-Premises
              </label>
              <input
                className="mr-2 ml-4 leading-tight"
                type="radio"
                name="natureOfLicense"
                id="onPremises"
                value="onPremises"
                checked={formData.natureOfLicense === "onPremises"}
                onChange={handleChange}
                readOnly
              />
              <label className="text-gray-700" htmlFor="onPremises">
                On-Premises
              </label>
            </div>

            {/* <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="premisesType"
              >
                License Premises:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="premisesType"
                name="premisesType"
                type="text"
                value={formData.premisesType}
                onChange={handleChange}
                placeholder="Enter license premises"
              />
            </div> */}
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="numberOfRooms"
              >
                IF FL07, Hotel License, the number of Rooms *If not Ignore this field*:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="numberOfRooms"
                type="text"
                placeholder="Enter number of rooms"
                name="numberOfRooms"
                value={formData.numberOfRooms}
                onChange={handleChange}
                readOnly
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Does the applicant hold other Excise Licenses?
            </label>
            <div className="flex items-center">
              <input
                type="radio"
                id="holdsOtherLicensesYes"
                name="holdsOtherLicenses"
                checked={holdsOtherLicenses}
                onChange={(e) => setHoldsOtherLicenses(e.target.checked)}
                className="mr-2"
                readOnly
              />
              <label htmlFor="holdsOtherLicensesYes" className="mr-4">
                Yes
              </label>
              <input
                type="radio"
                id="holdsOtherLicensesNo"
                name="holdsOtherLicenses"
                checked={!holdsOtherLicenses}
                onChange={(e) => setHoldsOtherLicenses(!e.target.checked)}
                className="mr-2"
                readOnly
              />
              <label htmlFor="holdsOtherLicensesNo">No</label>
            </div>
          </div>
          {holdsOtherLicenses && (
            <div>
              <h4 className="text-center text-lg mb-4">Other Licenses</h4>
              {otherLicenses.map((license, index) => (
                <div key={index} className="mb-4">
                  <div className="grid grid-cols-2 gap-4 mb-2">
                    <div>
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor={`otherLicenseType${index}`}
                      >
                        Type of License:
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id={`otherLicenseType${index}`}
                        name={`otherLicenseType${index}`}
                        type="text"
                        value={license.type}
                        onChange={(e) =>
                          handleLicenseChange(index, "type", e.target.value)
                        }
                        placeholder="Start from FL/..."
                        readOnly
                      />
                    </div>
                    <div>
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor={`otherLicensePlace${index}`}
                      >
                        Place of License:
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id={`otherLicensePlace${index}`}
                        name={`otherLicensePlace${index}`}
                        type="text"
                        value={license.place}
                        onChange={(e) =>
                          handleLicenseChange(index, "place", e.target.value)
                        }
                        placeholder="Enter place of other license"
                        readOnly
                      />
                    </div>
                  </div>
                  <button
                    onClick={() => handleLicenseDelete(index)}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Cancel
                  </button>
                </div>
              ))}
              <div className="flex justify-center">
                <button
                  type="button"
                  onClick={handleAddLicense}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Add Another License
                </button>
              </div>
            </div>
          )}

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Has a Liquor License been in operation in this premises as at 15th
              Nov of the current year?
            </label>
            <div className="flex items-center">
              <input
                className="mr-2 leading-tight"
                type="radio"
                name="hasLiquorLicense"
                id="hasLiquorLicenseYes"
                value="yes"
                onChange={() => setHasLiquorLicense(true)}
              />
              <label className="text-gray-700" htmlFor="hasLiquorLicenseYes">
                Yes
              </label>
              <input
                className="mr-2 ml-4 leading-tight"
                type="radio"
                name="hasLiquorLicense"
                id="hasLiquorLicenseNo"
                value="no"
                onChange={() => setHasLiquorLicense(false)}
                
              />
              <label className="text-gray-700" htmlFor="hasLiquorLicenseNo">
                No
              </label>
            </div>
          </div>

          {hasLiquorLicense && (
            <div className="mb-4">
             
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="namesAndAddress"
                >
                  Names & Address of the License (If different from above)
                </label>
                <textarea
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="differentlicensesNameAddress"
                  placeholder="Enter names and address"
                  name="differentlicensesNameAddress"
                  value={formData.differentlicensesNameAddress}
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="totalDuration"
                >
                  Total duration (continuously) the License in operation at this
                  premises [Enter the number of years and months (Ex - 5 years 11 months)]
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="totalDurationOfLicense"
                  type="text"
                  placeholder="Enter total duration"
                  name="totalDurationOfLicense"
                  value={formData.totalDurationOfLicense}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="yearOfCommencement"
                >
                  Year of Commencement
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="yearOfCommencement"
                  type="text"
                  placeholder="Enter year of commencement"
                  name="yearOfCommencement"
                  value={formData.yearOfCommencement}
                  onChange={handleChange}
                />
              </div>
            </div>
          )}

          {/* Geographic Location of Premises Section */}

          <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-2xl mb-8">
            <h2 className="text-center text-xl font-bold mb-8">
              Geographic Location of Premises where Applicant Propose to Operate
              License
            </h2>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="postalAddress"
              >
                Postal Address:
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="postalAddress"
                placeholder="Enter postal address"
                name="postalAddress"
                value={formData.postalAddress}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="mb-4 grid grid-cols-2 gap-4">
              <div>
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="district"
                >
                  District:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="district"
                  type="text"
                  name="district"
                  placeholder="Enter district"
                  value={formData.district}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="divisionalSecretariat"
                >
                  Divisional Secretariat:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="divisionalSecretariat"
                  name="divisionalSecretariat"
                  type="text"
                  placeholder="Enter divisional secretariat"
                  value={formData.divisionalSecretariat}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="mb-4 grid grid-cols-2 gap-4">
              <div>
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="policeArea"
                >
                  Police Area:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="policeArea"
                  type="text"
                  placeholder="Enter police area"
                  name="policeArea"
                  value={formData.policeArea}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="electorate"
                >
                  Electorate:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="electorate"
                  type="text"
                  placeholder="Enter electorate"
                  name="electorate"
                  value={formData.electorate}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="exciseStation"
              >
                Excise Station:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="exciseStation"
                type="text"
                placeholder="Enter excise station"
                name="exciseStation"
                value={formData.exciseStation}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Suitability of Premises Section */}
          <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-2xl mb-8">
            <h2 className="text-center text-xl font-bold mb-8">
              Suitability of Premises as per its Location
            </h2>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Is the distance to following places more than that prescribed as
                per the type of license? (Retail off licenses - 100m Consumption
                within premises - 500m.)
              </label>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                A Place of public religious worship
              </label>
              <div className="flex items-center">
                <input
                  className="mr-2 leading-tight"
                  type="radio"
                  name="publicWorship"
                  id="publicWorshipYes"
                  value="yes"
                  onChange={(e) =>
                    setFormData({ ...formData, publicWorship: e.target.value })
                  }
                />
                <label className="text-gray-700" htmlFor="publicWorshipYes">
                  Yes
                </label>
                <input
                  className="mr-2 ml-4 leading-tight"
                  type="radio"
                  name="publicWorship"
                  id="publicWorshipNo"
                  value="no"
                  
                  onChange={(e) =>
                    setFormData({ ...formData, publicWorship: e.target.value })
                  }
                />
                <label className="text-gray-700" htmlFor="publicWorshipNo">
                  No
                </label>
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Schools
              </label>
              <div className="flex items-center">
                <input
                  className="mr-2 leading-tight"
                  type="radio"
                  name="schools"
                  id="schoolsYes"
                  value="yes"
                  onChange={(e) =>
                    setFormData({ ...formData, schools: e.target.value })
                  }
                />
                <label className="text-gray-700" htmlFor="schoolsYes">
                  Yes
                </label>
                <input
                  className="mr-2 ml-4 leading-tight"
                  type="radio"
                  name="schools"
                  id="schoolsNo"
                  value="no"
                  
                  onChange={(e) =>
                    setFormData({ ...formData, schools: e.target.value })
                  }
                />
                <label className="text-gray-700" htmlFor="schoolsNo">
                  No
                </label>
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Is the premises situated within a Foreign Liquor Tavern area?
              </label>
              <div className="flex items-center">
                <input
                  className="mr-2 leading-tight"
                  type="radio"
                  name="foreignTavern"
                  id="foreignTavernYes"
                  value="yes"
                  onChange={(e) =>
                    setFormData({ ...formData, foreignTavern: e.target.value })
                  }
                />
                <label className="text-gray-700" htmlFor="foreignTavernYes">
                  Yes
                </label>
                <input
                  className="mr-2 ml-4 leading-tight"
                  type="radio"
                  name="foreignTavern"
                  id="foreignTavernNo"
                  value="no"
                  onChange={(e) =>
                    setFormData({ ...formData, foreignTavern: e.target.value })
                  }
                  
                />
                <label className="text-gray-700" htmlFor="foreignTavernNo">
                  No
                </label>
              </div>
            </div>
          </div>

          {/* Club License Holders Section */}
          <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-2xl">
            <h2 className="text-center text-xl font-bold mb-8">
              For Club License Holders (FL 13 A) - Complete only if relevant
            </h2>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Are you registered under the Club Act No. 17 of 1975?
              </label>
              <div className="flex items-center">
                <input
                  className="mr-2 leading-tight"
                  type="radio"
                  name="clubAct"
                  id="clubActYes"
                  value="yes"
                  onChange={(e) =>
                    setFormData({ ...formData, clubAct: e.target.value })
                  }
                />
                <label className="text-gray-700" htmlFor="clubActYes">
                  Yes
                </label>
                <input
                  className="mr-2 ml-4 leading-tight"
                  type="radio"
                  name="clubAct"
                  id="clubActNo"
                  value="no"
                  onChange={(e) =>
                    setFormData({ ...formData, clubAct: e.target.value })
                  }
                  
                />
                <label className="text-gray-700" htmlFor="clubActNo">
                  No
                </label>
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Are you registered under the Ministry of Sports/Ministry of
                Social Services?
              </label>
              <div className="flex items-center">
                <input
                  className="mr-2 leading-tight"
                  type="radio"
                  name="ministry"
                  id="ministryYes"
                  value="yes"
                  onChange={(e) =>
                    setFormData({ ...formData, ministry: e.target.value })
                  }
                />
                <label className="text-gray-700" htmlFor="ministryYes">
                  Yes
                </label>
                <input
                  className="mr-2 ml-4 leading-tight"
                  type="radio"
                  name="ministry"
                  id="ministryNo"
                  value="no"
                  onChange={(e) =>
                    setFormData({ ...formData, ministry: e.target.value })
                  }
                  
                />
                <label className="text-gray-700" htmlFor="ministryNo">
                  No
                </label>
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Have you been actively operating the last 5 years?
              </label>
              <div className="flex items-center">
                <input
                  className="mr-2 leading-tight"
                  type="radio"
                  name="active5Years"
                  id="active5YearsYes"
                  value="yes"
                  onChange={(e) =>
                    setFormData({ ...formData, active5Years: e.target.value })
                  }
                />
                <label className="text-gray-700" htmlFor="active5YearsYes">
                  Yes
                </label>
                <input
                  className="mr-2 ml-4 leading-tight"
                  type="radio"
                  name="active5Years"
                  id="active5YearsNo"
                  value="no"
                  onChange={(e) =>
                    setFormData({ ...formData, active5Years: e.target.value })
                  }
                  
                />
                <label className="text-gray-700" htmlFor="active5YearsNo">
                  No
                </label>
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Do you hold a Bank Account?
              </label>
              <div className="flex items-center">
                <input
                  className="mr-2 leading-tight"
                  type="radio"
                  name="bankAccount"
                  id="bankAccountYes"
                  value="yes"
                  onchange={(e) =>
                    setFormData({ ...formData, bankAccount: e.target.value })
                  }
                />
                <label className="text-gray-700" htmlFor="bankAccountYes">
                  Yes
                </label>
                <input
                  className="mr-2 ml-4 leading-tight"
                  type="radio"
                  name="bankAccount"
                  id="bankAccountNo"
                  value="no"
                  onChange={(e) =>
                    setFormData({ ...formData, bankAccount: e.target.value })
                  }
                  
                />
                <label className="text-gray-700" htmlFor="bankAccountNo">
                  No
                </label>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-2xl flex-col">
            <h2 className="text-center text-xl font-bold mb-8 ">
              Criminal Offences
            </h2>
            <div className="mb-4">
              <div className="flex items-center mb-2 justify-around">
                <p className="block text-gray-700 text-sm font-bold mb-2">
                  Have you been convicted of any criminal offences?
                </p>
                <label className="mr-4">
                  <input
                    type="radio"
                    name="criminaloffenseConvicted"
                    value="yes"
                    onChange={handleChange}
                    className="mr-1"
                  />
                  Yes
                </label>
                <label>
                  <input
                    type="radio"
                    name="criminaloffenseConvicted"
                    value="no"
                    className="mr-1"
                    onChange={handleChange}
                    
                  />
                  No
                </label>
              </div>

              <div className="flex items-center mb-2 justify-around">
                <p className="block text-gray-700 text-sm font-bold mb-2">
                  Have you been convicted for any excise offences?
                </p>
                <label className="mr-4">
                  <input
                    type="radio"
                    name="exciseoffenseConvicted"
                    value="yes"
                    onchange={handleChange}
                    className="mr-1"
                  />
                  Yes
                </label>
                <label>
                  <input
                    type="radio"
                    name="exciseoffenseConvicted"
                    value="no"
                    className="mr-1"
                    onChange={handleChange}
                    
                  />
                  No
                </label>
              </div>

              <div className="flex items-center mb-2 justify-around">
                <p className="block text-gray-700 text-sm font-bold mb-2">
                  Are there any records regarding any criminal or excise offence
                  committed at the proposed premises?
                </p>
                <label className="mr-4">
                  <input
                    type="radio"
                    name="premiseoffenseCheck"
                    value="yes"
                    onChange={handleChange}
                    className="mr-1"
                  />
                  Yes
                </label>
                <label>
                  <input
                    type="radio"
                    name="premiseoffenseCheck"
                    value="no"
                    onChange={handleChange}
                    className="mr-1"
                    
                  />
                  No
                </label>
              </div>

              <div className="flex items-center mb-2 justify-around">
                <p className="block text-gray-700 text-sm font-bold mb-2">
                  Have you been blacklisted for holding excise licenses?
                </p>
                <label className="mr-4">
                  <input
                    type="radio"
                    name="blacklistCheck"
                    value="yes"
                    onchange={handleChange}
                    className="mr-1"
                  />
                  Yes
                </label>
                <label>
                  <input
                    type="radio"
                    name="blacklistCheck"
                    value="no"
                    onChange={handleChange}
                    className="mr-1"
                    
                  />
                  No
                </label>
              </div>

              <div className="flex items-center mb-4 justify-around">
                <p className="block text-gray-700 text-sm font-bold mb-2">
                  Have you been issued with any Technical Crime Reports in the
                  past 3 years?
                </p>
                <label className="mr-4">
                  <input
                    type="radio"
                    name="technicalCrimeReport"
                    value="yes"
                    className="mr-1"


                    onChange={(e) => setTechnicalCrimeReport(true)}
                  />
                  Yes
                </label>
                <label>
                  <input
                    type="radio"
                    name="technicalCrimeReport"
                    value="no"
                    className="mr-1"
                    onChange={(e) => setTechnicalCrimeReport(false)}
                    
                  />
                  No
                </label>
              </div>

              {technicalCrimeReport && (
                <div className="ml-8 space-y-4">
                  <div className="flex items-center">
                    <label className="mr-2 text-gray-700">Year:</label>
                    <input
                      type="text"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      name="CrimeReportYear"
                      value={formData.CrimeReportYear}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="flex items-center">
                    <label className="mr-2 text-gray-700">No of TCR:</label>
                    <input
                      type="text"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      name="CrimeReportTCRNo"
                      value={formData.CrimeReportTCRNo}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="flex items-center">
                    <label className="mr-2 text-gray-700">Fine (Rs.):</label>
                    <input
                      type="text"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      name="CrimeReportFine"
                      value={formData.CrimeReportFine}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-2xl">
            <div className="mb-4">
              <h2 className="text-center text-xl font-bold mb-8">
                Proof of ownership, Approval for use and description of the
                premises
              </h2>

              <div className="flex items-center mb-4 justify-around">
                <p className="block text-gray-700 text-sm font-bold mb-2">Type of Ownership:</p>
                <label className="mr-4">
                  <input
                    type="radio"
                    name="ownershipType"
                    value="owned"
                    className="mr-1"
                    onChange={handleChange}
                  />
                  Owned
                </label>
                <label>
                  <input
                    type="radio"
                    name="ownershipType"
                    value="rented"
                    className="mr-1"
                    onChange={handleChange}
                  />
                  Rented
                </label>
              </div>

              <div className="mb-4 text-gray-700">
                Attach Copy of Registered Deed/Rental, Lease Agreement -
                certified by a Notary Public as ANNEX 3
              </div>

              <div className="flex items-center mb-4 justify-around">
                <p className="block text-gray-700 text-sm font-bold mb-2">
                  Any dispute regarding the Ownership?
                </p>
                <label className="mr-4">
                  <input
                    type="radio"
                    name="ownershipDispute"
                    value="yes"
                    className="mr-1"
                    onChange={handleChange}
                  />
                  Yes
                </label>
                <label>
                  <input
                    type="radio"
                    name="ownershipDispute"
                    value="no"
                    className="mr-1"
                    onChange={handleChange}
                    
                  />
                  No
                </label>
              </div>
              <div className="mb-4 text-gray-700">
                If "Yes" give details in ANNEX 4
              </div>

              <div className="flex items-center mb-4">
                <p className="block text-gray-700 text-sm font-bold mb-2">
                  What area of the building is occupied by the proposed
                  premises?
                </p>
                <label className="mr-4">
                  <input
                    type="radio"
                    name="buildingArea"
                    value="total"
                    className="mr-1"
                    onChange={handleChange}
                  />
                  Total Building
                </label>
                <label>
                  <input
                    type="radio"
                    name="buildingArea"
                    value="part"
                    className="mr-1"
                    onChange={handleChange}
                    
                  />
                  Part of Building/Floor
                </label>
              </div>
              <div className="mb-4 text-gray-700">
                If "Part of building" - attach a sketch of the total plan
                indicating what the other areas will be used for - as ANNEX 6
              </div>

              <div className="mb-4 text-gray-700">
                Description of the Building (delete if not relevant). Attach a
                certified rough sketch as ANNEX 7
              </div>

              <div className="flex items-center mb-4 justify-around">
                <p className="block text-gray-700 text-sm font-bold mb-2">Floor:</p>
                <label className="mr-4">
                  <input
                    type="radio"
                    name="floorType"
                    value="cemented"
                    className="mr-1"
                    onChange={handleChange}
                  />
                  Cemented
                </label>
                <label className="mr-4">
                  <input
                    type="radio"
                    name="floorType"
                    value="tiled"
                    className="mr-1"
                    onChange={handleChange}
                    
                  />
                  Tiled
                </label>
                <label>
                  <input
                    type="radio"
                    name="floorType"
                    value="other"
                    className="mr-1"
                    onChange={handleChange}
                  />
                  Other
                </label>
              </div>

              <div className="flex items-center mb-4 justify-around">
                <p className="block text-gray-700 text-sm font-bold mb-2">Roof:</p>
                <label className="mr-4">
                  <input
                    type="radio"
                    name="roofType"
                    value="asbestos"
                    className="mr-1"
                    onChange={handleChange}
                  />
                  Asbestos
                </label>
                <label className="mr-4">
                  <input
                    type="radio"
                    name="roofType"
                    value="tiled"
                    className="mr-1"
                    onChange={handleChange}
                    
                  />
                  Tiled
                </label>
                <label>
                  <input
                    type="radio"
                    name="roofType"
                    value="other"
                    className="mr-1"
                    onChange={handleChange}
                  />
                  Other
                </label>
              </div>

              <div className="flex items-center mb-4 justify-around">
                <p className="block text-gray-700 text-sm font-bold mb-2">Walls:</p>
                <label className="mr-4">
                  <input
                    type="radio"
                    name="wallType"
                    value="brick"
                    className="mr-1"
                    onChange={handleChange}
                  />
                  Brick & Mortar
                </label>
                <label className="mr-4">
                  <input
                    type="radio"
                    name="wallType"
                    value="prefab"
                    className="mr-1"
                    onChange={handleChange}
                    
                  />
                  Pre-Fab
                </label>
                <label>
                  <input
                    type="radio"
                    name="wallType"
                    value="other"
                    className="mr-1"
                    onChange={handleChange}
                  />
                  Other
                </label>
              </div>

              <div className="flex items-center mb-4">
                <p className="block text-gray-700 text-sm font-bold mb-2">
                  Describe the type of Doors, Windows & other ventilation:
                </p>
                <input
                  type="text"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="doorsWindowsVentilation"
                  value={formData.doorsWindowsVentilation}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4 text-gray-700">
                if "Others" - describe details in ANNEX 8
              </div>

              <div className="mb-4 text-gray-700 flex justify-around">
                <div className="block text-gray-700 text-sm font-bold mb-2">
                  Assessment No. of the Building:
                  <br /> If no Number, details in ANNEX 9
                </div>
                <input
                  className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="assessmentNo"
                  type="text"
                  placeholder="Enter Assesment No."
                  name="assessmentNo"
                  value={formData.assessmentNo}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-8 text-lg font-extrabold">
            I / We certify and declare that I am / We are aware of the fact that
            mere submission of this application will not entitle me for a
            license, and that in the event of the particulars furnished above
            are found to be false or a violation of the rules and regulations
            and notifications under the Excise Ordinance and rules and
            regulations that will be imposed in future under the said ordinance
            is committed, the license may be suspended or cancelled by the order
            of the Commissioner General of Excise and the decision of the
            Commissioner General of Excise will be the final decision and in the
            event of non-issuance of a license, I will have no claim for
            compensation from the Government of Sri Lanka or from an officer
            acting for or on behalf of the Government of Sri Lanka.
          </div>
          <div className="flex justify-center mt-8">
            <button
              type="submit"
              className="bg-red-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit
            </button>
          </div>
          {/* </div> */}
        </form>
      </div>
    </div>
  )
}

export default InspectApplication