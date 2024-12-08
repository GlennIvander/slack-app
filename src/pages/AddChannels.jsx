import './AddChannels.css';
import { useState } from "react";
import { useData } from "../context/DataProvider";
import axios from 'axios';
import { API_URL } from "../constants/Constants";
import { useNavigate } from "react-router-dom";

function AddChannels(props) {
    const { onLogout } = props;
    const { userHeaders } = useData();
    const [channelName, setChannelName] = useState('');
    const [userIds, setUserIds] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();

    const createChannel = async (e) => {
        e.preventDefault();

        if (!channelName.trim()) {
            setError("Channel name cannot be empty.");
            return;
        }

        if (!userIds.trim()) {
            setError("User IDs cannot be empty.");
            return;
        }

        const userIdsArray = userIds.split(',').map(id => Number(id.trim())).filter(id => !isNaN(id));

        if (userIdsArray.length === 0) {
            setError("Please provide valid user IDs.");
            return;
        }

        try {
            const channelInfo = {
                name: channelName.trim(),
                user_ids: userIdsArray,
            };

            const response = await axios.post(`${API_URL}/channels`, channelInfo, { headers: userHeaders });
            const { data } = response;

            if (data.data) {
                setSuccess(`Channel "${channelName}" created successfully!`);
                setError('');
                setChannelName('');
                setUserIds('');
            } else if (data.errors) {
                setError("Failed to create channel: " + data.errors.join(', '));
                setSuccess('');
            }
        } catch (error) {
            console.error(error);
            setError("An unexpected error occurred.");
            setSuccess('');
        }
    };

    const dashboard = () => {
        navigate('/dashboard');
    };

    const sendMessage = () => {
        navigate('/message');
    };

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
                    <h5 className="channels">➕Add Channels</h5>
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
                        <span className="name">➕ Add Channels</span>
                        {error && <div className="error">{error}</div>}
                        {success && <div className="success">{success}</div>}
                    </header>
                    <div className="addChannel">
                        <form onSubmit={createChannel}>
                            <div className="inputChannel">
                                <label>Channel Name</label>
                                <input
                                    type="text"
                                    placeholder="Enter channel name"
                                    value={channelName}
                                    onChange={(e) => setChannelName(e.target.value)}
                                />
                            </div>
                            <div className="inputChannel">
                                <label>User IDs (comma separated)</label>
                                <input
                                    type="text"
                                    placeholder="Enter user IDs"
                                    value={userIds}
                                    onChange={(e) => setUserIds(e.target.value)}
                                />
                            </div>
                            <div className="submit-container">
                                <button type="submit" className="submitChannel">Create Channel</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddChannels;
