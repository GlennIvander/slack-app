import React, { useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import DataProvider from "./context/DataProvider";
import Message from "./pages/Message";
import AddChannels from "./pages/AddChannels";
import JoinedChannels from "./pages/JoinedChannels";
import ChannelMessages from "./pages/ChannelMessages";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>
          {/* Upon first loading of the app, this will be loaded first */}
          <Route
            path="/login"
            element={<Login onLogin={handleLogin} />}
          />
          {/* Protected pages. User should be "authenticated" first before they can access this page */}
          <Route
            path="/dashboard"
            element={
              isAuthenticated ? (
                <Dashboard onLogout={handleLogout} />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="/message"
            element={
              isAuthenticated ? (
                <Message onLogout={handleLogout} />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="/addchannels"
            element={
              isAuthenticated ? (
                <AddChannels onLogout={handleLogout} />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="/joinedchannels"
            element={
              isAuthenticated ? (
                <JoinedChannels onLogout={handleLogout} />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="/joinedchannels/:channelId/messages"
            element={
              isAuthenticated ? (
                <ChannelMessages onLogout={handleLogout} />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          {/* Navigate - forces the browser to attach this path to the URL */}
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
