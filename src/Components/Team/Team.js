import React from 'react';
import "./Team.css";
import {
  Typography,
  List,
  ListItem,
  Avatar,
  ListItemText,
  Button
} from "@mui/material";
import { AiOutlinePlus, AiOutlineStar } from "react-icons/ai";

const Team = () => {
  const teamMemberData = [
    {
      "id": 1,
      "name": "John Doe",
      "number": "+91 9876543210",
      "ratings": 4.5,
      "status": "idle"
    },
    {
      "id": 2,
      "name": "Jane Smith",
      "number": "+91 8765432109",
      "ratings": 3.8,
      "status": "serving"
    },
    {
      "id": 3,
      "name": "Alice Johnson",
      "number": "+91 7654321098",
      "ratings": 2.9,
      "status": "not available"
    },
    {
      "id": 4,
      "name": "Michael Brown",
      "number": "+91 6543210987",
      "ratings": 4.1,
      "status": "idle"
    },
    {
      "id": 5,
      "name": "Emily Williams",
      "number": "+91 5432109876",
      "ratings": 3.3,
      "status": "serving"
    },
    {
      "id": 6,
      "name": "David Garcia",
      "number": "+91 4321098765",
      "ratings": 4.2,
      "status": "idle"
    },
    {
      "id": 7,
      "name": "Maria Martinez",
      "number": "+91 3210987654",
      "ratings": 3.7,
      "status": "serving"
    },
    {
      "id": 8,
      "name": "Daniel Rodriguez",
      "number": "+91 2109876543",
      "ratings": 3.9,
      "status": "not available"
    },
    {
      "id": 9,
      "name": "Jennifer Hernandez",
      "number": "+91 1098765432",
      "ratings": 4.0,
      "status": "idle"
    },
    {
      "id": 10,
      "name": "Christopher Lopez",
      "number": "+91 0987654321",
      "ratings": 3.6,
      "status": "serving"
    }
  ];  

  return (
    <div className='team'>
      <div className='teamHeading'>
        <Typography variant="h4" >Team Members</Typography>
        <Button variant="contained"><AiOutlinePlus /> Add New Member</Button>
      </div>
      <List className='teamList'>
        {teamMemberData.map((teamMember) => (
          <ListItem key={teamMember.id} className="teamListItem">
            <CustomAvatar initials={teamMember.name.charAt(0)}></CustomAvatar>
            <ListItemText
              primary={teamMember.name}
              secondary={teamMember.number}
            />
            <ListItemText primary={teamMember.status} className="status" />
            <ListItemText primary='Ratings:' className="ratings" />
            <Button variant="outlined" >
              Show Appointments
            </Button>            
            <Button variant="contained" >
              Edit
            </Button>
          </ListItem>
        ))}
      </List>
    </div>
  )
}

export default Team

const getAvatarColor = (initials) => {
  const colors = ['#f44336', '#9c27b0', '#3f51b5', '#009688', '#ff9800', '#795548'];
  const charCodeSum = initials.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const colorIndex = charCodeSum % colors.length;
  return colors[colorIndex];
};

const CustomAvatar = ({ initials }) => {
  const backgroundColor = getAvatarColor(initials);
  return (
    <Avatar sx={{ bgcolor: backgroundColor }}>
      {initials}
    </Avatar>
  );
};