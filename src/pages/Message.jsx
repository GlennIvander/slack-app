import './Message.css';
import { useState } from "react";
import { useData } from "../context/DataProvider";
import axios from 'axios';
import { API_URL } from "../constants/Constants";

function Message(props) {
    const { onLogout } = props;
    const { userHeaders } = useData();
    const [receiver, setReceiver] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!receiver) {
            return alert("Please enter a receiver ID in the info @ field.");
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
                setMessages((prevMessages) => [...prevMessages, message]);
                setMessage('');
                alert("Successfully sent a message!");
                return;
            }

            if (data.errors) {
                console.log(data.errors);
            }
        } catch (error) {
            console.error(error);
        }
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
                        <li><span className="circle-online"></span>Mikee</li>
                        <li><span className="group-member-count"></span>Princess, Barbie and 2 others</li>
                    </ul>
                    <button className="logout" onClick={onLogout}>Logout</button>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="right">
                        <header>
                            <span className="name">Mikee</span>
                            <div className="info">
                                @
                                <input
                                    type="number"
                                    className="input-style"
                                    value={receiver}
                                    onChange={(event) => setReceiver(event.target.value)}
                                />
                            </div>
                        </header>
                        <div className="sendMessage">
                            {messages.slice(0).reverse().map((msg, index) => (
                                <div key={index} className="message">
                                    {msg}
                                </div>
                            ))}
                        </div>
                        <footer>
                            <div className="input-wrapper">
                                <span className="envelope">✉️</span>
                                <input
                                    type="text"
                                    placeholder="Message"
                                    value={message}
                                    onChange={(event) => setMessage(event.target.value)}
                                />
                                <button className="send" type="submit">➤</button>
                            </div>
                        </footer>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Message;
