const express = require('express');
const app = express();
const port = 5000;

//Data representing applications
const applications = [
  { ApplicationID: 'A01', OwnerID: 'O1', SubmissionDate: '2023/11/23', Status: 'Pending' },
  { ApplicationID: 'A02', OwnerID: 'O2', SubmissionDate: '2023/10/07', Status: 'Pending' },
  { ApplicationID: 'A03', OwnerID: 'O3', SubmissionDate: '2023/09/30', Status: 'Checked' },
  { ApplicationID: 'A04', OwnerID: 'O4', SubmissionDate: '2023/08/01', Status: 'Checked' },
  { ApplicationID: 'A05', OwnerID: 'O5', SubmissionDate: '2023/07/25', Status: 'Checked' },
  { ApplicationID: 'A06', OwnerID: 'O1', SubmissionDate: '2023/06/30', Status: 'Denied' },
];


app.get('/api/applications', (req, res) => {
  res.json(applications);
});


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
