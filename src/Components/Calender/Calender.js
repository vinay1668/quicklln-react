import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import {
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Typography,
} from "@mui/material";
import "./Calender.css";

const localizer = momentLocalizer(moment);
const CustomResource = ({ resource }) => {
  const { title: teamName, avatarUrl, number } = resource;
  const avatarBackgroundColor = getAvatarColor(avatarUrl);
  const backgroundColor = lightBackgroundColors[Math.floor(Math.random()*lightBackgroundColors.length)];
  return (
    <ListItem alignItems="center" style={{ background: backgroundColor ,borderRadius:'10px' }}>
      <ListItemAvatar>
        <Avatar
          sx={{ bgcolor: avatarBackgroundColor }}
          alt={teamName}
          src={avatarUrl}
        />
      </ListItemAvatar>
      <ListItemText primary={teamName} secondary={number} />
    </ListItem>
  );
};

const getAvatarColor = (initials) => {
  const colors = [
    "#f44336","#9c27b0","#3f51b5",
    "#009688","#ff9800","#795548"
  ];
  const charCodeSum = initials.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const colorIndex = charCodeSum % colors.length;
  return colors[colorIndex];
};
const lightBackgroundColors = [
  '#F4D3FF','#F3E5F5','#E1BEE7',
  '#E8EAF6','#D1C4E9','#C5CAE9',
  '#B3E5FC','#B2DFDB','#FFE0B2',
  '#FFCCBC','#FFAB91','#FFD180', 
];
const Scheduler = () => {
  const today = new Date();

  const getResourceEventStyle =()=>{
    let backgroundColor = lightBackgroundColors[Math.floor(Math.random()*lightBackgroundColors.length)];
    return{
      style:{
        backgroundColor,
      }
    }
  }
  const [events, setEvents] = useState([
    {
      id: 1,
      title: "Team Meeting 1",
      start: new Date("2024-04-26T09:00:00"),
      end: new Date("2024-04-26T10:00:00"),
      resourceId: "Ram"
    },
    {
      id: 2,
      title: "Team Meeting 2",
      start: new Date("2024-04-26T11:00:00"),
      end: new Date("2024-04-26T12:00:00"),
      resourceId: "Shyam",
    },
    {
      id: 3,
      title: "Team Meeting 3",
      start: new Date("2024-04-26T14:00:00"),
      end: new Date("2024-04-26T15:00:00"),
      resourceId: "Ram",
    },
    {
      id: 4,
      title: "Team Meeting 4",
      start: new Date("2024-04-26T16:00:00"),
      end: new Date("2024-04-26T17:00:00"),
      resourceId: "Shyam",
    },
    {
      id: 5,
      title: "Team Meeting 5",
      start: new Date("2024-04-26T10:30:00"),
      end: new Date("2024-04-26T11:00:00"),
      resourceId: "Krishna",
    },
    {
      id: 6,
      title: "Team Meeting 6",
      start: new Date("2024-04-26T10:00:00"),
      end: new Date("2024-04-26T12:00:00"),
      resourceId: "Ganesh",
    },
    {
      id: 7,
      title: "Team Meeting 7",
      start: new Date("2024-04-26T11:00:00"),
      end: new Date("2024-04-26T17:00:00"),
      resourceId: "Kanha",
    },
    {
      id: 8,
      title: "Team Meeting 1",
      start: new Date("2024-04-26T08:00:00"),
      end: new Date("2024-04-26T10:00:00"),
      resourceId: "Krishna",
    }
  ]);

  const handleSelectSlot = ({ start, end }) => {
    const title = prompt("Enter event title:");
    if (title) {
      const team = prompt("Enter team name:");
      const newEvent = {
        id: events.length + 1,
        title,
        start,
        end,
        resourceId: team,
      };
      setEvents([...events, newEvent]);
    }
  };

  const handleSelectEvent = (event) => {
    if (window.confirm("Are you sure you want to delete this event?")) {
      const updatedEvents = events.filter((e) => e.id !== event.id);
      setEvents(updatedEvents);
    }
  };
  return (
    <div className="CalenderView">
      <Typography variant="h4">Appointment Timeline</Typography>
      <div className="calender">
        <DndProvider backend={HTML5Backend}>
          <Calendar
            localizer={localizer}
            min={
              new Date(
                today.getFullYear(), 
                today.getMonth(), 
                today.getDate(), 
                8
              )
            }
            events={events}
            startAccessor="start"
            endAccessor="end"
            selectable
            step={15}
            onSelectSlot={handleSelectSlot}
            onSelectEvent={handleSelectEvent}
            views={["day"]}
            defaultView="day"
            defaultDate={new Date()}
            resources={[
              { id: "Ram", title: "Ram", avatarUrl: "R", number: "9306627555" },
              {
                id: "Shyam",
                title: "Shyam",
                avatarUrl: "S",
                number: "9306627558",
              },
              {
                id: "Krishna",
                title: "Krishna",
                avatarUrl: "K",
                number: "9306627558",
              },
              {
                id: "Ganesh",
                title: "Ganesh",
                avatarUrl: "G",
                number: "9306627558",
              },
              {
                id: "Kanha",
                title: "Radha",
                avatarUrl: "R",
                number: "9306627558",
              },
            ]}
            resourceIdAccessor="id"
            resourceTitleAccessor={(resource) => (
              <CustomResource resource={resource} />
            )}
            eventPropGetter={getResourceEventStyle}
            resizable
            draggableAccessor={() => true}
            onEventResize={(resizeType, { event, start, end }) => {
              const updatedEvents = events.map((e) =>
                e.id === event.id ? { ...e, start, end } : e
              );
              setEvents(updatedEvents);
            }}
            onEventDrop={(dropInfo) => {
              const { event, start, end, resourceId } = dropInfo;
              const updatedEvents = events.map((e) =>
                e.id === event.id ? { ...e, start, end, resourceId } : e
              );
              setEvents(updatedEvents);
            }}
          />
        </DndProvider>
      </div>
    </div>
  );
};

export default Scheduler;
