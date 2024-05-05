import React from 'react';
import "./Services.css";
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  Button
} from "@mui/material";
import { AiOutlinePlus } from "react-icons/ai";
import { LuChevronsUpDown } from "react-icons/lu";
import { FiEdit2 } from "react-icons/fi";

const Services = () => {

  const services = [
    {
      "id": 1,
      "categoryName": "Hair",
      "categoryList": [
        {
          "id": 1,
          "name": "Haircut",
          "time": "30 mins",
          "price": "₹30"
        },
        {
          "id": 2,
          "name": "Hair Color",
          "time": "60 mins",
          "price": "₹80"
        },
        {
          "id": 3,
          "name": "Hair Styling",
          "time": "45 mins",
          "price": "₹50"
        }
      ]
    },
    {
      "id": 2,
      "categoryName": "Nail",
      "categoryList": [
        {
          "id": 4,
          "name": "Manicure",
          "time": "45 mins",
          "price": "₹35"
        },
        {
          "id": 5,
          "name": "Pedicure",
          "time": "60 mins",
          "price": "₹45"
        },
        {
          "id": 6,
          "name": "Nail Art",
          "time": "60 mins",
          "price": "₹60"
        }
      ]
    },
    {
      "id": 3,
      "categoryName": "Skin",
      "categoryList": [
        {
          "id": 7,
          "name": "Facial",
          "time": "60 mins",
          "price": "₹50"
        },
        {
          "id": 8,
          "name": "Chemical Peel",
          "time": "45 mins",
          "price": "₹80"
        },
        {
          "id": 9,
          "name": "Microdermabrasion",
          "time": "60 mins",
          "price": "₹100"
        }
      ]
    },
    {
      "id": 4,
      "categoryName": "Body Care",
      "categoryList": [
        {
          "id": 10,
          "name": "Massage",
          "time": "60 mins",
          "price": "₹60"
        },
        {
          "id": 11,
          "name": "Body Scrub",
          "time": "45 mins",
          "price": "₹40"
        },
        {
          "id": 12,
          "name": "Body Wrap",
          "time": "60 mins",
          "price": "₹70"
        }
      ]
    }
  ];


  return (
    <>
      <Typography variant="h4" >Categories & Services</Typography>
      <div className='services'>
        {services.map((service) => (
          <div key={service.id}>
            <div className='serviceHeading'>
              <div className='serviceHeadingName'>
              <Typography variant="h4" >{service.categoryName}</Typography>
              <div className='categoryEditIcon'>
              <FiEdit2 />
              </div>
              </div>
              <Button variant="contained"><AiOutlinePlus /> Add Service</Button>
            </div>
            <List className='categoryList'>
              {service.categoryList.map((serviceItem) => (
                <ListItem key={serviceItem.id} className="categoryListItem">
                  <LuChevronsUpDown className='categoryIcon' />
                  <ListItemText className='categoryName'
                    primary={serviceItem.name}
                  />
                  <ListItemText primary={serviceItem.time} className="categoryTime" />
                  <ListItemText primary={serviceItem.price} className="categoryPrice" />
                  <Button variant="contained" className='editButton'>
                    Edit
                  </Button>
                </ListItem>
              ))}
            </List>
          </div>
        ))}
      </div>
    </>
  )
}

export default Services
