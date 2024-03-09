import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import UserTable from '../UserTable/UserTable';

const UsersData = () => {

    const initialData = [
        { name: "John Doe", Email: "john.doe@example.com", Roles: "Banker" },
        { name: "Jane Smith", Email: "jane.smith@example.com", Roles: "Editor" },
        { name: "Bob Johnson", Email: "bob.johnson@example.com", Roles: "Cashier" },
        { name: "Alice Lee", Email: "alice.lee@example.com", Roles: "Banker" },
        { name: "Mark Davis", Email: "mark.davis@example.com", Roles: "Editor" },
        { name: "Emily White", Email: "emily.white@example.com", Roles: "Cashier" },
        { name: "Chris Brown", Email: "chris.brown@example.com", Roles: "Banker" },
        { name: "Sarah Miller", Email: "sarah.miller@example.com", Roles: "Editor" },
        { name: "David Wilson", Email: "david.wilson@example.com", Roles: "Cashier" },
        { name: "David Wilson", Email: "david.wilson2@example.com", Roles: "Banker" },
        { name: "Ella Johnson", Email: "ella.johnson@example.com", Roles: "Editor" },
        { name: "Mike Thompson", Email: "mike.thompson@example.com", Roles: "Cashier" },
        { name: "Sophia Davis", Email: "sophia.davis@example.com", Roles: "Banker" },
        { name: "William Wilson", Email: "william.wilson@example.com", Roles: "Editor" },
        { name: "Olivia White", Email: "olivia.white@example.com", Roles: "Cashier" },
      ];
      
      
  return (
    <Box
      sx={{
        p: [2, 3],
        // border: '1px solid grey',
        height: '553px',
        width: ['95%', '790px'],
        // backgroundColor: 'lightgrey', // Responsive width
      }}
    >
      <Typography variant="h5">Users</Typography>
      <UserTable data={initialData}/>
    </Box>
  )
}

export default UsersData