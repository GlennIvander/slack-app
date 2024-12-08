import './JoinedChannels.css';
import React, { useState, useEffect } from "react";
import { useData } from "../context/DataProvider";
import axios from "axios";
import { API_URL } from "../constants/Constants";
import { useNavigate } from "react-router-dom";

function Channels({ onLogout }) {
  const { userHeaders } = useData();
  const [receiver, setReceiver] = useState('');
  const [channels, setChannels] = useState([]);
  const navigate = useNavigate();

  const getChannels = async () => {
    try {
      const response = await axios.get(`${API_URL}/channels`, { headers: userHeaders });
      const { data } = response;
      if (data.data) {
        setChannels(data.data);
      } else if (data.errors) {
        console.log(data.errors);
      }
    } catch (error) {
      alert("Failed to fetch channels. Please try again.");
      console.error("Error fetching channels:", error);
    }
  };

  const navigateToChannelMessages = (channelId, channelName) => {
    navigate(`/joinedchannels/${channelId}/messages`, { state: { channelName } });
  };  

  const handleNavigation = (path) => {
    navigate(path);
  };

  useEffect(() => {
    getChannels();
  }, []);

  return (
    <div className="home">
      <nav className="nav">
        <span className="circle-red"></span>
        <span className="circle-orange"></span>
        <span className="circle-green"></span>
      </nav>
      <div className="main">
        <aside className="left">
          <h2 className="dashboard" onClick={() => handleNavigation('/dashboard')}>Home</h2>
          <div className="me">
            <span className="circle-online"></span>Me
          </div>
          <h3>Channels</h3>
          <h5 className="channels" onClick={() => handleNavigation('/addchannels')}>➕Add Channels</h5>
          <ul>
            <li>#kapamilya</li>
            <li>#kapuso</li>
            <li>#kapatid</li>
          </ul>
          <h3 className="sendmessage" onClick={() => handleNavigation('/message')}>Direct Messages</h3>
          <ul>
            <li><span className="circle-online"></span>Mikee</li>
            <li><span className="group-member-count"></span>Victor, John and 2 others</li>
          </ul>
          <button className="logout" onClick={onLogout}>Logout</button>
        </aside>
        <section className="right">
          <header>
            <span className="name">MyChannels</span>
            <input
              type="text"
              placeholder="Search channels..."
              value={receiver}
              onChange={(e) => setReceiver(e.target.value)}
              className="search-bar"
            />
          </header>
          <div className="contentChannel">
            {channels.length === 0 ? (
              <p>Just Loading Mah Fwend!</p>
            ) : (
              <ul className="channels-list">
                {channels
                  .filter((channel) => channel.name.toLowerCase().includes(receiver.toLowerCase()))
                  .map((channel) => (
                    <li key={channel.id}>
                      <span>{channel.name}</span>
                      <button onClick={() => navigateToChannelMessages(channel.id, channel.name)}>
                        View Messages
                      </button>
                    </li>
                  ))}
              </ul>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Channels;
