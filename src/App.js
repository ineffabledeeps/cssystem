import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Navbar from "./components/Navbar";
import ChatBox from "./components/ChatBox";
import SupportButton from "./components/SupportButton";
import DashboardPage from "./pages/DashboardPage";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "cssystem",
      token: sessionStorage.getItem("token"),``
      chatbox: false,
      supportbutton: true,
    };
  }

  toggleChatbox = () => {
    this.setState({
      chatbox: !this.state.chatbox,
      supportbutton: !this.state.supportbutton,
    });
  };

  render() {
    const { name,token, chatbox, supportbutton } = this.state;

    return (
      <div className="App">
        {supportbutton && <SupportButton fn={this.toggleChatbox} />}
        <Navbar token={token}/>
        {chatbox && <ChatBox fn={this.toggleChatbox} />}
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                (!this.state.token && <LoginPage />) || (this.state.token && <DashboardPage />)
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
