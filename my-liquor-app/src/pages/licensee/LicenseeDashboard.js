import React, { useState } from 'react';
import { Drawer, Button, List, ListItem, ListItemText } from '@mui/material';

const LicenseeDashboard = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setOpen(open);
  };

  const DrawerList = () => (
    <>
    <div className='bg-yellow-500'>
      <h1>Licensee Portal</h1>
      </div>
    <div
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {['Home', 'Apply', 'FAQ', 'Contact Us'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} className='bg-yellow-500' />
          </ListItem>
        ))}
      </List>
    </div>
    </>
  );

  // get licensee from local storage
  const licensee = JSON.parse(localStorage.getItem('licensee'));
  return (
    <div>
      <h1>Welcome {licensee.licenseefirstName}</h1>
      <Button onClick={toggleDrawer(true)}>Open menu</Button>
      <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
        <DrawerList />
      </Drawer>
    </div>
  );
};

export default LicenseeDashboard;
