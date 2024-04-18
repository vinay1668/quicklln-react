import React from "react";
import "./Dashboard.css";
import {
  Typography,
  List,
  ListItem,
  Avatar,
  ListItemText,
  Button,
  FormControl,
  NativeSelect,
  InputLabel,
  Box
} from "@mui/material";
import {MdPerson, MdEvent, MdFlashOn } from "react-icons/md";

const Dashboard = () => {
  const appointmentsData = [
    {
      id: 1,
      name: "Rajesh Patel",
      phone: "+91 96569 55955",
      details: "Hair",
      dateTime: "12 Mar, 01:30 PM",
      duration: "45min",
      cost: "₹450.00",
    },
    {
      id: 2,
      name: "John Doe",
      phone: "+1 123 456 7890",
      details: "Trim",
      dateTime: "15 Mar, 03:00 PM",
      duration: "30min",
      cost: "₹300.00",
    },
    {
      id: 3,
      name: "Alice Smith",
      phone: "+44 20 1234 5678",
      details: "Coloring",
      dateTime: "18 Mar, 10:00 AM",
      duration: "60min",
      cost: "₹600.00",
    },
    {
      id: 4,
      name: "David Johnson",
      phone: "+1 987 654 3210",
      details: "Shave",
      dateTime: "20 Mar, 02:30 PM",
      duration: "15min",
      cost: "₹150.00",
    },
    {
      id: 5,
      name: "Emma Wilson",
      phone: "+61 2 1234 5678",
      details: "Manicure",
      dateTime: "22 Mar, 11:00 AM",
      duration: "90min",
      cost: "₹900.00",
    },
    {
      id: 6,
      name: "Michael Brown",
      phone: "+1 234 567 8901",
      details: "Facial",
      dateTime: "25 Mar, 04:00 PM",
      duration: "60min",
      cost: "₹500.00",
    },
    {
      id: 7,
      name: "Sophia Miller",
      phone: "+49 1234 567890",
      details: "Waxing",
      dateTime: "28 Mar, 09:30 AM",
      duration: "30min",
      cost: "₹300.00",
    },
    {
      id: 8,
      name: "William Taylor",
      phone: "+44 20 1234 5678",
      details: "Massage",
      dateTime: "30 Mar, 12:00 PM",
      duration: "60min",
      cost: "₹600.00",
    },
  ];
  return (
    <div className="appointmentDashboard">
      <Typography variant="h4" className="dashboardHeading">Todays Overview</Typography>
      <div className="dashboard">
        <Box className="box">
          <Typography variant="h5">Total Sales</Typography>
          <Typography variant="h4" className="data">₹ 5,450.00</Typography>
        </Box>
        <Box className="box">
          <Typography variant="h5">Customer Served</Typography>
          <Typography variant="h4" className="data">07 <MdPerson /></Typography>
        </Box>
        <Box className="box">
          <Typography variant="h5">Upcoming Appointments</Typography>
          <Typography variant="h4" className="data">12 <MdEvent /></Typography>
        </Box>
        <Box className="box">
          <Typography variant="h5">Points</Typography>
          <Typography variant="h4" className="data">09 <MdFlashOn /></Typography>
        </Box>
      </div>
      <div className="appointments">
        <Typography variant="h5">Upcoming Appointments</Typography>
        <List className="list">
          {appointmentsData.map((appointment) => (
            <ListItem key={appointment.id} className="listItem">
              <CustomAvatar initials={appointment.name.charAt(0)}></CustomAvatar>
              <ListItemText
                primary={appointment.name}
                secondary={appointment.phone}
              />
              <ListItemText primary={appointment.details} secondary='+3 Other' className="details"/>
              <ListItemText
                primary={appointment.dateTime}
                secondary={ `• ${appointment.duration}`}
                className="duration"
              />
              <ListItemText primary={ appointment.cost} className="price"/>
              <Box sx={{ minWidth: 150, marginRight: 5 }}>
                <FormControl fullWidth>
                  <InputLabel variant="standard" htmlFor="uncontrolled-native">
                    Team
                  </InputLabel>
                  <NativeSelect
                    defaultValue={30}
                    inputProps={{
                      name: "team",
                      id: "uncontrolled-native",
                    }}
                  >
                    <option>T1</option>
                    <option>T2</option>
                    <option>T3</option>
                    <option>T4</option>
                    <option>T5</option>
                  </NativeSelect>
                </FormControl>
              </Box>
              <Button variant="contained" >
                Edit
              </Button>
            </ListItem>
          ))}
        </List>
      </div>
    </div>
  );
};

export default Dashboard;

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
