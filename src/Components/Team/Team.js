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
import { FaStar } from 'react-icons/fa';

const Team = () => {
  const teamMemberData = [
    {
      "id": 1,
      "name": "John Doe",
      "number": "+91 9876543210",
      "ratings": 4,
      "status": "Idle"
    },
    {
      "id": 2,
      "name": "Jane Smith",
      "number": "+91 8765432109",
      "ratings": 3,
      "status": "Serving"
    },
    {
      "id": 3,
      "name": "Alice Johnson",
      "number": "+91 7654321098",
      "ratings": 2,
      "status": "Not Available"
    },
    {
      "id": 4,
      "name": "Michael Brown",
      "number": "+91 6543210987",
      "ratings": 4,
      "status": "Idle"
    },
    {
      "id": 5,
      "name": "Emily Williams",
      "number": "+91 5432109876",
      "ratings": 3,
      "status": "Serving"
    },
    {
      "id": 6,
      "name": "David Garcia",
      "number": "+91 4321098765",
      "ratings": 4,
      "status": "Idle"
    },
    {
      "id": 7,
      "name": "Maria Martinez",
      "number": "+91 3210987654",
      "ratings": 3,
      "status": "Serving"
    },
    {
      "id": 8,
      "name": "Daniel Rodriguez",
      "number": "+91 2109876543",
      "ratings": 3,
      "status": "Not Available"
    },
    {
      "id": 9,
      "name": "Jennifer Hernandez",
      "number": "+91 1098765432",
      "ratings": 4,
      "status": "Idle"
    },
    {
      "id": 10,
      "name": "Christopher Lopez",
      "number": "+91 0987654321",
      "ratings": 3,
      "status": "Serving"
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
            <ListItemText className='name'
              primary={teamMember.name}
              secondary={teamMember.number}
            />
            <CustomStatus status={teamMember.status}></CustomStatus>
            <ListItemText primary='Ratings:' className="ratings" secondary={<StarRating rating={teamMember.ratings} />}/>
            <Button variant="outlined" className='showButton'>
              Show Appointments
            </Button>            
            <Button variant="contained"  className='editButton'>
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
const CustomStatus = ({ status }) => {
  let backgroundColor = '';
  let textColor = '';

  const lowerCaseStatus = status.toLowerCase();
  switch (lowerCaseStatus) {
    case 'not available':
      backgroundColor = '#FF57221A';
      textColor = '#FF5722';
      break;
    case 'serving':
      backgroundColor = '#F4D3FF';
      textColor = '#C622FF';
      break;
    default:
      backgroundColor = '#FFBF4E80';
      textColor = '#EE9D00';
  }

  return (
    <ListItemText
      primary={
        <span style={{ backgroundColor: backgroundColor, color: textColor }}>{status}</span>
      }
      className='status'
    />
  );
};
const StarRating = ({ rating }) => {
  const stars = [];

  for (let i = 0; i < 5; i++) {
    if (i < Math.floor(rating)) {
      stars.push(<FaStar key={`full-${i}`} style={{ color: '#C622FF', fontSize: '18px' }} />);
    } else {
      stars.push(<AiOutlineStar key={`outline-${i}`} style={{ color: '#C622FF', fontSize: '20px' }} />);
    }
  }

  return <div style={{ display: 'flex' }}>{stars}</div>;
};
