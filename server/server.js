const express = require("express");
const app = express();
const port = 5000;
const bodyParser = require("body-parser");
const authRoute = require("./routes/authRoute");

const cors = require("cors");
app.use(cors());
app.use(bodyParser.json());

app.use(express.json());
// app.use("/api/auth", authRoute);

const { db } = require("./config/db");

db.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Connected to the database");
  }
});

app.post("/api/auth/licensee/signup", async (req, res) => {
  const {
    licenseefirstName,
    licenseeSurname,
    licenseenicNumber,
    licenseeEmail,
    licenseePassword,
    licenseecontactNumber,
    licenseeAddress,
  } = req.body;

  const userChecksql = `SELECT * FROM barowner WHERE licenseeEmail = ?`;

  const userCheck = await new Promise((resolve, reject) => {
    db.query(userChecksql, [licenseeEmail], (err, result) => {
      if (err) {
        reject(new Error(err.message));
      }
      resolve(result);
    });
  });

  if (userCheck.length > 0) {
    return res.status(400).json({ message: "User already exists" });
  }
  const sql = `INSERT INTO barowner (licenseefirstName, licenseeSurname, licenseenicNumber, licenseeEmail, licenseePassword, licenseecontactNumber, licenseeAddress) VALUES (?, ?, ?, ?, ?, ?, ?)`;

  const userSubmit = await new Promise((resolve, reject) => {
    db.query(
      sql,
      [
        licenseefirstName,
        licenseeSurname,
        licenseenicNumber,
        licenseeEmail,
        licenseePassword,
        licenseecontactNumber,
        licenseeAddress,
      ],
      (err, result) => {
        if (err) {
          reject(new Error(err.message));
        }
        resolve(result);
      }
    );
  });

  console.log(userSubmit);

  if (userSubmit.affectedRows > 0) {
    return res.status(200).json({ message: "User registered" });
  }

  res.json("Licensee registered");
});

app.post("/api/auth/licensee/login", async (req, res) => {
  const { email, password } = req.body;

  const sql = `SELECT * FROM barowner WHERE licenseeEmail = ? AND licenseePassword = ?`;

  const userCheck = await new Promise((resolve, reject) => {
    db.query(sql, [email, password], (err, result) => {
      if (err) {
        reject(new Error(err.message));
      }
      resolve(result);
    });
  });

  if (userCheck.length == 0) {
    res.status(400).json({ message: "Invalid credentials" });
  }

  console.log(userCheck);
  console.log(userCheck[0]);

  return res.status(200).json(userCheck[0]);
});
app.post("/api/auth/employee/login", async (req, res) => {
  const { email, password } = req.body;

  const sql = `SELECT * FROM barowner WHERE licenseeEmail = ? AND licenseePassword = ?`;

  const userCheck = await new Promise((resolve, reject) => {
    db.query(sql, [email, password], (err, result) => {
      if (err) {
        reject(new Error(err.message));
      }
      resolve(result);
    });
  });

  if (userCheck.length == 0) {
    return res.status(400).json({ message: "Invalid credentials" });
  }

  res.status(200).json({ message: "Login Successful" });
});

app.post("/api/application/licenseapplications", async (req, res) => {
  const {
    fullName,
    address,
    teleFax,
    businessRegNo,
    nationality,
    idCardNo,
    age,
    occupation,
    licenseType,
    natureOfLicense,
    numberofRooms,
    holdsOtherLicenses,
    otherLicense,
    hasLiquorLicense,
    differentlicensesNameAddress,
    totalDurationOfLicense,
    yearOfCommencement,
    postalAddress,
    district,
    divisionalSecretariat,
    policeArea,
    electorate,
    exciseStation,
    publicWorship,
    schools,
    foreignTavern,
    clubAct,
    ministry,
    active5Years,
    bankAccount,
    criminaloffenseConvicted,
    exciseoffenseConvicted,
    premiseoffenseCheck,
    blacklistCheck,
    technicalCrimeReport,
    CrimeReportYear,
    CrimeReportTCRNo,
    CrimeReportFine,
    ownershipType,
    ownershipDispute,
    buildingArea,
    floorType,
    roofType,
    wallType,
    doorsWindowsVentilation,
    assessmentNo,
    licenseeID,
  } = req.body;

  console.log(req.body);
  const query = `
    INSERT INTO application (
      fullName, address, teleFax, businessRegNo, nationality, idCardNo, age, occupation, licenseType,
      natureOfLicense, numberofRooms, holdsOtherLicenses, otherLicense, hasLiquorLicense, differentlicensesNameAddress,
      totalDurationOfLicense, yearOfCommencement, postalAddress, district, divisionalSecretariat, policeArea, electorate,
      exciseStation, publicWorship, schools, foreignTavern, clubAct, ministry, active5Years, bankAccount,
      criminaloffenseConvicted, exciseoffenseConvicted, premiseoffenseCheck, blacklistCheck, technicalCrimeReport,
      CrimeReportYear, CrimeReportTCRNo, CrimeReportFine, ownershipType, ownershipDispute, buildingArea, floorType, roofType,
      wallsType, doorsWindowsVentilation, assessmentNo, licenseeID
    ) VALUES (
      ?,?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?
    )
  `;

  try {
    const userSubmit = await new Promise((resolve, reject) => {
      db.query(
        query,
        [
          fullName,
          address,
          teleFax,
          businessRegNo,
          nationality,
          idCardNo,
          age,
          occupation,
          licenseType,
          natureOfLicense,
          numberofRooms,
          holdsOtherLicenses,
          otherLicense,
          hasLiquorLicense,
          differentlicensesNameAddress,
          totalDurationOfLicense,
          yearOfCommencement,
          postalAddress,
          district,
          divisionalSecretariat,
          policeArea,
          electorate,
          exciseStation,
          publicWorship,
          schools,
          foreignTavern,
          clubAct,
          ministry,
          active5Years,
          bankAccount,
          criminaloffenseConvicted,
          exciseoffenseConvicted,
          premiseoffenseCheck,
          blacklistCheck,
          technicalCrimeReport,
          CrimeReportYear,
          CrimeReportTCRNo,
          CrimeReportFine,
          ownershipType,
          ownershipDispute,
          buildingArea,
          floorType,
          roofType,
          wallType,
          doorsWindowsVentilation,
          assessmentNo,
          licenseeID,
        ],
        (err, result) => {
          if (err) {
            console.log("error");
            console.log(err);
            console.log("result");
            console.log(result);
            reject(new Error(err.message));
          }
          resolve(result);
        }
      );
    });

    if (userSubmit.affectedRows > 0) {
      const updateAppoinment = `INSERT INTO appointments (licenseeID, application_id) VALUES (?, ?)`;
      const userAppointmentSubmit = await new Promise((resolve, reject) => {
        db.query(
          updateAppoinment,
          [licenseeID, userSubmit.insertId],
          (err, result) => {
            if (err) {
              console.log("error");
              console.log(err);
              console.log("result");
              console.log(result);
              reject(new Error(err.message));
            }
            resolve(result);
          }
        );
      });

      return res.status(200).json({ message: "Application submitted" });
    }

    res.json("Application submitted successfully");
  } catch (err) {
    console.log(err);
  }

  // console.log(userSubmit);

  // if (userSubmit.affectedRows > 0) {
  //   return res.status(200).json({ message: 'Application submitted' });
  // }
});
app.post("/api/employee/login", async (req, res) => {
  const { email, password } = req.body;

  const sql = `SELECT * FROM employees WHERE employee_email = ? AND employee_password = ?`;

try{  const userCheck = await new Promise((resolve, reject) => {
    db.query(sql, [email, password], (err, result) => {
      if (err) {
        reject(new Error(err.message));
      }
      resolve(result);
    });
  });

  if (userCheck.length == 0) {
    return res.status(400).json({ message: "Invalid credentials" });
  }

  res.status(200).json({ message: "Login Successful", user: userCheck[0] });
}catch(err){
  console.log(err);
  res.status(400).json({ message: "Invalid credentials" });
  throw new Error(err);
}


});

app.get("/api/inspector/applications", async (req, res) => {

  const sql = `SELECT application.application_id, application.licenseeID, application.dateSubmitted, appointments.inspector_status
  FROM appointments 
  LEFT JOIN application ON appointments.application_id = application.application_id 
  WHERE appointments.inspector_id IS NULL`;


try{  
  const applications = await new Promise((resolve, reject) => {
    db.query(sql, (err, result) => {
      if (err) {
        reject(new Error(err.message));
      }
      resolve(result);
    });
  });

  res.status(200).json(applications);}
  catch(err){
    console.log(err);
    res.status(400).json({ message: "Invalid credentials" });
    throw new Error(err);
  }
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
