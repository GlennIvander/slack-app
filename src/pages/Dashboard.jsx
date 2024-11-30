import React from "react";
import './Dashboard.css';

function Dashboard(props) {
  const { onLogout } = props;
  
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
            <span className="circle-online"></span>
            Glenn Ivander
          </div>
          <h3>Channels</h3>
          <ul>
            <li className="active">#kapamilya</li>
            <li className="unread">#kapuso</li>
            <li>#kapatid</li>
          </ul>
          <h3>Direct Messages</h3>
          <ul>
            <li><span className="circle-online"></span>Princess</li>
            <li><span className="group-member-count"></span>Sutla, Barbie</li>
          </ul>
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