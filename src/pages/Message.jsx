import './Message.css';
import { useState, useEffect } from "react";
import { useData } from "../context/DataProvider";
import axios from 'axios';
import { API_URL } from "../constants/Constants";
import { useNavigate } from "react-router-dom";

function Message(props) {
    const { onLogout } = props;
    const { userHeaders } = useData();
    const [receiver, setReceiver] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!receiver) {
            return alert("Please enter valid receiver ID in the info @ field.");
        }

        if (!message.trim()) {
            return alert("Message cannot be empty.");
        }

        try {
            const messageInfo = {
                receiver_id: Number(receiver),
                receiver_class: "User",
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
            const response = await axios.get(`${API_URL}/messages?receiver_id=${receiver}&receiver_class=User`, {headers: userHeaders});

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
                        <span className="name">Direct Messages</span>
                        <div className="info">
                            @
                            <input
                                type="number"
                                className="input-style"
                                placeholder="User ID"
                                value={receiver}
                                onChange={(e) => setReceiver(e.target.value)}
                            />
                        </div>
                    </header>
                    <div className="sendMessage">
                        {error && <div className="error">{error}</div>}
                        {messages.map((msg, index) => (
                            <div key={index} className="message">
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