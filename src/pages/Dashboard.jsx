import './Dashboard.css';
import React, { useState, useEffect } from "react";
import { useData } from "../context/DataProvider";
import axios from "axios";
import { API_URL } from "../constants/Constants";
import { useNavigate } from "react-router-dom";

function Dashboard(props) {
  const { onLogout } = props;
  const { userHeaders } = useData();
  const [userList, setUserList] = useState([]);
  const navigate = useNavigate();

  const getUsers = async () => {
    try {
      const response = await axios.get(`${API_URL}/users`, { headers: userHeaders });
      const users = response.data.data;
      setUserList(users);
    } catch (error) {
      if(error.response.data.errors) {
        return alert("Cannot get users");
      }
    }
  }

  useEffect(() => {
    if(userList.length === 0) {
      getUsers();
    }
  })

  const sendMessage = () => {
    navigate('/message');
  }
  
  return (
    <div className="home">
      <div className="nav">
        <span className="circle-red"></span>
        <span className="circle-orange"></span>
        <span className="circle-green"></span>
      </div>
      <div className="main">
        <div className="left">
          <h2>Glenn</h2>
          <div className="me">
            <span className="circle-online"></span>Glenn Ivander
          </div>
          <h3>Channels</h3>
          <ul>
            <li>#kapamilya</li>
            <li>#kapuso</li>
            <li>#kapatid</li>
          </ul>
          <h3>Direct Messages</h3>
          <ul>
            <li onClick={sendMessage}><span className="circle-online"></span>Mikee</li>
            <li><span className="group-member-count"></span>Princess, Barbie and 2 others</li>
          </ul>
          <button className="logout" onClick={onLogout}>Logout</button>
        </div>
        <div className="right">
          <header>
            <span className="name">#dotesInteract</span>
            <div className="info">25 | DotesAddict for Everyone!</div>
          </header>
          <div className="message">
            <ul>
              <li className="message-input"><img className="message-photo" src="https://api.dicebear.com/9.x/adventurer/svg?seed=Vivian" alt="profile-photo"></img>
              <div className="message-object">
                <span className="name">Prensis</span>
                <span className="time">6:19am</span>
                <div className="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum voluptatum quod possimus quisquam necessitatibus soluta expedita laborum similique quia dolores laudantium dolore ea error repudiandae, nihil nostrum vitae atque iure.</div>
              </div>
              </li>
            </ul>
            <ul>
              <li className="message-input"><img className="message-photo" src="https://api.dicebear.com/9.x/adventurer/svg?seed=Vivian" alt="profile-photo"></img>
              <div className="message-object">
                <span className="name">Prensis</span>
                <span className="time">6:19am</span>
                <div className="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum voluptatum quod possimus quisquam necessitatibus soluta expedita laborum similique quia dolores laudantium dolore ea error repudiandae, nihil nostrum vitae atque iure.</div>
              </div>
              </li>
            </ul>
          </div>
          <footer>
            <div className="input-wrapper">
              <span>✉️</span>
              <input type="text" placeholder="Message"></input>
            </div>
          </footer>
        </div>
      </div>
    </div>
    
    
  );
}
export default Dashboard;