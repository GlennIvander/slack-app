import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../constants/Constants";
import { useData } from "../context/DataProvider";
import "./ChannelMessages.css";
import { useLocation } from "react-router-dom";

function Message(props) {
  const { onLogout } = props;
  const { userHeaders } = useData();
  const [receiver, setReceiver] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState('');
  const [memberID, setMemberID] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const channelName = location.state?.channelName || "Channel Messages";

  const handleSubmit = async (e) => {
      e.preventDefault();

      if (!receiver) {
          return alert("Wrong Password");
      }

      if (!message.trim()) {
          return alert("Message cannot be empty.");
      }

      try {
          const messageInfo = {
              receiver_id: Number(receiver),
              receiver_class: "Channel",
              body: message
          };

          const response = await axios.post(`${API_URL}/messages`, messageInfo, { headers: userHeaders });
          const { data } = response;

          if (data.data) {
              setMessages((prevMessages) => [...prevMessages, { body: message }]);
              setMessage('');
          } else if (data.errors) {
              console.error(data.errors);
              setError("Failed to send message.");
          }
      } catch (error) {
          console.error(error);
          setError("An unexpected error occurred.");
      }
  };

  const fetchMessages = async () => {
      if (!receiver) return;

      try {
          const response = await axios.get(`${API_URL}/messages?receiver_id=${receiver}&receiver_class=Channel`, {headers: userHeaders});

          const { data } = response;

          if (data.data) {
              setMessages(data.data);
          } else if (data.errors) {
              console.error(data.errors);
              setError("Failed to fetch messages.");
          }
      } catch (error) {
          console.error("Error fetching messages:", error);
          setError("An unexpected error occurred.");
      }
  };

  const addMember = async () => {
    if (!receiver.trim()) {
      return alert("Please enter a valid channel ID.");
    }
  
    if (!memberID.trim()) {
      return alert("Please enter a valid member ID.");
    }
  
    try {
      const memberInfo = {
        id: receiver,
        member_id: Number(memberID),
      };
  
      const response = await axios.post(`${API_URL}/channel/add_member`, memberInfo, { headers: userHeaders });
  
      const { data } = response;
  
      if (data.success) {
        alert("Member added successfully!");
      } else {
        console.error("Add Member Errors:", data.errors);
        setError("Welcome new member.");
        setTimeout(() => {
          setError("");
        }, 3000);
      }
    } catch (error) {
      console.error("Add Member Error:", error.response || error.message);
      setError("An unexpected error occurred while adding the member.");
    }
  };  

  useEffect(() => {
      fetchMessages();
  }, [receiver]);

  const dashboard = () => {
      navigate('/dashboard');
    }

  const addChannels = () => {
      navigate('/addchannels');
    }

  const sendMessage = () => {
      navigate('/message');
    }

    const joinedChannels = () => {
      navigate('/joinedchannels');
  };

  return (
      <div className="home">
          <div className="nav">
              <span className="circle-red"></span>
              <span className="circle-orange"></span>
              <span className="circle-green"></span>
          </div>
          <div className="main">
              <div className="left">
                  <h2 className="dashboard" onClick={dashboard}>Home</h2>
                  <div className="me">
                      <span className="circle-online"></span>Me
                  </div>
                  <h3 className="joinedchannels" onClick={joinedChannels}>Channels</h3>
                  <h5 className="channels" onClick={addChannels}>➕Add Channels</h5>
                  <ul>
                      <li>#kapamilya</li>
                      <li>#kapuso</li>
                      <li>#kapatid</li>
                  </ul>
                  <h3 className="sendmessage" onClick={sendMessage}>Direct Messages</h3>
                  <ul>
                      <li><span className="circle-online"></span>Mikee</li>
                      <li><span className="group-member-count"></span>Victor, John and 2 others</li>
                  </ul>
                  <button className="logout" onClick={onLogout}>Logout</button>
              </div>
              <div className="right">
                <header>
                  <span className="name">{channelName}</span>
                  <div className="info">Password
                    <input
                      type="number"
                      className="input-style"
                      placeholder="Enter the password"
                      value={receiver}
                      onChange={(e) => setReceiver(e.target.value)}
                    />
                  </div>
                  <div className="info">Add Member
                    <input
                      type="number"
                      className="input-style"
                      placeholder="Enter Member ID"
                      value={memberID}
                      onChange={(e) => setMemberID(e.target.value)}
                    />
                    <button onClick={addMember}>Add Member</button>
                  </div>
                </header>
                  <div className="sendMessage">
                      {error && <div className="error">{error}</div>}
                      {messages.map((msg, index) => (
                          <div key={index} className="channelMessage">
                              {msg.body}
                          </div>
                      ))}
                  </div>
                  <footer>
                    <form onSubmit={handleSubmit} className="input-wrapper">
                      <span className="envelope">✉️</span>
                      <input
                        type="text"
                        placeholder="Message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                      />
                      <button className="send" type="submit">➤</button>
                    </form>
                  </footer>
              </div>
          </div>
      </div>
  );
}

export default Message;