import React from 'react'
import { useEffect, useState } from 'react';
import UserClass from './UserClass';
import User from './User';

const AboutUs = () => {
    const url ="https://api.github.com/users/BendiKarthikeya";

    const [userData, setUserData] = useState({});
    
    const fetchData = async() =>{
        const response = await fetch(url);
        const data = await response.json();
        setUserData(data);
    }

    useEffect(()=>{
        fetchData();
    },[])

  return (
    <div style={{ margin: '20px', textAlign: 'center' }}>
        <h1>About Us</h1>
        <h2>{userData.name}</h2>
        <img src={userData.avatar_url} alt="User Avatar" style={{ borderRadius: '50%', width: '150px', height: '150px' }}></img>

        <UserClass></UserClass>
        <User></User>
    </div>
  )
}

export default AboutUs;
